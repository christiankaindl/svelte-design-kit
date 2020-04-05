<script>
  import UIAlert from "./UI/UIAlert.svelte";
  import UIAlertAction from "./UI/UIAlertAction.svelte";
	import UIImage from "./UI/UIImage.svelte";
	import LayoutAuto from './Layout/LayoutAuto.svelte'

  let triggerAlert;
</script>

<style>
  :global(body) {
    font-family: sans-serif;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
		text-align: center;
		padding: 0;
		margin: 0;
  }
  :global(*) {
    box-sizing: border-box;
  }
</style>

<LayoutAuto direction='column'>
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>
  <UIAlert bind:triggerAlert>
    <span slot='title'>Device Offline</span>
    <span slot='text'>Your device is not connected to the Internet. Some features may not be available.</span>
    <UIAlertAction primary>
      Close
    </UIAlertAction>
    <UIAlertAction>
      Secondary option
    </UIAlertAction>
  </UIAlert>
  <button on:click={triggerAlert}>
    Trigger alert!
  </button>
  <UIImage src='https://source.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80' alt='' />
  <UIImage src='https://source.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80' alt='' />
  <UIImage src='https://source.unsplash.com/photo-1538291323976-37dcaafccb12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80' alt='' />
</LayoutAuto>