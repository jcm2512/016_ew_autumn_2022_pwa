<script>
  import { monsterCollection, stampsCategories } from "./store.js";
  import StampCollection from "./StampCollection.svelte";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);
  let monsters = Object.keys($monsterCollection);
  let stageCards, CARDS;
  // console.log($monsterCollection[monsters].name);
</script>

<!-- swipable menu START-->
<ul bind:this={stageCards} id="stage_card" class="gallery">
  {#each Object.keys($stampsCategories) as id, index}
    <div class="level">
      {$stampsCategories[id].subtitle}
      {$stampsCategories[id].title}
    </div>
    <div bind:this={CARDS[index]} class="_level">
      <StampCollection {index} />
    </div>
  {/each}
</ul>
<!-- swipable menu END -->

<!--     
<div id="heading">
  <div class="sub">モンスターコレクション</div>
  <div class="main">Monster Collection</div>
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
    grid-template-columns: repeat(3, 80vw);
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
