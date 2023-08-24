import * as edgedb from "edgedb";
import e from "$lib/edgedb"
const client = edgedb.createClient();
export { client, e }