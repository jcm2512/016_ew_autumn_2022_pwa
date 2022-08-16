<script>
  import { onMount } from "svelte";
  import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
  import {
    found,
    scanning,
    loading,
    trigger,
    monsterCollection,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";

  // Global Variables
  let eventid = "ew202210",
    param = "m";
  let reader, button; // Reference to DOM element
  let start, stop; // Functions loaded on Mount
  let DOMelements = [];
  $found = false;

  // Load local data
  let sessionStorage = localData;
  sessionStorage.load();

  // Set collected monsters to local data
  $monsterCollection = sessionStorage.get("collection").collection;
  $: $trigger && sessionStorage.set({ collection: $monsterCollection }),
    sessionStorage.save();
  let monsters = Object.keys($monsterCollection);
  console.log(monsters);

  // Fix document page size when toolbar is shown or hidden
  const onResize = function () {
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onResize();
  window.onresize = onResize;

  //// ---- FUNCTIONS:
  //// Get Parameter
  const getParameter = (url, eventid) => {
    const params = new URLSearchParams(new URL(url).search);
    if (!params.get(param)) {
      console.log("No parameters found in URL");
      return false;
    }
    switch (params.get("id")) {
      case eventid:
        return params.get(param);
      case "clear":
        sessionStorage.clear();
        return false;
      default:
        console.log("Please add 'id' parameter to url");
        return false;
    }
  };

  //// Save Results
  const saveResults = () => {
    $trigger += 1;
  };

  //// ---- QR SCAN ----
  onMount(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    start = function () {
      $loading = true;
      button.classList.add("loading");
      reader.style.visibility = "visible";
      html5QrCode
        .start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .then((ignore) => {
          // QR Code scanning has started.
          $scanning = true;
          $loading = false;
        });
    };
    stop = function () {
      reader.style.visibility = "hidden";
      html5QrCode
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
          $scanning = false;
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      $found = true;
      let foundMonster = getParameter(decodedText, eventid);
      $monsterCollection[foundMonster].count += 1;
      $monsterCollection[foundMonster].found = true;
      saveResults();
      stop();
    };
  });
</script>

<div id="main">
  <div bind:this={reader} id="reader" width="600px" />
  <div id="bg" />
  <div id="content">
    <div id="heading">
      <div class="sub">English World</div>
      <div class="main">Halloween Monster Festival</div>
    </div>

    <div id="menu">
      <div class="title">アクティビティ</div>
      <div class="menu_item activity">
        <div class="item activity_1">Trick Or Treat</div>
        <div class="item activity_2">Ask a Teacher</div>
        <div class="item activity_3">Halloween Craft</div>
      </div>
      <div class="title">ゲーム</div>
      <div class="menu_item game">
        <div class="item game_1">Haunted Forest</div>
        <div class="item game_2">Flip Flip</div>
        <div class="item game_3">Monster Feeding</div>
        <div class="item game_4">Eyeball Throw</div>
        <div class="item game_5">Piranha Catch</div>
        <div class="item game_6">Witches Hat Ring Toss</div>
      </div>
    </div>
  </div>
</div>
<nav>
  <div class="nav_button home active">
    <img src="assets/icons/home-active.svg" alt="Home" />
  </div>
  {#if !$scanning}
    <div id="qr_button" bind:this={button} on:click={start} />
  {:else}
    <div id="qr_button" class="stop" bind:this={button} on:click={stop} />
  {/if}
  <div class="nav_button monsters">
    <img src="assets/icons/monsters.svg" alt="Monsters" />
  </div>
</nav>

<style>
  :root {
    --nav-height: 7rem;
  }

  #heading {
    font-weight: 700;
    margin-top: 3vh;
  }

  #heading .sub {
    font-size: 1rem;
  }

  #heading .main {
    font-size: 2rem;
  }

  #menu {
    margin-bottom: var(--nav-height);
  }

  .menu_item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
  }

  .menu_item.activity {
    grid-template-rows: repeat(2, 7rem);
  }

  .menu_item.game {
    grid-template-rows: repeat(5, 7rem);
  }

  .title {
    grid-column: span 2;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .item {
    height: auto;
    grid-column: span 2;
    border-radius: 1.2rem;
    padding: 1rem;
    margin: 0.4rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .activity_1 {
    background-color: var(--pink);
  }

  .activity_2 {
    background-color: var(--green);
    grid-column: span 1;
  }

  .activity_3 {
    background-color: var(--orange);
    grid-column: span 1;
  }

  .game_1 {
    background-color: var(--orange);
    grid-row: span 1;
    grid-column: span 2;
  }

  .game_2 {
    background-color: var(--aqua);
    grid-column: span 1;
  }

  .game_3 {
    background-color: var(--purple);
    grid-column: span 1;
    grid-row: span 2;
  }

  .game_4 {
    background-color: var(--blue);
    grid-column: span 1;
    grid-row: span 2;
  }

  .game_5 {
    background-color: var(--green);
    grid-column: span 1;
  }

  .game_6 {
    color: var(--background);
    background-color: var(--yellow);
    grid-column: span 2;
  }

  nav {
    color: #fff;
    width: 100%;
    height: var(--nav-height);
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg, #e5e6e9 32.81%, #b3c5d1 100%);
    border-radius: 25px 25px 0px 0px;
    z-index: 100;
  }
</style>
