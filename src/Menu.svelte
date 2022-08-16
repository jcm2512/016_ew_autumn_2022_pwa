<div id="heading">
  <div class="sub">English World</div>
  <div class="main">Halloween Monster Festival</div>
</div>

<div id="menu">
  <div class="title">アクティビティ</div>
  <div class="menu_item activity">
    <div class="item activity_1">Trick Or Treat</div>
    <div class="item activity_2">Ask a Teacher</div>
    <div class="item activity_3">Halloween Craft</div>
  </div>
  <div class="title">ゲーム</div>
  <div class="menu_item game">
    <div class="item game_1">Haunted Forest</div>
    <div class="item game_2">Flip Flip</div>
    <div class="item game_3">Monster Feeding</div>
    <div class="item game_4">Eyeball Throw</div>
    <div class="item game_5">Piranha Catch</div>
    <div class="item game_6">Witches Hat Ring Toss</div>
  </div>
</div>

<div id="shadow" />

<style>
  .menu_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  .menu_item.activity {
    grid-template-rows: repeat(2, 7rem);
  }

  .menu_item.game {
    grid-template-rows: repeat(5, 7rem);
  }

  .item {
    height: auto;
    grid-column: span 2;
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .activity_1 {
    background-color: var(--pink);
  }

  .activity_2 {
    background-color: var(--green);
    grid-column: span 1;
  }

  .activity_3 {
    background-color: var(--orange);
    grid-column: span 1;
  }

  .game_1 {
    background-color: var(--orange);
    grid-row: span 1;
    grid-column: span 2;
  }

  .game_2 {
    background-color: var(--aqua);
    grid-column: span 1;
  }

  .game_3 {
    background-color: var(--purple);
    grid-column: span 1;
    grid-row: span 2;
  }

  .game_4 {
    background-color: var(--blue);
    grid-column: span 1;
    grid-row: span 2;
  }

  .game_5 {
    background-color: var(--green);
    grid-column: span 1;
  }

  .game_6 {
    color: var(--background);
    background-color: var(--yellow);
    grid-column: span 2;
  }
</style>
