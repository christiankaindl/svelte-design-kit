<script>
  import { fade } from "svelte/transition";
  import UIPortal from "./UIPortal.svelte";
</script>

<style>
  .background {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    right: 0;
    bottom: 0;
    position: fixed;
    left: 0;
    top: 0;
    will-change: opacity;
    contain: strict;
    z-index: 100;
    overscroll-behavior: contain;
    backdrop-filter: blur(2.5px);
  }
</style>

<UIPortal>
  <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class='background' />
</UIPortal>