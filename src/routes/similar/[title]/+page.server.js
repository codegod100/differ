import { client, e } from "$lib/client"
import distance from 'js-levenshtein'
export async function load({ params }) {
    let titles = {}
    let subnodes = await e
        .select(e.Subnode, () => ({
            title: true
        }))
        .run(client)
    let matches = subnodes.map(({ title }) => {
        let dist = distance(params.title, title)
        if (dist < 7 && !(titles[title])) {
            titles[title] = true
            return { title, dist }
        }
    }).filter(x => x).sort((a, b) => a.dist - b.dist)
    console.log(matches)
    return { matches }

}