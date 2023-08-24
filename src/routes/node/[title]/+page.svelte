<script>
  export let data;
  import { JsonView } from "@zerodevx/svelte-json-view";
  let json = data.links;
</script>

<JsonView {json} />
