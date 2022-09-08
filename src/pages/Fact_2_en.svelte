<div class="menu_item activity">
  <div class="item english">
    <div class="title">
      <div>DID YOU KNOW?</div>
      <span class="counter">#2 / 7</span>
    </div>
    <div class="trivia">
      <p>What does the name Dracula mean?</p>
      <p>Son of the Devil</p>
    </div>
    <div class="translate jp-title">英語→日本語</div>
  </div>
</div>

<style>
  .jp-title {
    font-family: "Kosugi Maru";
  }
  .translate {
    margin-top: 10vw;
    color: var(--background);
    background: white;
    width: fit-content;
    padding: 1vw;
    align-self: flex-end;
    padding-inline: 5vw;
    border-radius: 5vw;
    font-size: 4vw;
  }
  .counter {
    font-family: "Fredoka";
    font-size: 6vw;
    font-weight: bold;
  }
  .trivia {
    font-family: "Fredoka";
    font-size: 6vw;
    display: flex;
    flex-direction: column;
  }
  .menu_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  p {
    margin-top: 4vw;
  }

  /* .menu_item.activity {
    grid-template-rows: 7rem;
  } */

  .item {
    height: 80vw;
    grid-column: span 2;
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 0.4rem;
    font-size: 8vw;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .english {
    background-color: var(--blue);
    grid-column: span 2;
  }
</style>
