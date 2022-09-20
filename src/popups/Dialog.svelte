<script>
  import {
    found,
    updateStamps,
    foundStampCollection,
    menuState,
    triggerMenuState,
    showNotification,
    scrollToStamp,
  } from "../store.js";

  import { onMount } from "svelte";

  import { animateCSS } from "../animateCSS.svelte";

  let DOM_Stamps = [];

  onMount(() => {
    STAMP.forEach((stamp, index) => {
      animateCSS(DOM_Stamps[index], "flip");
    });
  });

  $showNotification = false;

  function button() {
    $triggerMenuState += 1;
    console.log($foundStampCollection);
    let id = $foundStampCollection[0].name.split("_");
    console.log(id[0]);
    let area = id[0];
    $found = false;
    $updateStamps += 1;
    $foundStampCollection = [];
    $menuState = area;
    $scrollToStamp = true;
    console.log("scrolltostamp: ", $scrollToStamp);

    // SHOW ANY NOTIFICATIONS IF ANY
    $showNotification = true;
  }

  export let STAMP;
  console.log(STAMP);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    {#if STAMP.length > 1}
      <div id="popup_message">YOU FOUND STAMPS</div>
      <div id="popup_monsters">
        {#each STAMP as stamp, index}
          <div class="half-tile" bind:this={DOM_Stamps[index]}>
            <img src={stamp.img} class="monster" alt={stamp.name} />
          </div>
        {/each}
      </div>
    {:else}
      <div id="popup_message">YOU FOUND A STAMP</div>
      <div id="popup_monsters">
        {#each STAMP as stamp, index}
          <div class="full-tile" bind:this={DOM_Stamps[index]}>
            <img src={stamp.img} class="fullsize monster" alt={stamp.name} />
          </div>
        {/each}
      </div>
    {/if}

    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
