import { client, e } from "$lib/client";
import distance from "js-levenshtein";
export async function load({ params }) {
  let subnodes = await client.query("select distinct (Subnode.title)");
  let matches = subnodes
    .map((title) => {
      let dist = distance(params.title, title);
      if (dist < 7) {
        return { title, dist };
      }
    })
    .filter((x) => x)
    .sort((a, b) => a.dist - b.dist);
  return { matches };
}
