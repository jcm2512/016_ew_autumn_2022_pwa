<script>
  import {
    found,
    updateStamps,
    foundStampCollection,
    menuState,
    triggerMenuState,
    showNotification,
    scrollToStamp,
    fullsizestamp,
    showfullsize,
  } from "../store.js";

  import { onMount } from "svelte";

  import { animateCSS } from "../animateCSS.svelte";

  let DOM_Stamps = [];

  onMount(() => {
    STAMP.forEach((stamp, index) => {
      animateCSS(DOM_Stamps[index], "flip");
      animateCSS(DOM_Stamps[index], "delay-1s");
    });
  });

  $showNotification = false;

  let id = $fullsizestamp[0].name.split("_");
  let name = id[1];

  function button() {
    $triggerMenuState += 1;

    $showfullsize = false;
    $fullsizestamp = [];

    $scrollToStamp = true;

    // SHOW ANY NOTIFICATIONS IF ANY
    $showNotification = true;
  }

  export let STAMP;
  console.log(STAMP);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    {#each STAMP as stamp, index}
      {#if name.length != 2}
        <div id="popup_message">{name}</div>
      {:else}
        <div id="popup_message">trick or treat</div>
      {/if}
      <div id="popup_monsters">
        <div class="full-tile" bind:this={DOM_Stamps[index]}>
          <img src={stamp.img} class="fullsize monster" alt={stamp.name} />
        </div>
      </div>
    {/each}

    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />

<style>
  img.fullsize {
    width: 60vw;
  }

  #popup_monsters {
    grid-column: 1;
    grid-row: 2;
    font-size: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50vw;
    z-index: 120;
  }

  #popup_dialog {
    width: 80vw;
    height: 100vw;
    font-size: 16vw;
    display: grid;
    grid-template: 15vw 70vw 15vw / 1fr;
  }
</style>
