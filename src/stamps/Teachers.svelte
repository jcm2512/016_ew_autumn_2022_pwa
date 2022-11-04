<script>
  import {
    stampCollection,
    menuState,
    updateStamps,
    viewAllStamps,
    stampArea,
    showfullsize,
    fullsizestamp,
  } from "../store.js";
  import { onMount } from "svelte";

  import { animateCSS } from "../animateCSS.svelte";

  let heading, menu;

  let DOM_Stamps = [];
  let DOM_Headings = [];
  let DOM_Content;

  function showFullSize(stamp) {
    $fullsizestamp.push(stamp);
    $showfullsize = true;
  }

  onMount(() => {
    console.log("MOUNTED", $stampArea);
    // SCROLL TO STAMP
    DOM_Content.scrollTop = DOM_Headings[$stampArea].offsetTop;
    console.log(DOM_Headings[$stampArea]);
    console.log(DOM_Headings[$stampArea].offsetTop);

    $stampArea = "top"; // Revert to default
  });
</script>

<div id="content" class="grid-top grid" bind:this={DOM_Content}>
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
        <div class="menu_item teacher_stamps">
          {#key $updateStamps}
            {#each Object.keys($stampCollection[$menuState].stamps[area_name].area_stamps) as stamp, index}
              {#if $stampCollection[$menuState].stamps[area_name].area_stamps[stamp].found || $viewAllStamps}
                <img
                  bind:this={DOM_Stamps[stamp]}
                  on:click|preventDefault={() => {
                    showFullSize(
                      $stampCollection[$menuState].stamps[area_name]
                        .area_stamps[stamp]
                    );

                    // animateCSS(DOM_Stamps[stamp], "tada");
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
  .menu_item.teacher_stamps {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2vw;
    margin-top: 4vw;
  }

  .locked {
    opacity: 0.4;
  }
</style>
