<script>
  import Translate from "../components/Translate.svelte";
  let answer = false;
</script>

<div class="menu_item activity">
  <div class="item japanese">
    <div class="trivia-title">
      <div class="jp-title">知ってた？</div>
      <span class="counter">#5 / 7</span>
    </div>
    <p class="trivia jp-font-2">
      ジャコランタンは<br />
      もともと<br />
      何でできいたでしょうか？
    </p>

    {#if answer == false}
      <p class="trivia reveal　jp-font-2" on:click={() => (answer = true)}>
        こたえ
      </p>
    {:else}
      <p class="trivia answer jp-font-2" on:click={() => (answer = false)}>
        カブ
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

  .japanese {
    background-color: var(--purple);
    grid-column: span 2;
  }
</style>
