<script>
  import { stampCollection } from "./store.js";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  import { animateCSS } from "./animateCSS.svelte";

  gsap.registerPlugin(ScrollToPlugin);

  let stageCards, next;
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
  };
</script>

<div id="sub_menu_container">
  <div
    id="sub_menu"
    bind:this={next}
    on:click|preventDefault={() => {
      console.log("clicked");
      handleNav("next", stageCards, LVL);
      animateCSS(next, "headShake");
    }}
  />
</div>

<div id="shadow" />

<!-- swipable menu START-->
<ul bind:this={stageCards} id="stage_card" class="gallery">
  {#each Object.keys($stampCollection) as id, index}
    <div id="section" class={id} bind:this={CARDS[index]}>
      <div id="heading">
        <div class="sub">{$stampCollection[id].subheading}</div>
        <div class="main">{$stampCollection[id].heading}</div>
      </div>
      <div id="menu">
        {#each Object.keys($stampCollection[id].stamps) as area_name}
          <div class="title">{area_name}</div>
          <div class="menu_item stamps">
            {#each Object.keys($stampCollection[id].stamps[area_name].area_stamps) as stamp}
              <img
                src={$stampCollection[id].stamps[area_name].area_stamps[stamp]
                  .img}
                alt={$stampCollection[id].stamps[area_name].area_stamps[stamp]
                  .name}
                class="stamp"
              />
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</ul>
<!-- swipable menu END -->

<!--     
<div id="heading">
  <div class="sub">{$stampCollection[id].subheading}</div>
  <div class="main">{$stampCollection[id].heading}</div>
</div>
<div id="menu">
  <div class="title">アクティビティ</div>
  <div class="menu_item stamps">
    {#each monsters as stamp, index}
      <img
        src={$monsterCollection[stamp].img}
        alt={$monsterCollection[stamp].name}
        class="stamp"
      />
    {/each}
  </div>
  <div class="title">アクティビティ</div>
  <div class="menu_item stamps">
    {#each monsters as stamp, index}
      <img
        src={$monsterCollection[stamp].img}
        alt={$monsterCollection[stamp].name}
        class="stamp"
      />
    {/each}
  </div>
  <div class="title">アクティビティ</div>
  <div class="menu_item stamps">
    {#each monsters as stamp, index}
      <img
        src={$monsterCollection[stamp].img}
        alt={$monsterCollection[stamp].name}
        class="stamp"
      />
    {/each}
  </div>
</div> 
-->
<style>
  .menu_item.stamps {
    display: grid;

    grid-template-rows: repeat(2, 7rem);
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 0.5rem;
  }

  .stamp {
    max-height: 25vw;
    max-width: 25vw;
    filter: brightness(0) opacity(0.5);
  }

  /* swipable menu */
  .gallery {
    display: grid;
    gap: 0 5vw;
    grid-template-columns: repeat(3, 90vw);
    grid-template-rows: 1fr 9fr;
    overflow: scroll;
    scroll-snap-type: both mandatory;
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

  #section {
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
