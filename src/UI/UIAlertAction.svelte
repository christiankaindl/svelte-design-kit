<script>
  import { getContext } from "svelte";

  export let primary = false;
  export let action = function emptyDefaultFn() {};

  const { close } = getContext("alert");

  function handleAction() {
    action();
    close();
  }
</script>

<style>
  .action-item {
    background-color: transparent;
    font-size: 1em;
    border: none;
    flex-grow: 1;
    text-align: center;
    padding: 0.6em 1em;
    background-color: rgba(0, 0, 0, 0.085);
    border-radius: 0.5em;
    margin: 0.3em;
    outline: none;
  }
  .action-item::-moz-focus-inner {
    border: 0;
  }
  @media (hover: hover) and (pointer: fine) {
    .action-item:hover {
      background-color: rgba(0, 0, 0, 0.11);
    }
    .action-item.primary:hover {
      background-color: #007affe0;
    }
  }
  .action-item:active {
    background-color: rgba(0, 0, 0, 0.18);
  }
  .action-item.primary {
    box-shadow: none;
    color: white;
    background-color: #007aff;
    font-weight: bold;
  }
  .action-item.primary:active {
    background-color: #007affa0;
  }
</style>

<button on:click={() => handleAction()} class:primary class="action-item">
  <slot />
</button>
