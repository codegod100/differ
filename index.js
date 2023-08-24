import { exec } from "node:child_process"
import fs from "fs"
import { insertSubnode } from "./dbschema/queries.mjs"
import path from "node:path"
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
    processFolder(user)
}

function processFolder(user) {
    let files = fs.readdirSync(path.join(garden, user));
    for (const file of files) {
        let title = file.replace(/\.[^/.]+$/, "")
        processFile(path.join(dir, file), title)
    }
}
function processFile(file, title) {
    let body = fs.readFileSync(file).toString()
    let links = parseLinks(body)
    console.log({ user, body, title, links })
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