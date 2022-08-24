<script>
  import { onMount } from "svelte";

  import { stampCollection, menuState, triggerMenuState } from "./store.js";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { animateCSS } from "./animateCSS.svelte";
  import Teachers from "./pages/Teachers.svelte";

  gsap.registerPlugin(ScrollToPlugin);

  let stageCards, next, heading, menu;
  let CARDS = [];

  const LVL = {
    id: 0,
  };

  const handleNav = function (direction, div, lvl, options) {
    let width = CARDS[lvl.id].offsetWidth;
    let padding = (div.offsetWidth - width) / 2;

    // Calculate the current ID when swiping
    lvl.id = Math.round(div.scrollLeft / width);

    switch (direction) {
      case "prev":
        if (lvl.id > 0) {
          lvl.id -= 1;
        }
        break;
      case "next":
        if (lvl.id < Object.keys($stampCollection).length - 1) {
          lvl.id += 1;
        }
        break;
    }
    // PLAY SWIPE ANIMATION
    if (direction != "play") {
      gsap.to(stageCards, {
        duration: 0.5,
        scrollTo: {
          x: `#lvl_${lvl.id + 1}`,
          offsetX: padding,
        },
      });
    }
    switch (lvl.id) {
      case 0:
        $menuState = "monsters";
        break;
      case 1:
        $menuState = "specials";
        break;
      case 2:
        $menuState = "teachers";
        break;
    }

    $triggerMenuState += 1;
    console.log($triggerMenuState);
  };

  console.log($stampCollection, $menuState);
</script>

<!-- <div id="sub_menu_container">
  <div
    id="sub_menu"
    bind:this={next}
    on:click|preventDefault={() => {
      handleNav("next", stageCards, LVL);
      animateCSS(next, "headShake");
    }}
  />
</div> -->

<div id="content" class="grid-top grid">
  <div bind:this={stageCards} id="stamp_card">
    <div id="heading" bind:this={heading}>
      <div class="sub">{$stampCollection[$menuState].subheading}</div>
      <div class="main">{$stampCollection[$menuState].heading}</div>
    </div>
    <div id="menu" bind:this={menu}>
      <Teachers />
    </div>
  </div>
</div>
<div class="sticky" />

<style>
  /* swipable menu */
  .gallery {
    display: grid;
    gap: 0 5vw;
    overflow: scroll;
    scroll-snap-type: x mandatory;
  }

  ul {
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10vw;
    padding-inline-end: 10vw;
  }

  .section {
    scroll-snap-align: center;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .gallery::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .gallery {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  /* swipable menu END*/
</style>
