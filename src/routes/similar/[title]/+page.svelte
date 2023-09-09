<script>
  export let data;
  import { JsonView } from "@zerodevx/svelte-json-view";
  let json = data.matches;
</script>

<h1>Shorter distance is better</h1>
{#each data.matches as match}
  <div>[[<a href="/node/{match.title}">{match.title}</a>]] with distance of {match.dist}</div>
{/each}
<!-- <JsonView {json} /> -->
