<script>
  import Translate from "../components/Translate.svelte";
  let answer = false;
</script>

<div class="menu_item activity">
  <div class="item english">
    <div class="trivia-title">
      <div>DID YOU KNOW?</div>
      <span class="counter">#4 / 7</span>
    </div>
    <p class="trivia">
      Is a pumpkin a vegetable? <br /> Or is it a fruit?
    </p>
    {#if answer == false}
      <p class="trivia reveal" on:click={() => (answer = true)}>Answer</p>
    {:else}
      <p class="trivia answer" on:click={() => (answer = false)}>
        It's a fruit!
      </p>
    {/if}
    <Translate />
  </div>
</div>

<style>
  .menu_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  p {
    margin-top: 4vw;
  }

  .english {
    background-color: var(--blue);
    grid-column: span 2;
  }
</style>
