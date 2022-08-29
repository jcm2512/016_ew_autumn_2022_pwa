<script>
  import { found } from "../store.js";
  function button() {
    console.log("pressed");
    $found = false;
  }

  export let stamp;
  console.log(stamp);
</script>

<div id="popup">
  <div id="popup_dialog">
    <div id="popup_bg" />
    <div id="popup_message">YOU FOUND A MONSTER</div>
    <div id="popup_monsters">
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
    </div>
    <div on:click={button} id="ok_button">OK</div>
  </div>
</div>
<div id="overlay_popup" class="grid-top " />
