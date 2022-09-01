<div class="menu_item activity">
  <div class="item japanese">
    <div class="title">
      <div class="jp-title">知ってた？</div>
      <span class="counter">#1 / 7</span>
    </div>
    <div class="trivia">
      <p class="jp-font-2">
        ハロウィーンは約3000年前にアイルランドで始まりました！
      </p>
    </div>
    <div class="translate jp-title">日本語→英語</div>
  </div>
</div>

<style>
  .jp-title {
    font-family: "Kosugi Maru";
  }

  .jp-font-2 {
    font-family: "Kaisei Decol";
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

  .japanese {
    background-color: var(--purple);
    grid-column: span 2;
  }
</style>
