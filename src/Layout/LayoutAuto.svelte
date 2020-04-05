<script>
  export let gap = 1
  export let direction
  export let align = 'stretch'
  export let justify = 'stretch'

</script>

<style>
  .layout-auto {
    display: flex;
    align-items: var(--align);
    justify-content: var(--justify);
    flex-direction: var(--direction);
    gap: var(--gap);
  }
</style>

<div
  class="layout-auto"
  style="
    --gap: {gap}em;
    --direction: {direction};
    --align: {align};
    --justify: {justify};
  "
>
  <slot />
</div>
