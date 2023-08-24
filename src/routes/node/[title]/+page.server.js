import { backLinks } from "$lib/queries.mjs"
import { json } from '@sveltejs/kit';
import e from "$lib/edgedb"
import * as edgedb from "edgedb";

const client = edgedb.createClient();
export async function load({ params }) {
    let links = await backLinks(client, { title: params.title })
    console.log(links, links.backlinks)
    return { links }
}