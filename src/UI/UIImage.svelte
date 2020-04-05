<script>

  export let hasLoaded = false
  export let alt = ''
  export let src = ''
  export let height = null
  export let width = null

  function handleLoad () {
    hasLoaded = true
  }
</script>

<style>
  .image {
    width: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 250ms;
  }
  .loaded {
    opacity: 1;
  }
</style>

<img
  {alt}
  {src}
  {height}
  {width}
  loading='lazy'
  on:load={handleLoad}
  class="image"
  class:loaded={hasLoaded}
/>
