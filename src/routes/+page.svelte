<script lang="ts">
	 import LanguageStats from "../components/LanguageStats.svelte";
</script>

<section class="container h-full mx-auto flex items-center">
	<div class="space-y-5">
		<h1 class="text-9xl">Hello! <span class="text-6xl">My name is,</span></h1>
		<span class="text-8xl font-b overflow-visible text-ellipsis  bg-gradient-to-br from-pink-700 to-violet-800 bg-clip-text text-transparent ">Gamzee van den Boogaard</span>
		<p class="text-lg ">I am fullstack developer studying at alfa-college</p>
	</div>
</section>

<section class="container h-full mx-auto flex items-center">
	<div class="space-y-5">
		<p class="h1 font-bold">About me</p>
		
		<div>
			<p class="text-wrap">
				Hey there, I'm Gamzee, a 19-year-old full-stack Software Development student from 
				the Netherlands, currently honing my craft at Alfa-College.
				Beyond the classroom, I'm always on the lookout for the next tech adventure. Whether it's 
				diving headfirst into the latest frameworks, experimenting with new programming languages, or staying in 
				the loop with industry trends, I thrive on staying on the cutting edge of software development.
				But I'm not just a lone coder—I'm all about that collaborative vibe. You'll catch me contributing to open-source projects,
				where it's not just about writing code; it's a community thing. Open source is about sharing knowledge, building together, and facing real-world challenges as a team. Jumping into these projects 
				not only sharpens my coding skills but also keeps the fire burning for tackling problems together.
			</p>
			img
		</div>
	</div>
</section>

<section class="container h-full mx-auto flex items-center">
	<div class="space-y-5">
		<p class="h1 font-bold">Skills</p>
		
		<LanguageStats username="GamzeeRakoon" />
				
	</div>
</section>