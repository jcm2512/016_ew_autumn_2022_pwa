<script>
  import { eng } from "../store.js";
</script>

<div
  class="translate jp-title updated"
  on:click={() => (console.log("clicked"), ($eng = !$eng))}
>
  {#if $eng}
    英語→日本語
  {:else}
    日本語→英語
  {/if}
</div>

<style>
  .jp-title {
    font-family: "Kosugi Maru";
  }
</style>
