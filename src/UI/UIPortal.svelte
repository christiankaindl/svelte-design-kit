<script>
 /** Displays its children outside the current component tree
  *
  * Inspired by: https://github.com/sveltejs/svelte/issues/3088#issuecomment-505785516
  * and          https://github.com/sveltejs/svelte/issues/4237
  */
 let ref;
 $: ref && document.body.appendChild(ref);
</script>

<style>
  :global(.portal) {
    right: 0;
    bottom: 0;
    position: fixed;
    left: 0;
    top: 0;
    contain: strict;
    overscroll-behavior: contain;
  }
</style>

<div class="portal" bind:this={ref}>
	<slot></slot>
</div>
