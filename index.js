import { exec } from "node:child_process"
import { fstat } from "node:fs"
import fs from "fs"
exec(`./diff.sh`, (err, stdout, stderr) => {
    console.log(stdout)
    let files = stdout.split("\n").filter((name) => name != "")
    console.log(files)
    for (const file of files) {
        let content = fs.readFileSync(`${process.env.REPO}/${file}`).toString()
        console.log(content)
    }
})