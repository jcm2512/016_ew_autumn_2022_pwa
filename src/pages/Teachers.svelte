<script>
  import { stampCollection, menuState, triggerMenuState } from "../store.js";

  let stageCards, next, heading, menu;
  let CARDS = [];

  export let id;

  console.log(id);
</script>

<!-- swipable menu START-->
<ul bind:this={stageCards} id="stage_card" class="gallery">
  {#each Object.keys($stampCollection[id].stamps) as area_name}
    <div class="title">{area_name}</div>
    <div class="menu_item stamps">
      {#each Object.keys($stampCollection[id].stamps[area_name].area_stamps) as stamp}
        <img
          src={$stampCollection[id].stamps[area_name].area_stamps[stamp].img}
          alt={$stampCollection[id].stamps[area_name].area_stamps[stamp].name}
          class="stamp"
        />
      {/each}
    </div>
  {/each}
</ul>
<div class="sticky" />

<!-- swipable menu END -->
