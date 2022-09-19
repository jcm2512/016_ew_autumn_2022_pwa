<script>
  import {
    stampCollection,
    menuState,
    updateStamps,
    viewAllStamps,
  } from "./store.js";

  import { animateCSS } from "./animateCSS.svelte";

  let DOMelements = [];
</script>

<div id="content" class="grid-top grid">
  <div id="stamp_card">
    <div id="heading">
      <div class="sub jp-font">{$stampCollection[$menuState].subheading}</div>
      <div class="main">{$stampCollection[$menuState].heading}</div>
    </div>
    <div id="menu">
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
                  src={$stampCollection[$menuState].stamps[area_name]
                    .area_stamps[stamp].img}
                  alt={$stampCollection[$menuState].stamps[area_name]
                    .area_stamps[stamp].name}
                  class="stamp"
                />
              {:else}
                <img
                  bind:this={DOMelements[stamp]}
                  on:click|preventDefault={() => {
                    animateCSS(DOMelements[stamp], "headShake");
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
  }

  .stamp {
    max-height: 25vw;
    max-width: 25vw;
  }

  .locked {
    opacity: 0.4;
  }
</style>
