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
    menuStatePrevious,
    triggerMenuState,
    qr_state,
    sessionStorage,
    current_param,
    foundStamp,
    foundStampCollection,
    advertState,
    viewAllStamps,
    stampCount,
    devMode,
    notifyMonsters,
    showNotification,
    stampArea,
  } from "./store.js";
  import { localData } from "./localstorage.svelte";
  import Std_Layout from "./stamps/Std_Layout.svelte";
  import Menu from "./Menu.svelte";
  import QR from "./components/QR.svelte";
  // import Unavailable from "./pages/Unavailable.svelte";
  import Trivia from "./pages/Trivia.svelte";
  import Dialog from "./popups/Dialog.svelte";
  import "animate.css";
  import Teachers from "./stamps/Teachers.svelte";

  export const versionNum = 15;
  let weeklyMonster = "specials_a1_003";

  // Check for admin key
  const searchParams = new URLSearchParams(
    new URL(window.location.href).search
  );
  if (searchParams.get("login") !== "admin") {
    console.log("Running Google Analytics");
    window.dataLayer = window.dataLayer || [];

    // Run Google Analytics only if not logged in as admin
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-2QLN8HM2DM");
  } else {
    console.log("Logged in as admin; Google Analytics disabled");
  }

  // Global Variables
  let eventid = "ew2022-10",
    stampid = "m";
  let reader, button, overlay, main, next; // Reference to DOM element
  let nav_menu, nav_home, nav_teachers, nav_specials, nav_monsters; // Reference to DOM Nav elements
  let previous_nav = nav_home;
  let start, stop; // Functions loaded on Mount
  $found = false;

  // INITIALIZE DEVMODE
  if (localStorage.getItem("DEV_MODE") == undefined) {
    localStorage.setItem("DEV_MODE", JSON.stringify(false));
  }
  if (JSON.parse(localStorage.getItem("DEV_MODE")) == true) {
    console.log("DEV MODE");
    $devMode = true;
    $viewAllStamps = true;
  }

  // INITIALIZE WEEKLY MONSTERS STAMPS
  if (localStorage.getItem("Weekly_Monsters") == undefined) {
    localStorage.setItem("Weekly_Monsters", JSON.stringify([]));
  }

  // INITIALIZE TEACHER STAMPS
  if (localStorage.getItem("Teacher_Stamps") == undefined) {
    localStorage.setItem("Teacher_Stamps", JSON.stringify([]));
  }

  // GET WEEKLY MONSTER
  let weeklyMonsters = JSON.parse(localStorage.getItem("Weekly_Monsters"));
  function getWeeklyMonster(stamp_id) {
    if (!weeklyMonsters.includes(stamp_id)) {
      $found = true;
      console.log("don't have", stamp_id);
      weeklyMonsters.push(stamp_id);
      localStorage.setItem("Weekly_Monsters", JSON.stringify(weeklyMonsters));
      getFoundStamp(stamp_id);
    }
  }

  // Load local data
  $sessionStorage = localData;

  // Set collected monsters to local data
  function updateStampCollection() {
    $stampCollection = $sessionStorage.get("stamps").stamps;
  }

  // CHECK VERSION NUMBER AND CLEAR LOCAL CACHE
  if (localStorage.getItem("MSR_version") != versionNum) {
    console.log("clearing cache");
    $sessionStorage.clear();
    $sessionStorage.load();
    updateStampCollection();

    // SET VERSION NUMBER
    localStorage.setItem("MSR_version", JSON.stringify(versionNum));

    // Load weekly monster from local localStorage
    // (We do this here because localStorage will get wiped when updating the database)
    console.log("Reloading weekly stamps");
    weeklyMonsters.forEach((stamp_id) => loadWeeklyStamps(stamp_id));
  } else {
    $sessionStorage.load();
    updateStampCollection();
  }

  //// Load Weekly Stamps
  function loadWeeklyStamps(stamp_id) {
    $stampCount += 1;
    let id = stamp_id.split("_");
    let stamp;

    stamp = $stampCollection[id[0]].stamps[id[1]].area_stamps[stamp_id];

    stamp.count += 1;
    stamp.found = true;
    // $foundStampCollection.push(stamp);
    console.log($stampCount);

    console.log(stamp);
    $sessionStorage.set({ found: $stampCount });
    $sessionStorage.save();
    saveResults();
  }

  // CHECK FOR NEW NOTIFICATIONS
  if (localStorage.getItem("notifyMonsters") == undefined) {
    localStorage.setItem("notifyMonsters", JSON.stringify(true));
  }

  $notifyMonsters = JSON.parse(localStorage.getItem("notifyMonsters"));

  $stampCount = $sessionStorage.get("found").found;

  // Check for advertisement key
  if (localStorage.getItem("advert") != undefined) {
    $advertState = JSON.parse(localStorage.getItem("advert"));
  } else {
    localStorage.setItem("advert", JSON.stringify($advertState));
  }

  const saveState = function () {
    localStorage.setItem("state", JSON.stringify($menuState));
  };

  // loadState();

  function updateState() {
    // saveState();
    console.log("updating menu state");
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
      $notifyMonsters = false;
      localStorage.setItem("notifyMonsters", JSON.stringify(false));
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
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  onResize();
  window.onresize = onResize;

  //// ---- FUNCTIONS:

  //// Get Found Stamp
  function getFoundStamp(stamp) {
    let id = stamp.split("_");
    let current_stamp = $stampCollection[id[0]].stamps[id[1]].area_stamps;
    let items = [];
    $stampArea = id[1];
    console.log($stampArea);
    console.log(stamp);

    // SINGLE STAMP
    if (id.length === 3) {
      $foundStamp = current_stamp[stamp];
      $foundStamp.count += 1;
      $foundStamp.found = true;
      $foundStampCollection.push($foundStamp);
      $stampCount += 1;
    }

    // MULTI STAMP
    if (id.length === 2) {
      items = Object.keys(current_stamp);
      let count = 2;
      if (id[0] == "teachers") {
        let filtered_stamps = Object.fromEntries(
          Object.entries(current_stamp).filter(
            ([key, value]) => value.found == false
          )
        );
        items = Object.keys(filtered_stamps);
        console.log(items.length);
        count = 1;
        if (items.length == 0) return;
      }
      for (let i = 0; i < count; i++) {
        let random = items[Math.floor(Math.random() * items.length)];
        $foundStamp = current_stamp[random];
        $foundStamp.found = true;
        $foundStamp.count += 1;
        $foundStampCollection.push($foundStamp);
        $stampCount += 1;
      }
    }
    // if (items.length == 0) return;
    $found = true;

    console.log($foundStampCollection);

    $sessionStorage.set({ found: $stampCount });
    $sessionStorage.save();

    saveResults();
  }

  //// Get Parameter
  function getParameter(url, eventid) {
    const params = new URLSearchParams(new URL(url).search);
    if (!params.get(stampid)) {
      console.log("Stamp not found in URL");
    } else {
      switch (params.get("id")) {
        case eventid:
          let stamp = params.get(stampid);
          if (stamp == "advertisement") {
            // localStorage.setItem("state", "home");
            $advertState = true;
            console.log("set advert state: true");
            return false;
          }
          console.log("Found:", stamp);
          ///
          getFoundStamp(stamp);
          return params.get(stampid);
        case "clear":
          sessionStorage.clear();
          return false;
        case "admin":
          $devMode = true;
          console.log("/// DEV MODE ///");
          $viewAllStamps = true;
          console.log(`/// viewAllStamps:${viewAllStamps}  ///`);

        default:
          console.log("Please add 'id' parameter to url");
          return false;
      }
      return false;
    }
  }

  //// Save Results
  function saveResults() {
    console.log("save results");
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
    $current_param = getParameter(window.location.href, eventid);
    if ($current_param === "advertisement") {
      localStorage.setItem("advert", JSON.stringify("true"));
      $advertState = true;
      $menuState = "home";
    }
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
          nav(previous_nav);
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

  function checkIfNotScanning(target) {
    if (!($loading || $scanning)) {
      nav(target);
    }
  }

  // SEP 9 WEEKLY MONSTER
  getWeeklyMonster(weeklyMonster);

  console.log(`//// View All Stamps: ${$viewAllStamps}/////`);
</script>

<div id="main" bind:this={main} class="bg_dark">
  {#if $found}
    <Dialog STAMP={$foundStampCollection} />
  {/if}

  <div bind:this={reader} id="reader" width="600px" class="grid-top" />
  <div bind:this={overlay} id="overlay" class="grid-top " />
  <div id="bg" class="grid-top " />

  {#if $menuState === "home"}
    <Trivia />
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

  {#if $notifyMonsters && $showNotification}
    <div
      on:click={() => checkIfNotScanning(nav_monsters)}
      class="animate__animated animate__delay-1s animate__heartBeat animate__infinite"
      id="notification"
    >
      NEW!
    </div>
  {/if}

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
