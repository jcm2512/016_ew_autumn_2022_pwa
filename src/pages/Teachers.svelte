<script>
  import { stampCollection, menuState, triggerMenuState } from "../store.js";

  let stageCards, next, heading, menu;
  let CARDS = [];

  // export let id;
</script>

{#each Object.keys($stampCollection[$menuState].stamps) as area_name}
  <div class="title">{area_name}</div>
  <div class="menu_item stamps">
    {#each Object.keys($stampCollection[$menuState].stamps[area_name].area_stamps) as stamp}
      <img
        src={$stampCollection[$menuState].stamps[area_name].area_stamps[stamp]
          .img}
        alt={$stampCollection[$menuState].stamps[area_name].area_stamps[stamp]
          .name}
        class="stamp"
      />
    {/each}
  </div>
{/each}

<div class="sticky" />

<style>
  .menu_item.stamps {
    display: grid;

    grid-template-rows: repeat(2, 7rem);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 0.5rem;
  }

  .stamp {
    max-height: 25vw;
    max-width: 25vw;
    filter: brightness(0) opacity(0.5);
  }
</style>
