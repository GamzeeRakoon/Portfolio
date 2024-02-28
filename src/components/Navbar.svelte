<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    import { Avatar } from '@skeletonlabs/skeleton';
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
        <a class="" href="/"><Avatar src="ma_cheese.png" alt="Icon" width="w-11" rounded="rounded-md" cursor="cursor-pointer"/></a>
    </svelte:fragment>
	<svelte:fragment slot="trail">
        <button type="button" class="btn variant-ghost rounded-md card-hover">About me</button>
        <button type="button" class="btn variant-ghost rounded-md card-hover">Skills</button>
        <button type="button" class="btn variant-ghost rounded-md card-hover">projects</button>
        <button type="button" class="btn variant-ghost rounded-md card-hover">Contact</button>
    </svelte:fragment>
</AppBar>