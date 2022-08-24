<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <div class="title jp-font bold">先生とお話してみよう</div>
    <div class="menu_item activity">
      <div class="item activity_2">Ask a Teacher</div>
    </div>
    <div class="title jp-font bold">エリア</div>
    <div class="menu_item game">
      <div class="item game_1">Haunted Forest</div>
      <div class="item game_2">Scary Swamp</div>
      <div class="item game_5">Magical Something</div>
      <div class="item game_6">Halloween Craft</div>
    </div>
  </div>
</div>

<style>
  .menu_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  .menu_item.activity {
    grid-template-rows: 7rem;
  }

  .menu_item.game {
    grid-template-rows: repeat(2, 7rem);
  }

  .item {
    height: auto;
    grid-column: span 2;
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
  }

  .activity_2 {
    background-color: var(--green);
    grid-column: span 2;
  }

  .game_1 {
    background-color: var(--orange);
    grid-column: span 1;
  }

  .game_2 {
    background-color: var(--aqua);
    grid-column: span 1;
  }

  .game_5 {
    background-color: var(--blue);
    grid-column: span 1;
  }

  .game_6 {
    background-color: var(--purple);
    grid-column: span 1;
  }

  #menu_heading .sub {
    margin-top: -5vw;
  }
</style>
