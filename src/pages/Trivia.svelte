<script>
  import Dialog from "../popups/Dialog.svelte";

  import AnimateCss from "../animateCSS.svelte";

  import Fact_1_en from "./Fact_1_en.svelte";
  import Fact_1_jp from "./Fact_1_jp.svelte";
  import Fact_2_en from "./Fact_2_en.svelte";
  import Fact_2_jp from "./Fact_2_jp.svelte";
  import Fact_3_en from "./Fact_3_en.svelte";
  import Fact_3_jp from "./Fact_3_jp.svelte";
  import Fact_4_en from "./Fact_4_en.svelte";
  import Fact_4_jp from "./Fact_4_jp.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  // Import Swiper
  import { Pagination, Mousewheel, Keyboard } from "swiper";
  import "swiper/css";
  import "swiper/css/pagination";

  import { eng } from "../store.js";
</script>

<div id="content" class="grid-top grid">
  <div id="menu_heading" class="menu_heading">
    <div class="main">MONSTER</div>
    <div class="sub">STAMP RALLY</div>
  </div>
  <div id="menu">
    <!-- <div class="title jp-font bold">知っていましたか?</div> -->
    <div id="wrapper">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        class="mySwiper"
      >
        {#if $eng}
          <SwiperSlide>
            <Fact_4_en />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_3_en />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_2_en />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_1_en />
          </SwiperSlide>
        {:else}
          <SwiperSlide>
            <Fact_4_jp />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_3_jp />
          </SwiperSlide>
          <SwiperSlide>
            <Fact_2_jp />
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
