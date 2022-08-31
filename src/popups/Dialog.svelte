<script>
  import { found, updateStamps } from "../store.js";
  function button() {
    console.log("pressed");
    $found = false;
    $updateStamps += 1;
  }

  export let stamp;
  console.log(stamp);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    {#if stamp.length > 1}
      <div id="popup_message">YOU FOUND STAMPS</div>
    {:else}
      <div id="popup_message">YOU FOUND A STAMP</div>
    {/if}
    <div id="popup_monsters">
      {#each stamp as stamp}
        <div class="half-tile">
          <img src={stamp.img} class="monster" alt="skull" />
          <div class="monster_name">{stamp.name}</div>
        </div>
        <!-- <div class="half-tile">
        <img
          src="/assets/icons/monsters/icons8-frankensteins-monster-96.png"
          class="monster"
          alt="skull"
        />
        <div class="monster_name">name</div>
      </div> -->
      {/each}
    </div>
    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
