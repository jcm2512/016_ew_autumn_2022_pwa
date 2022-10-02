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
    message,
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

  export const versionNum = 16;
</script>

<div id="main" class="bg_dark">
  <div id="shadow" />
</div>

<style>
</style>
