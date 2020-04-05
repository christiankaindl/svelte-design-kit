<script>
  /** Simple Alert component, similar to Alerts in iOS.
   *
   * Alerts take up the whole screen and can only exited through a clear action from the user. They cannot
   * be dismissed via the browser back buttons.
   *
   * Possible API (through Context):
   * Each AlertAction child could register itself into a stack that is then displayed as the action list.
   * Advantage over current method (`actions` prop): Usage as normal components (`<AlertAction>My Action</AlertAction`)
   *
   * Method: registerAction()
   *
   * TODOs
   *  - Test with UIView and UIViewChild
   *  - Focus management
   *  - Finish API (Context and AlertAction component?)
   */
  import UIBackdrop from "./UIBackdrop.svelte";
  import UIPortal from "./UIPortal.svelte";
  import { scale, fade } from "svelte/transition";
  import { setContext, onMount } from "svelte";
  import { scrollLock } from "../scrollLock";
  import { navigationLock } from "../navigationLock";

  export let isOpen = false;
  export function triggerAlert() {
    isOpen = true;
  }

  $: {
    scrollLock(isOpen);
    navigationLock(isOpen);
  }

  setContext("alert", {
    close: function handleClose() {
      isOpen = false;
      window.history.back();
    }
  });
</script>

<style>
  .modal-child {
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(15px);
    border-radius: 0.85em;
    width: 100%;
    max-width: 26em;
    contain: layout paint;
  }
  @supports (not (backdrop-filter: blur(1px))) {
    .modal-child {
      background-color: rgba(252, 252, 252, 1);
    }
  }
  .modal-content {
    padding: 2em 1.75em 1.5em;
    text-align: center;
  }
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  .text {
    opacity: 0.9;
  }
  .modal-parent {
    height: 100%;
    width: 100%;
    padding: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: manipulation;
    contain: strict;
    top: 0;
    left: 0;
  }
  .actions {
    display: flex;
    flex-direction: column;
    margin: 0 0.6em 0.5em;
  }
</style>

{#if isOpen}
  <UIBackdrop />
  <UIPortal>
    <div class='modal-parent'>
      <div
        class="modal-child"
        out:fade={{ duration: 200 }}
        in:scale={{ duration: 300, start: 1.2 }}
      >
        <div class='modal-content'>
          <div class='title'>
            <slot name='title'  />
          </div>
          <div class='text'>
            <slot name='text' />
          </div>
        </div>
        <div class='actions'>
        <slot />
        </div>
      </div>
    </div>
  </UIPortal>
{/if}
