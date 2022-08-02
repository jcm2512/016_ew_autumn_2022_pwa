<script>
  import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
  import { animateCSS } from "./animateCSS.svelte";
  import { onMount } from "svelte";
  import { found, scanning, loading, trigger, monsterObject } from "./store.js";
  import { localData } from "./localstorage.svelte";

  let reader, button; // Reference to DOM element
  let start, stop; // Functions loaded on Mount
  let DOMelements = [];
  $found = false;

  // Load local game data
  let sessionStorage = localData;
  sessionStorage.load();

  $monsterObject = sessionStorage.get("monsterData").monsterData;
  $: $trigger && sessionStorage.set({ monsterData: $monsterObject }),
    sessionStorage.save();

  let monsters = Object.keys($monsterObject);
  console.log(monsters);

  let eventid = "ew202210",
    param = "m";

  const onResize = function () {
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  onResize();
  window.onresize = onResize;

  let FoundMonsters = [];
  let HiddenMonsters = [];

  FoundMonsters.push(
    Object.values($monsterObject)
      .filter((monster) => monster.found)
      .map((monster) => {
        return monster.name;
      })
  );
  HiddenMonsters.push(
    Object.values($monsterObject)
      .filter((monster) => !monster.found)
      .map((monster) => {
        return monster.name;
      })
  );

  // ---- FUNCTIONS:
  // Get Parameter
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

  // Save Results
  const saveResults = () => {
    $trigger += 1;
  };

  // ---- APP SCAN ----
  onMount(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    start = function () {
      $loading = true;
      button.classList.add("loader");
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
      $monsterObject[foundMonster].count += 1;
      $monsterObject[foundMonster].found = true;
      saveResults();
      stop();
    };
  });
</script>

<main>
  <div bind:this={reader} id="reader" width="600px" />

  <div class="list">
    {#each monsters as monster, index}
      {#if $monsterObject[monster].found}
        <span class="img_Container">
          <img
            src={`/assets/icons/monsters/${$monsterObject[monster].img}`}
            alt={$monsterObject[monster].name}
            class="icon"
            bind:this={DOMelements[index]}
            on:click|preventDefault={() => {
              animateCSS(DOMelements[index], "rubberBand");
            }}
          />
        </span>
      {:else}
        <span class="img_Container">
          <img
            src={`/assets/icons/monsters/${$monsterObject[monster].img}`}
            alt={$monsterObject[monster].name}
            class="icon locked "
          />
        </span>
      {/if}
    {/each}
  </div>

  <div class="nav">
    <div class="button_container">
      {#if !$scanning}
        <div on:click={start} class="button">
          {#if $loading}
            <div class="loader" />
          {:else}
            <img bind:this={button} class="start" alt="scan" />
            <div class="label">scan</div>
          {/if}
        </div>
      {:else}
        <div on:click={stop} class="button stop_color">
          <img class="stop" />
          <div class="label">stop</div>
        </div>
      {/if}
    </div>
    <div class="nav_background" />
  </div>
</main>

<style>
  #reader {
    grid-column: 1;
    grid-row: 1;
    z-index: 100;
    visibility: hidden;
  }
  main {
    background-color: slateblue;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: grid;
    /* grid-template-rows: repeat(4, 4fr) 100px; */
    /* grid-template-columns: 1; */
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  div {
    color: white;
  }

  #scan {
    background-color: firebrick;
  }

  .nav {
    align-items: center;
    width: 100%;
    padding: 20px;
    grid-row: 5;
    align-self: center;
    justify-self: center;
    /* height: 100%; */
    /* width: 100%; */
    /* display: grid; */
    grid-template-rows: 1fr;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .button_container {
    justify-self: center;
    height: 6rem;
    width: 6rem;
    z-index: 10;
    grid-row: 1;
    grid-column: 1;
  }

  .button {
    background-color: var(--orange);
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    color: var(--white);
    font-size: 1.5rem;
    font-family: var(--main-font);
    border: solid 0.5rem var(--white);
    border-radius: 2rem;
    display: grid;
    grid-template-areas:
      "button"
      "text";
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
  }

  .button img {
    width: 60%;
    height: auto;
  }

  .button img,
  .loader,
  .loader:after {
    grid-area: button;
  }

  img.start {
    content: url("/assets/icons/icons8-qr-code-64.png");
    height: 85%;
  }

  img.stop {
    content: url("/assets/icons/icons8-stop-64.png");
  }

  .button img,
  .loader,
  .loader:after {
    grid-area: button;
  }

  .label {
    grid-area: text;
    padding-bottom: 1rem;
  }

  .button img,
  .label {
    align-self: center;
    justify-self: center;
    z-index: 5;
  }

  .stop_color {
    background-color: var(--red);
  }
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    /* grid-row: 1/-1;
	grid-column: 1; */
    align-self: center;
    justify-self: center;
    z-index: 10;
  }
  .loader {
    border-top: 0.5rem solid rgba(255, 255, 255, 0.2);
    border-right: 0.5rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.2);
    border-left: 0.5rem solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .item {
    color: #ffffff;
    height: 20vh;
  }

  .list {
    grid-column: 1/2;
    grid-row: 1/4;
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }

  img {
    height: 20vw;
    width: 20vw;
  }

  .locked {
    filter: brightness(0) grayscale(100%) opacity(0.5);
  }
</style>
