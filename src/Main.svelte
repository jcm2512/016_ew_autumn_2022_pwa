<script>
  import { stampCount } from "./store.js";
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <div class="centered-stamp">
      <div class="circle">
        <img
          src="./assets/stamps/specials_a1_001.png"
          alt="stamp"
          class="stamp_lg absolute_grid"
        />
      </div>
    </div>
    <div class="centered">
      <div class="message">ALL STAMPS UNLOCKED</div>
      <div class="title">
        THANKS FOR PLAYING! <br />
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    margin-top: 4vw;
    font-size: 8vw;
    text-align: center;
  }
  .message {
    font-size: 10vw;
    text-align: center;
    height: fit-content;
    background-color: var(--red);
  }
  .circle {
    height: 50vw;
    width: 50vw;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    border: 2vw solid white;
    padding: 5vw;
    margin: 0.4rem;
    align-content: center;
    align-items: center;
    text-align: center;
    font-weight: 400;
    background-color: var(--purple);
  }

  .number {
    font-size: 20vw;
  }

  .stamps {
    font-size: 12vw;
  }

  .centered {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .centered-stamp {
    display: flex;
    justify-content: center;
  }

  #menu_heading .sub {
    margin-top: -5vw;
  }

  .stamp_lg {
    max-height: 35vw;
    max-width: 35vw;
    z-index: 40;
  }
</style>
