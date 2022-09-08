<script>
  import {
    found,
    updateStamps,
    foundStampCollection,
    menuState,
  } from "../store.js";

  function button() {
    console.log($foundStampCollection);
    let id = $foundStampCollection[0].name.split("_");
    console.log(id[0]);
    let area = id[0];
    $found = false;
    $updateStamps += 1;
    $foundStampCollection = [];
    $menuState = area;
  }

  export let stamp;
  console.log(stamp);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    {#if stamp.length > 1}
      <div id="popup_message">YOU FOUND STAMPS</div>
      <div id="popup_monsters">
        {#each stamp as stamp}
          <div class="half-tile">
            <img src={stamp.img} class="monster" alt={stamp.name} />
          </div>
        {/each}
      </div>
    {:else}
      <div id="popup_message">YOU FOUND A STAMP</div>
      <div id="popup_monsters">
        {#each stamp as stamp}
          <div class="full-tile">
            <img src={stamp.img} class="fullsize monster" alt={stamp.name} />
          </div>
        {/each}
      </div>
    {/if}

    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
