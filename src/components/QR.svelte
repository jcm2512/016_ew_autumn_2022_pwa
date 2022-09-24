<script>
  import { loading, qr_state } from "../store";
</script>

<span id="qr_code">
  {#if $qr_state == "ready"}
    <img src="../assets/icons/nav/scan-barcode.svg" alt="Scan" />
  {/if}
  {#if $qr_state == "loading"}
    <img src="../assets/icons/nav/loading.svg" alt="Scan" />
  {/if}
  {#if $qr_state == "scanning"}
    <img src="../assets/icons/nav/stop.svg" alt="Scan" />
  {/if}
</span>

<style>
  #qr_code {
    display: flex;
    height: 100%;
  }
</style>
