<script>
  import { stampCollection, stampsCategories } from "./store.js";
  import StampCollection from "./StampCollection.svelte";
  import { gsap } from "gsap";
  import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);
  let stamps = Object.keys($stampCollection);

  let stageCards;
  let CARDS = [];
</script>

<!-- swipable menu START-->
<ul bind:this={stageCards} id="stage_card" class="gallery">
  {#each Object.keys($stampCollection) as id, index}
    <div class={id}>
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
