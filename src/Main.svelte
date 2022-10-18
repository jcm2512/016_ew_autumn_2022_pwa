<script>
  import { stampCount } from "./store.js";
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <div class="title" />
    <div class="centered">
      <div class="circle">
        <span class="number">{$stampCount}</span>
        <span class="stamps">STAMPS</span>
      </div>
    </div>
    <div class="centered">
      {#if $stampCount > 10}
        <div class="title">GOOD JOB!</div>
      {:else if $stampCount > 20}
        <div class="title">KEEP GOING!</div>
      {:else if $stampCount > 30}
        <div class="title">WOW, SO MANY...</div>
      {:else if $stampCount > 40}
        <div class="title">YOU ARE AMAZING!</div>
      {:else if $stampCount > 50}
        <div class="title">FANTASTIC!</div>
      {:else if $stampCount > 60}
        <div class="title">YOU ARE ALMOST THERE!</div>
      {:else if $stampCount > 70}
        <div class="title">HOORAY!! YOU DID IT!</div>
      {/if}
    </div>
  </div>
</div>

<style>
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
