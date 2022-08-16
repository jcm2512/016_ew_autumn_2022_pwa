<div id="menu">
  <div class="title">アクティビティ</div>
  <div class="menu_item stamps">
    {#each monsters as stamp, index}
      <img
        src={$monsterCollection[stamp].img}
        alt={$monsterCollection[stamp].name}
        class="stamp"
      />
    {/each}
  </div>
</div>

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
