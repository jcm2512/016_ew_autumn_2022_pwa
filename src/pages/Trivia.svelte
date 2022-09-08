<script>
  import Fact_1_en from "./Fact_1_en.svelte";
  import Fact_1_jp from "./Fact_1_jp.svelte";

  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper
  import { Pagination } from "swiper";
  import "swiper/css";
  import "swiper/css/pagination";

  let eng = true;
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <!-- <div class="title jp-font bold">知っていましたか?</div> -->
    <div id="wrapper" on:click={() => (eng = !eng)}>
      <Swiper pagination={true} modules={[Pagination]} class="mySwiper">
        {#if eng}
          <SwiperSlide>
            <Fact_1_en />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_1_en />
          </SwiperSlide>
        {:else}
          <SwiperSlide>
            <Fact_1_jp />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_1_jp />
          </SwiperSlide>
        {/if}
      </Swiper>
    </div>

    <div class="bottom_message jp-font">
      <p>次回の更新は次の金曜日です。</p>
      <p>またお会いしましょう！</p>
    </div>
  </div>
</div>

<style>
  #wrapper {
    width: 92vw;
  }
  .bottom_message {
    margin-top: 6vw;
    font-size: 6vw;
  }

  #menu_heading .sub {
    margin-top: -5vw;
  }
</style>
