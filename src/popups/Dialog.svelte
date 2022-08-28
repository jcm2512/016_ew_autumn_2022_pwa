<script>
  import { found } from "../store.js";
  function button() {
    console.log("pressed");
    $found = false;
  }
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    <div id="popup_message">YOU FOUND MONSTERS</div>
    <div id="popup_monsters">
      <div class="half-tile">
        <img
          src="/assets/icons/monsters/icons8-cute-skull-96.png"
          class="monster"
          alt="skull"
        />
        <div class="monster_name">Really Long Complicated Name</div>
      </div>
      <div class="half-tile">
        <img
          src="/assets/icons/monsters/icons8-frankensteins-monster-96.png"
          class="monster"
          alt="skull"
        />
        <div class="monster_name">name</div>
      </div>
    </div>
    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
