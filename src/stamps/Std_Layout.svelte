<script>
  import {
    stampCollection,
    menuState,
    triggerMenuState,
    updateStamps,
    viewAllStamps,
    stampArea,
  } from "../store.js";
  import { animateCSS } from "../animateCSS.svelte";
  import { onMount } from "svelte";

  let heading, menu;

  let DOM_Stamps = [];
  let DOM_Headings = [];
  let DOM_Content;

  onMount(() => {
    console.log("MOUNTED", $stampArea);
    // SCROLL TO STAMP
    DOM_Content.scrollTop = DOM_Headings[$stampArea].offsetTop;
    $stampArea = "top"; // Revert to default position
  });
</script>

<div id="content" bind:this={DOM_Content} class="grid-top grid">
  <div bind:this={DOM_Headings["top"]} id="stamp_card">
    <div id="heading" bind:this={heading}>
      <div class="main">{$stampCollection[$menuState].heading}</div>
    </div>

    <div id="menu">
      {#each Object.keys($stampCollection[$menuState].stamps) as area_name}
        <div class="title" id={area_name} bind:this={DOM_Headings[area_name]}>
          {$stampCollection[$menuState].stamps[area_name].title}
        </div>
        <hr class="thin" />
        <div class="menu_item stamps">
          {#key $updateStamps}
            {#each Object.keys($stampCollection[$menuState].stamps[area_name].area_stamps) as stamp, index}
              <div class="wrapper">
                {#if $stampCollection[$menuState].stamps[area_name].area_stamps[stamp].count > 1}
                  <div class="counter">
                    {$stampCollection[$menuState].stamps[area_name].area_stamps[
                      stamp
                    ].count}
                  </div>
                {/if}
                {#if $stampCollection[$menuState].stamps[area_name].area_stamps[stamp].found || $viewAllStamps}
                  <img
                    bind:this={DOM_Stamps[stamp]}
                    on:click|preventDefault={() => {
                      animateCSS(DOM_Stamps[stamp], "tada");
                    }}
                    src={$stampCollection[$menuState].stamps[area_name]
                      .area_stamps[stamp].img}
                    alt={$stampCollection[$menuState].stamps[area_name]
                      .area_stamps[stamp].name}
                    class="stamp absolute_grid"
                  />
                {:else}
                  <img
                    bind:this={DOM_Stamps[stamp]}
                    on:click|preventDefault={() => {
                      animateCSS(DOM_Stamps[stamp], "headShake");
                    }}
                    src={$stampCollection[$menuState].stamps[area_name]
                      .area_stamps[stamp].bw}
                    alt={$stampCollection[$menuState].stamps[area_name]
                      .area_stamps[stamp].name}
                    class="stamp absolute_grid locked"
                  />
                {/if}
              </div>
            {/each}
          {/key}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .menu_item.stamps {
    display: grid;
    grid-template-rows: repeat(2, 30vw);
    grid-template-columns: repeat(3, 1fr);
    /* justify-items: center; */
    /* align-items: center; */
    grid-gap: 0.5rem;
    margin-bottom: 2vw;
  }

  .locked {
    opacity: 0.4;
  }
</style>
