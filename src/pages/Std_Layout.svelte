<script>
  import {
    stampCollection,
    menuState,
    triggerMenuState,
    updateStamps,
    viewAllStamps,
  } from "../store.js";
  import { animateCSS } from "../animateCSS.svelte";

  // let stageCards, next, heading, menu;
  // let CARDS = [];
  let DOMelements = [];

  // export let id;
</script>

{#each Object.keys($stampCollection[$menuState].stamps) as area_name}
  <div class="title">
    {$stampCollection[$menuState].stamps[area_name].title}
  </div>
  <div class="menu_item stamps">
    {#key $updateStamps}
      {#each Object.keys($stampCollection[$menuState].stamps[area_name].area_stamps) as stamp, index}
        {#if $stampCollection[$menuState].stamps[area_name].area_stamps[stamp].found || $viewAllStamps}
          <img
            bind:this={DOMelements[stamp]}
            on:click|preventDefault={() => {
              animateCSS(DOMelements[stamp], "tada");
            }}
            src={$stampCollection[$menuState].stamps[area_name].area_stamps[
              stamp
            ].img}
            alt={$stampCollection[$menuState].stamps[area_name].area_stamps[
              stamp
            ].name}
            class="stamp"
          />
        {:else}
          <img
            bind:this={DOMelements[stamp]}
            on:click|preventDefault={() => {
              animateCSS(DOMelements[stamp], "headShake");
            }}
            src={$stampCollection[$menuState].stamps[area_name].area_stamps[
              stamp
            ].bw}
            alt={$stampCollection[$menuState].stamps[area_name].area_stamps[
              stamp
            ].name}
            class="stamp locked"
          />
        {/if}
      {/each}
    {/key}
  </div>
{/each}

<div class="sticky" />

<style>
  .menu_item.stamps {
    display: grid;

    grid-template-rows: repeat(2, 7rem);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 0.5rem;
  }

  .stamp {
    max-height: 25vw;
    max-width: 25vw;
  }

  .locked {
    opacity: 0.4;
  }
</style>
