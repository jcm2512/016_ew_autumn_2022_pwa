<script>
  // This is the final version of the app after the end of the event.
  // All stamps will be shown to the players
  // Please see "simple-qr" branch for previous playable version

  import { onMount } from "svelte";
  import { Html5Qrcode } from "html5-qrcode";
  import {
    found,
    scanning,
    loading,
    trigger,
    stampCollection,
    menuState,
    menuStatePrevious,
    triggerMenuState,
    qr_state,
    sessionStorage,
    foundStamp,
    foundStampCollection,
    viewAllStamps,
    stampCount,
    stampArea,
    triggerTrivia,
    errorDialog,
    stampType,
    showfullsize,
    fullsizestamp,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";
  import Std_Layout from "./stamps/Std_Layout.svelte";
  import Menu from "./Menu.svelte";
  import Main from "./Main.svelte";
  import QR from "./components/QR.svelte";
  // import Unavailable from "./pages/Unavailable.svelte";
  import Trivia from "./pages/Trivia.svelte";
  import Dialog from "./popups/Dialog.svelte";
  import Fullsize from "./popups/Fullsize.svelte";
  import ErrorDialog from "./popups/ErrorDialog.svelte";
  import TriviaPopup from "./popups/TriviaPopup.svelte";
  import "animate.css";
  import Teachers from "./stamps/Teachers.svelte";
  import { fade } from "svelte/transition";

  export const versionNum = 20;

  const searchParams = new URLSearchParams(
    new URL(window.location.href).search
  );
  window.dataLayer = window.dataLayer || [];

  // Google Analytics
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-2QLN8HM2DM");

  // Global Variables
  let reader, button, overlay, main, next; // Reference to DOM element
  let nav_menu, nav_home, nav_teachers, nav_specials, nav_monsters; // Reference to DOM Nav elements
  let previous_nav = nav_home;
  let start, stop; // Functions loaded on Mount
  $found = false;

  // Set all stamps to be shown
  $viewAllStamps = true;

  // INITIALIZE DEVMODE
  if (localStorage.getItem("DEV_MODE") == undefined) {
    localStorage.setItem("DEV_MODE", JSON.stringify(false));
  }
  if (JSON.parse(localStorage.getItem("DEV_MODE")) == true) {
    $viewAllStamps = true;
  }

  // INITIALIZE TEACHER STAMPS
  if (localStorage.getItem("Teacher_Stamps") == undefined) {
    localStorage.setItem("Teacher_Stamps", JSON.stringify([]));
  }

  // Load local data
  $sessionStorage = localData;

  // Set collected monsters to local data
  function updateStampCollection() {
    $stampCollection = $sessionStorage.get("stamps").stamps;
  }

  // CHECK VERSION NUMBER AND CLEAR LOCAL CACHE
  if (localStorage.getItem("MSR_version") != versionNum) {
    $sessionStorage.clear();
    $sessionStorage.load();
    updateStampCollection();

    // SET VERSION NUMBER
    localStorage.setItem("MSR_version", JSON.stringify(versionNum));
  } else {
    $sessionStorage.load();
    updateStampCollection();
  }

  $stampCount = $sessionStorage.get("found").found;

  function updateState() {
    nav_home.classList.remove("active");
    nav_monsters.classList.remove("active");
    nav_specials.classList.remove("active");
    nav_teachers.classList.remove("active");
    if ($menuState === "home") {
      main.setAttribute("class", "");
      main.classList.add("bg_dark");
      nav_home.classList.add("active");
    }

    if ($menuState === "stamps") {
      main.setAttribute("class", "");
      main.classList.add("bg_purple");
      nav_stamps.classList.add("active");
    }

    if ($menuState === "monsters") {
      main.setAttribute("class", "");
      main.classList.add("bg_purple");
      nav_monsters.classList.add("active");

      // REMOVE NOTIFICATIONS
      // $notifyMonsters = false;
      // localStorage.setItem("notifyMonsters", JSON.stringify(false));
    }

    if ($menuState === "specials") {
      main.setAttribute("class", "");
      main.classList.add("bg_red");
      nav_specials.classList.add("active");
    }

    if ($menuState === "teachers") {
      main.setAttribute("class", "");
      main.classList.add("bg_blue");
      nav_teachers.classList.add("active");
    }
  }

  // EVENT TRIGGERS
  $: $trigger && $sessionStorage.set({ stamps: $stampCollection }),
    $sessionStorage.save();
  $: $triggerMenuState && updateState();

  // Fix document page size when toolbar is shown or hidden
  const onResize = function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onResize();
  window.onresize = onResize;

  //// Get Found Stamp
  function getFoundStamp(stamp) {
    let getstamp = true;
    let alreadyfound = false;
    let id = stamp.split("_");
    let current_stamp = $stampCollection[id[0]].stamps[id[1]].area_stamps;
    let items = [];
    // Get stamp location
    $stampType = id[0];
    $stampArea = id[1];

    // IF TRIVIA STAMP
    if (id[0] == "specials") {
      getstamp = false;
      $foundStamp = current_stamp[stamp];

      if (!$foundStamp.found) {
        $triggerTrivia = true;
        $foundStampCollection.push($foundStamp);
      } else {
        $foundStampCollection.push($foundStamp);
        alreadyfound = true;
      }
    }

    // MULTI STAMP
    if (id.length === 2) {
      items = Object.keys(current_stamp);

      // 3 stamps per set; therefor count = 2
      let count = 2;

      if (id[0] == "teachers") {
        // Filter out stamps that have already been found
        let filtered_stamps = Object.fromEntries(
          Object.entries(current_stamp).filter(
            ([key, value]) => value.found == false
          )
        );
        items = Object.keys(filtered_stamps);

        // Removed a stamp, so count = 1
        count = 1;

        // If all stamps have been found return message
        if (items.length == 0) {
          $foundStamp = current_stamp[Object.keys(current_stamp)[0]];
          $foundStampCollection.push($foundStamp);
          getstamp = false;
          $errorDialog = true;
        }
      }

      if (items.length > 0) {
        for (let i = 0; i < count; i++) {
          let random = items[Math.floor(Math.random() * items.length)];
          $foundStamp = current_stamp[random];
          console.log("foundstamp random", $foundStamp);
          $foundStamp.found = true;
          $foundStamp.count += 1;
          $foundStampCollection.push($foundStamp);
          $stampCount += 1;
        }
      }
    }

    if (getstamp) {
      // show dialog and save stamps to localstorage
      $found = true;

      $sessionStorage.set({ found: $stampCount });
      $sessionStorage.save();

      saveResults();
    }

    if (alreadyfound) {
      // Show error dialog
      $errorDialog = true;
    }
  }

  //// Save Results
  function saveResults() {
    $trigger += 1;
  }

  function nav(event) {
    $menuStatePrevious = $menuState;
    $menuState = event.id;
    previous_nav.classList.remove("active");
    event.classList.add("active");
    updateState();
    previous_nav = event;
  }

  function getNav(id) {
    if (id === "home") return nav_home;
    if (id === "teachers") return nav_teachers;
    if (id === "specials") return nav_specials;
    if (id === "monsters") return nav_monsters;
  }

  //// ---- QR SCAN ----
  onMount(() => {
    previous_nav = getNav($menuState);
    nav(previous_nav);

    const html5QrCode = new Html5Qrcode("reader");
    const config = {
      fps: 10,
      qrbox: { width: "20vw", height: "20vw" },
    };
    start = function () {
      $loading = true;
      $qr_state = "loading";
      reader.style.visibility = "visible";
      overlay.style.visibility = "visible";

      html5QrCode
        .start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .then((ignore) => {
          // NAV Styling
          nav_menu.classList.add("disabled");
          previous_nav = getNav($menuState);
          previous_nav.classList.remove("active");

          // QR Code scanning has started.
          $menuState = "scanning";
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
          nav_menu.classList.remove("disabled");
          // nav(previous_nav);
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      stop();
      getFoundStamp(decodedText);
    };
  });

  function checkIfNotScanning(target) {
    if (!($loading || $scanning)) {
      nav(target);
    }
  }

  //// DEV
  // getFoundStamp("teachers_haruka");
  // getFoundStamp("teachers_joey");
  // getFoundStamp("specials_a2_002");
</script>

<div id="main" bind:this={main} class="bg_dark">
  {#if $found}
    <Dialog STAMP={$foundStampCollection} />
  {/if}

  {#if $showfullsize}
    <Fullsize STAMP={$fullsizestamp} />
  {/if}

  {#if $errorDialog}
    <ErrorDialog />{/if}

  {#if $triggerTrivia}
    <TriviaPopup STAMP={$foundStamp} />
  {/if}

  <div bind:this={reader} id="reader" width="600px" class="grid-top" />
  <div bind:this={overlay} id="overlay" class="grid-top " />
  <div id="bg" class="grid-top " />

  {#if $menuState === "home"}
    <Main />
  {/if}
  {#if $menuState === "teachers"}
    <Teachers />
  {/if}
  {#if $menuState === "specials"}
    <Std_Layout />
  {/if}
  {#if $menuState === "monsters"}
    <Std_Layout />
  {/if}
  {#if $menuState === "scanning"}
    <!-- Do not show anything -->
  {/if}

  <div id="shadow" />
</div>

<nav bind:this={nav_menu}>
  <div
    bind:this={nav_home}
    class="nav_button"
    id="home"
    on:click={() => checkIfNotScanning(nav_home)}
  >
    {#if $menuState === "home"}
      <img class="nav_img" src="assets/icons/nav/home-active.svg" alt="home" />
    {:else}
      <img class="nav_img" src="assets/icons/nav/home.svg" alt="home" />
    {/if}
  </div>

  <div
    bind:this={nav_teachers}
    class="nav_button"
    id="teachers"
    on:click={() => checkIfNotScanning(nav_teachers)}
  >
    {#if $menuState === "teachers"}
      <img
        class="nav_img"
        src="assets/icons/nav/user-square-active.svg"
        alt="teachers"
      />
    {:else}
      <img
        class="nav_img"
        src="assets/icons/nav/user-square.svg"
        alt="teachers"
      />
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
    on:click={() => checkIfNotScanning(nav_specials)}
  >
    {#if $menuState === "specials"}
      <img
        class="nav_img"
        src="assets/icons/nav/verify-active.svg"
        alt="specials"
      />
    {:else}
      <img class="nav_img" src="assets/icons/nav/verify.svg" alt="specials" />
    {/if}
  </div>
  <div
    bind:this={nav_monsters}
    class="nav_button"
    id="monsters"
    on:click={() => checkIfNotScanning(nav_monsters)}
  >
    {#if $menuState === "monsters"}
      <img
        class="nav_img"
        src="assets/icons/nav/monsters-active.svg"
        alt="monsters"
      />
    {:else}
      <img class="nav_img" src="assets/icons/nav/monsters.svg" alt="monsters" />
    {/if}
  </div>
</nav>

<style>
</style>
