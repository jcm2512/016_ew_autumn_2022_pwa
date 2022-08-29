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
    sessionStorage,
    current_param,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";
  import Stamps from "./Stamps.svelte";
  import Menu from "./Menu.svelte";
  import QR from "./components/QR.svelte";
  import Unavailable from "./pages/Unavailable.svelte";
  import Dialog from "./popups/Dialog.svelte";

  // Global Variables
  let eventid = "ew2022-10",
    param = "m";
  let reader, button, overlay, main, next; // Reference to DOM element
  let nav_home, nav_teachers, nav_specials, nav_monsters; // Reference to DOM Nav elements
  let previous_nav = nav_home;
  let start, stop; // Functions loaded on Mount
  let DOMelements = [];
  $found = false;

  // Load local data
  $sessionStorage = localData;
  $sessionStorage.load();

  // Watch Variables
  // $: $found && console.log("You found something:", $found);

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
  $stampCollection = $sessionStorage.get("collection").collection;
  $: $trigger && $sessionStorage.set({ stamps: $stampCollection }),
    $sessionStorage.save();
  $: $triggerMenuState && setBG();

  // Fix document page size when toolbar is shown or hidden
  const onResize = function () {
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onResize();
  window.onresize = onResize;
  // setBG();

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
        let stamp = params.get(param);
        console.log("Found:", stamp);
        $found = true;
        let id = stamp.split("_");
        let foundStamp =
          $stampCollection[id[0]].stamps[id[1]].area_stamps[stamp];
        foundStamp.count += 1;
        foundStamp.found = true;

        saveResults();
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
    console.log("save results");
    $trigger += 1;
  };

  function nav(event) {
    // console.log("PREV:", previous_nav);

    // console.log("NAV EVENT:", event.classList);
    $menuState = event.id;
    previous_nav.classList.remove("active");
    event.classList.add("active");
    setBG();
    previous_nav = event;
  }

  //// ---- QR SCAN ----
  onMount(() => {
    $current_param = getParameter(window.location.href, eventid);

    previous_nav = nav_home;
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
      stop();
      getParameter(decodedText, eventid);
    };
  });
</script>

<!-- {@debug $found} -->

<div id="main" bind:this={main} class="bg_dark">
  {#if $current_param !== "advertisement" && $found}
    <Dialog />
  {/if}

  <div bind:this={reader} id="reader" width="600px" class="grid-top" />
  <div bind:this={overlay} id="overlay" class="grid-top " />
  <div id="bg" class="grid-top " />

  {#if $current_param === "advertisement"}
    <Unavailable />
  {:else}
    <!-- MAIN CONTENT START-->
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
    <!-- MAIN CONTENT END  -->
  {/if}

  <div id="shadow" />
</div>

<nav>
  <div
    bind:this={nav_home}
    class="nav_button active"
    id="home"
    on:click={() => nav(nav_home)}
  >
    {#if $menuState === "home"}
      <img src="assets/icons/nav/home-active.svg" alt="home" />
    {:else}
      <img src="assets/icons/nav/home.svg" alt="home" />
    {/if}
  </div>

  <div
    bind:this={nav_teachers}
    class="nav_button"
    id="teachers"
    on:click={() => nav(nav_teachers)}
  >
    {#if $menuState === "teachers"}
      <img src="assets/icons/nav/user-square-active.svg" alt="teachers" />
    {:else}
      <img src="assets/icons/nav/user-square.svg" alt="teachers" />
    {/if}
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
    {#if $menuState === "specials"}
      <img src="assets/icons/nav/verify-active.svg" alt="specials" />
    {:else}
      <img src="assets/icons/nav/verify.svg" alt="specials" />
    {/if}
  </div>
  <div
    bind:this={nav_monsters}
    class="nav_button"
    id="monsters"
    on:click={() => nav(nav_monsters)}
  >
    {#if $menuState === "monsters"}
      <img src="assets/icons/nav/monsters-active.svg" alt="monsters" />
    {:else}
      <img src="assets/icons/nav/monsters.svg" alt="monsters" />
    {/if}
  </div>
</nav>

<style>
</style>
