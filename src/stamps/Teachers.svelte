<script>
  import {
    stampCollection,
    menuState,
    updateStamps,
    viewAllStamps,
    stampArea,
  } from "../store.js";
  import { onMount } from "svelte";

  import { animateCSS } from "../animateCSS.svelte";

  let heading, menu;

  let DOM_Stamps = [];
  let DOM_Headings = [];
  let DOM_Content;

  onMount(() => {
    // SCROLL TO STAMP
    DOM_Content.scrollTop = DOM_Headings[$stampArea].offsetTop;
    $stampArea = "top"; // Revert to default
  });
</script>

<div id="content" class="grid-top grid" bind:this={DOM_Content}>
  <div bind:this={DOM_Headings["top"]} id="stamp_card">
    <div id="heading" bind:this={heading}>
      <!-- <div class="sub jp-font">{$stampCollection[$menuState].subheading}</div> -->
      <div class="main">{$stampCollection[$menuState].heading}</div>
    </div>
    <div id="menu">
      {#each Object.keys($stampCollection[$menuState].stamps) as area_name}
        <div class="title" bind:this={DOM_Headings[area_name]}>
          {$stampCollection[$menuState].stamps[area_name].title}
        </div>
        <hr class="thin" />
        <div class="menu_item stamps">
          {#key $updateStamps}
            {#each Object.keys($stampCollection[$menuState].stamps[area_name].area_stamps) as stamp, index}
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
                  class="stamp"
                />
              {:else}
                <img
                  bind:this={DOM_Stamps[stamp]}
                  on:click|preventDefault={() => {
                    animateCSS(DOM_Stamps[stamp], "headShake");
                  }}
                  src="/assets/stamps/teachers_profile_bw.png"
                  alt={$stampCollection[$menuState].stamps[area_name]
                    .area_stamps[stamp].name}
                  class="stamp locked"
                />
              {/if}
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
    grid-template-rows: 7rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 0.5rem;
    margin-bottom: 2vw;
  }

  .stamp {
    max-height: 25vw;
    max-width: 25vw;
  }

  .locked {
    opacity: 0.4;
  }
</style>
