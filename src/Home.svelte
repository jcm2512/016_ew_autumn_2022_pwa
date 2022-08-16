<script>
  import { onMount } from "svelte";
  import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
  import {
    found,
    scanning,
    loading,
    trigger,
    monsterCollection,
    menuState,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";
  import Stamps from "./Stamps.svelte";
  import Menu from "./menu.svelte";

  // Global Variables
  let eventid = "ew202210",
    param = "m";
  let reader, button, overlay, main, nav_home, nav_stamps; // Reference to DOM element
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

  function nav(event) {
    $menuState = event;
    if (event === "Home") {
      main.setAttribute("class", "");
      main.classList.add("bg_dark");
    }

    if (event === "Stamps") {
      main.setAttribute("class", "");
      main.classList.add("bg_purple");
    }
  }

  //// ---- QR SCAN ----
  onMount(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    start = function () {
      $loading = true;
      button.classList.add("loading");
      reader.style.visibility = "visible";
      overlay.style.visibility = "visible";
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
      overlay.style.visibility = "hidden";
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

<div id="main" bind:this={main} class="bg_dark">
  <div bind:this={reader} id="reader" width="600px" class="grid-top" />
  <div bind:this={overlay} id="overlay" class="grid-top " />
  <div id="bg" class="grid-top " />
  <div id="sub_menu_container"><div id="sub_menu" /></div>
  <div id="shadow" />

  <div id="content" class="grid-top grid">
    {#if $menuState === "Home"}
      <Menu />
    {:else}
      <Stamps />
    {/if}
  </div>
</div>

<nav>
  {#if $menuState === "Home"}
    <div
      bind:this={nav_home}
      class="nav_button nav_home active"
      on:click={() => nav("Home")}
    >
      <img src="assets/icons/home-active.svg" alt="Home" />
    </div>
  {:else}
    <div
      bind:this={nav_home}
      class="nav_button nav_home"
      on:click={() => nav("Home")}
    >
      <img src="assets/icons/home.svg" alt="Home" />
    </div>
  {/if}

  {#if !$scanning}
    <div id="qr_button" bind:this={button} on:click={start} />
  {:else}
    <div id="qr_button" class="stop" bind:this={button} on:click={stop} />
  {/if}

  {#if $menuState === "Stamps"}
    <div
      bind:this={nav_stamps}
      class="nav_button nav_stamps active"
      on:click={() => nav("Stamps")}
    >
      <img src="assets/icons/monsters-active.svg" alt="Stamps" />
    </div>
  {:else}
    <div
      bind:this={nav_stamps}
      class="nav_button nav_stamps"
      on:click={() => nav("Stamps")}
    >
      <img src="assets/icons/monsters.svg" alt="Stamps" />
    </div>
  {/if}
</nav>

<style>
</style>
