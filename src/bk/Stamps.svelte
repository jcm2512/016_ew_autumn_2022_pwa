<script>
  import { stampCollection, menuState, triggerMenuState } from "../store.js";
  import Std_Layout from "../stamps/Std_Layout.svelte";
  let stageCards, heading, menu;
</script>

<div id="content" class="grid-top grid">
  <div bind:this={stageCards} id="stamp_card">
    <div id="heading" bind:this={heading}>
      <div class="sub jp-font">{$stampCollection[$menuState].subheading}</div>
      <div class="main">{$stampCollection[$menuState].heading}</div>
    </div>

    <Std_Layout />
  </div>
</div>
<div class="sticky" />
