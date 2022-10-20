<script>
  import {
    errorDialog,
    updateStamps,
    foundStampCollection,
    menuState,
    triggerMenuState,
    showNotification,
    scrollToStamp,
    stampType,
  } from "../store.js";

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

  console.log($stampType);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />

    <div id="popup_message">BOO!</div>
    <div id="popup_monsters" class="std_font message">
      {#if $stampType == "teachers"}
        No more stamps...<br /><br />Please ask <br />another teacher
      {/if}
      {#if $stampType == "specials"}
        No more stamps...<br /><br />Please find <br />another quiz
      {/if}
    </div>

    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />

<style>
  .std_font {
    font-family: "Londrina Solid";
  }

  .message {
    margin: 2vw;
  }

  #popup_dialog {
    width: 80vw;
    height: 100vw;
    font-size: 16vw;
    display: grid;
    grid-template: 25vw 60vw 15vw / 1fr;
  }

  #popup_monsters {
    grid-column: 1;
    grid-row: 2;
    font-size: 10vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50vw;
  }
</style>
