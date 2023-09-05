<script>
  export let data;
  import { JsonView } from "@zerodevx/svelte-json-view";
  import { convertLinks } from "$lib/convertLinks";
  import showdown from "showdown";
  const converter = new showdown.Converter();
  converter.setFlavor("github");
</script>

<h1>{data.title}</h1>
{#each data.node.subnodes as subnode}
  <div class="subnode">
    <h2>User: {subnode.user}</h2>
    <div>{@html converter.makeHtml(convertLinks(subnode.body))}</div>
  </div>
{/each}

<h2>Backlinks:</h2>
{#each data.node.backlinks as backlink}
  <div class="backlink">
    [[<a href={backlink.title}>{backlink.title}</a>]] links to
    <div class="backlink-2">
      {@html backlink.links_to
        .map((link) => `[[<a href="${link}">${link}</a>]]`)
        .join(",")}
    </div>
  </div>
{/each}

<!-- <JsonView json={data.node} /> -->

<style>
  .backlink {
    margin-bottom: 3px;
  }
  .backlink-2 {
    margin-left: 20px;
  }
  .subnode {
    border-style: dashed;
  }
</style>
