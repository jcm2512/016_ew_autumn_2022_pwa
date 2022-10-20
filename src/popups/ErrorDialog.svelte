<script>
  import {
    errorDialog,
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

  // onMount(() => {
  //   STAMP.forEach((stamp, index) => {
  //     animateCSS(DOM_Stamps[index], "flip");
  //   });
  // });

  $showNotification = false;

  function button() {
    $triggerMenuState += 1;
    let id = $foundStampCollection[0].name.split("_");
    let area = id[0];
    $errorDialog = false;
    $updateStamps += 1;
    $foundStampCollection = [];
    $menuState = area;

    // grab from here even if all stamps found
    $scrollToStamp = true;

    // SHOW ANY NOTIFICATIONS IF ANY
    $showNotification = true;
  }

  export let STAMP;
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />

    <div id="popup_message">NOTHING TO SEE HERE</div>
    <div id="popup_monsters">
      <!-- {#each STAMP as stamp, index}
          <div class="full-tile" bind:this={DOM_Stamps[index]}>
            <img src={stamp.img} class="fullsize monster" alt={stamp.name} />
          </div>
        {/each} -->
      oh...
    </div>

    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
