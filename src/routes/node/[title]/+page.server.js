import { client, e } from "$lib/client"

export async function load({ params }) {
    let node = await e.select({
        subnodes: e.select(e.Subnode, (subnode) => ({
            title: true,
            user: true,
            body: true,
            links_to: true,
            filter: e.op(subnode.title, "=", params.title.toLowerCase())
        })),
        backlinks: e.select(e.Subnode, (backlink) => ({
            filter: e.op(params.title, "in", backlink.links_to),
            title: true,
            links_to: true
        }))
    }).run(client)
    // console.log({ node })
    return { node, title: params.title }
}