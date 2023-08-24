import { exec } from "node:child_process"
import fs from "fs"
import { insertSubnode, updateSubnode } from "./dbschema/queries.mjs"
import path from "node:path"
import edgedb from "edgedb";

const client = edgedb.createClient();
// exec(`./diff.sh`, (err, stdout, stderr) => {
//     console.log(stdout)
//     let files = stdout.split("\n").filter((name) => name != "")
//     console.log(files)
//     for (const file of files) {

//     }
// })
let garden = "garden"
let users = fs.readdirSync(garden);
for (const user of users) {
    await processFolder(user)
}

async function processFolder(user) {
    let files = fs.readdirSync(path.join(garden, user), { recursive: true });
    for (const file of files) {
        let title = file.replace(/\.[^/.]+$/, "")
        try { await processFile(path.join(garden, user, file), title, user) } catch (e) { console.log(e.message) }
    }
}
async function processFile(file, title, user) {
    console.log({ file })
    let body = fs.readFileSync(file).toString()
    let links = parseLinks(body)
    let subnode = { user, body, title, links }

    try { await insertSubnode(client, subnode) } catch (e) {
        await updateSubnode(client, subnode)
        console.log("Skipping: ", e.message)
    }
    console.log(subnode)
}

function parseLinks(content) {
    const regexp = /\[\[(.*?)\]\]/g
    let matches = content.matchAll(regexp)
    // for (const match of matches) {
    //     console.log(match);
    //     console.log(match.index)
    // }
    let links = Array.from(matches).map((match) => match[1])
    // console.log(links)
    return links
}