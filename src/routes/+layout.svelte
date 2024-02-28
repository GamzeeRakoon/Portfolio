<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '../components/Navbar.svelte';
	import '@fontsource/archivo-black';
	
	import '../app.postcss';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="footer">
		
	</svelte:fragment>
</AppShell>