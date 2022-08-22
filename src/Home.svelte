<script>
  import { onMount } from "svelte";
  import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
  import {
    found,
    scanning,
    loading,
    trigger,
    stampCollection,
    menuState,
    triggerMenuState,
    qr_state,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";
  import Stamps from "./Stamps.svelte";
  import Menu from "./Menu.svelte";
  import QR from "./components/QR.svelte";

  // Global Variables
  let eventid = "ew202210",
    param = "m";
  let reader, button, overlay, main, next; // Reference to DOM element
  let nav_home, nav_teachers, nav_specials, nav_monsters; // Reference to DOM Nav elements
  let start, stop; // Functions loaded on Mount
  let DOMelements = [];
  $found = false;

  // Load local data
  let sessionStorage = localData;
  sessionStorage.load();

  function setBG() {
    if ($menuState === "home") {
      main.setAttribute("class", "");
      main.classList.add("bg_dark");
    }

    if ($menuState === "stamps") {
      main.setAttribute("class", "");
      main.classList.add("bg_purple");
    }

    if ($menuState === "monsters") {
      main.setAttribute("class", "");
      main.classList.add("bg_purple");
    }

    if ($menuState === "specials") {
      main.setAttribute("class", "");
      main.classList.add("bg_red");
    }

    if ($menuState === "teachers") {
      main.setAttribute("class", "");
      main.classList.add("bg_blue");
    }
  }

  // Set collected monsters to local data
  $stampCollection = sessionStorage.get("collection").collection;
  console.log($stampCollection);
  $: $trigger && sessionStorage.set({ stamps: $stampCollection }),
    sessionStorage.save();
  $: $triggerMenuState && setBG();

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
    console.log(event.id);
    $menuState = event.id;
    setBG();
  }

  //// ---- QR SCAN ----
  onMount(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    start = function () {
      $loading = true;
      $qr_state = "loading";
      reader.style.visibility = "visible";
      overlay.style.visibility = "visible";
      html5QrCode
        .start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .then((ignore) => {
          // QR Code scanning has started.
          $scanning = true;
          $loading = false;
          $qr_state = "scanning";
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
          $qr_state = "ready";
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      $found = true;
      let foundMonster = getParameter(decodedText, eventid);
      $stampCollection[foundMonster].count += 1;
      $stampCollection[foundMonster].found = true;
      saveResults();
      stop();
    };
  });
</script>

<div class="clear" on:click={() => sessionStorage.clear()}>clear</div>

<div id="main" bind:this={main} class="bg_dark">
  <div bind:this={reader} id="reader" width="600px" class="grid-top" />
  <div bind:this={overlay} id="overlay" class="grid-top " />
  <div id="bg" class="grid-top " />

  <div id="content" class="grid-top grid">
    {#if $menuState === "home"}
      <Menu />
    {/if}
    {#if $menuState === "teachers"}
      <Stamps />
    {/if}
    {#if $menuState === "specials"}
      <Stamps />
    {/if}
    {#if $menuState === "monsters"}
      <Stamps />
    {/if}
  </div>
</div>

<nav>
  <div
    bind:this={nav_home}
    class="nav_button active"
    id="home"
    on:click={() => nav(nav_home)}
  >
    <img src="assets/icons/nav/home-active.svg" alt="home" />
  </div>
  <div
    bind:this={nav_teachers}
    class="nav_button"
    id="teachers"
    on:click={() => nav(nav_teachers)}
  >
    <img src="assets/icons/nav/user-square.svg" alt="teachers" />
  </div>
  {#if !$scanning}
    <div class="qr_button" bind:this={button} on:click={start}>
      <QR />
    </div>
  {:else}
    <div class="qr_button" bind:this={button} on:click={stop}>
      <QR />
    </div>
  {/if}
  <div
    bind:this={nav_specials}
    id="specials"
    class="nav_button"
    on:click={() => nav(nav_specials)}
  >
    <img src="assets/icons/nav/verify.svg" alt="specials" />
  </div>
  <div
    bind:this={nav_monsters}
    class="nav_button"
    id="monsters"
    on:click={() => nav(nav_monsters)}
  >
    <img src="assets/icons/nav/monsters.svg" alt="monsters" />
  </div>
</nav>

<style>
</style>
