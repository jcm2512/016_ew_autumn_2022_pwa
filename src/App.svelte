<script>
  var onResize = function () {
    console.log("resized");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };
  onResize();
  window.onresize = onResize;
</script>

<main>
  <div id="header">Top</div>
  <div id="footer">Bottom</div>
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
</style>
