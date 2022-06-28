<script>
  import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
  import { onMount } from "svelte";
  import { found } from "./store.js";

  let reader, button; // Reference to DOM element
  let start, stop; // Functions loaded on Mount
  let scanning = false; // Triggered when camera is ready to scan
  let loading = false; // Loading animation
  let trigger = 0; //trigger DOM refresh when incremented
  $found = false;

  let eventid = "ae22",
    id = "id",
    param = "k";

  let tempStorage = JSON.parse(localStorage.getItem(eventid)) || [];
  //   let set = new Set(tempStorage);
  let set = tempStorage;

  console.log(tempStorage);

  var onResize = function () {
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  onResize();
  window.onresize = onResize;

  // ---- FUNCTIONS:
  // Get Parameter
  const getParameter = (url, eventid) => {
    const params = new URLSearchParams(new URL(url).search);
    if (!params.get(param)) {
      console.log("No parameters found in URL");
      return false;
    }
    switch (params.get(id)) {
      case eventid:
        return params.get(param);
      case "clear":
        // set = new Set([]);
        set = [];
        return false;
      default:
        console.log("Please add 'id' parameter to url");
        return false;
    }
  };

  // Save Results
  const saveResults = () => {
    trigger += 1;
    localStorage.setItem(eventid, JSON.stringify([...set]));
  };

  // ---- URL SCAN: (on page load)
  let result = getParameter(window.location.href, eventid);
  if (result) {
    set.add(getParameter(window.location.href, eventid));
  }
  saveResults();

  // ---- APP SCAN ----
  onMount(() => {
    const html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    start = function () {
      loading = true;
      button.classList.add("loader");
      html5QrCode
        .start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
        .then((ignore) => {
          // QR Code scanning has started.
          scanning = true;
          loading = false;
        });
    };
    stop = function () {
      html5QrCode
        .stop()
        .then((ignore) => {
          // QR Code scanning is stopped.
          scanning = false;
        })
        .catch((err) => {
          // Stop failed, handle it.
        });
    };
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      $found = true;
      set.add(getParameter(decodedText, eventid));
      saveResults();
      stop();
    };
  });
</script>

<main>
  <div bind:this={reader} id="reader" width="600px" />

  {#key trigger}
    {#each [...set] as item}
      <div class="item">{item}</div>
    {/each}
  {/key}

  <div class="nav">
    <div class="button_container">
      {#if !scanning}
        <div on:click={start} class="button">
          {#if loading}
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
  main {
    background-color: black;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div {
    color: white;
  }

  #scan {
    background-color: firebrick;
  }

  .nav {
    grid-area: app;
    align-self: end;
    /* position: fixed; */
    /* bottom: 0; */
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    z-index: 20;
  }

  .button_container {
    justify-self: center;
    height: 7rem;
    width: 7rem;
    z-index: 10;
    grid-row: 1;
    grid-column: 1;
  }

  .button {
    width: 100%;
    height: 100%;
    padding: 0.2rem;
    color: var(--white);
    background-color: var(--blue);
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
  }
</style>
