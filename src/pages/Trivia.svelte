<script>
  import Fact_1_en from "./Fact_1_en.svelte";
  import Fact_1_jp from "./Fact_1_jp.svelte";

  let eng = true;
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <!-- <div class="title jp-font bold">知っていましたか?</div> -->
    <div on:click={() => (eng = !eng)}>
      {#if eng}
        <Fact_1_en />
      {:else}
        <Fact_1_jp />{/if}
    </div>
    <div class="bottom_message jp-font">
      <p>次回の更新は次の金曜日です。</p>
      <p>またお会いしましょう！</p>
    </div>
  </div>
</div>

<style>
  .bottom_message {
    margin-top: 6vw;
    font-size: 6vw;
  }

  #menu_heading .sub {
    margin-top: -5vw;
  }
</style>
