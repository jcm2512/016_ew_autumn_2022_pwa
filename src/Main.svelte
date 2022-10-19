<script>
  import { stampCount } from "./store.js";
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <div class="title">You found</div>
    <div class="centered">
      <div class="circle">
        <span class="number">{$stampCount}</span>
        <span class="stamps">STAMPS</span>
      </div>
    </div>
    <div class="centered">
      {#if $stampCount > 69}
        <div class="title">HOORAY!! <br /> YOU DID IT!</div>
      {:else if $stampCount > 59}
        <div class="title">YOU ARE ALMOST THERE!</div>
      {:else if $stampCount > 49}
        <div class="title">FANTASTIC!</div>
      {:else if $stampCount > 39}
        <div class="title">YOU ARE AMAZING!</div>
      {:else if $stampCount > 29}
        <div class="title">WOW, SO MANY...</div>
      {:else if $stampCount > 19}
        <div class="title">KEEP GOING!</div>
      {:else if $stampCount > 9}
        <div class="title">GOOD JOB!</div>
      {/if}
    </div>
  </div>
</div>

<style>
  .title {
    font-size: 10vw;
    text-align: center;
  }
  .circle {
    height: 60vw;
    width: 60vw;
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
    background-color: var(--red);
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
  }

  #menu_heading .sub {
    margin-top: -5vw;
  }
</style>
