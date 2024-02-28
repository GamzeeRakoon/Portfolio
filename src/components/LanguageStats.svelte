<script>
    import { fetch } from 'svelte/navigation'; // Use built-in fetch function
    let languages = [];
    let error = null;
  
    async function fetchData() { // Define a function to fetch data
      const username = 'YOUR_USERNAME'; // Replace with the desired username
  
      try {
        const response = await fetch(`/api/languages/${username}`);
  
        if (!response.ok) {
          throw new Error(`Failed to fetch repos: ${response.status}`);
        }
  
        languages = await response.json();
      } catch (err) {
        error = err.message;
      }
    }
  
    fetchData(); 
  </script>
  
  <button on:click={fetchData}>Fetch Languages</button>
  
  {#if error}
    <p>Error: {error}</p>
  {:else if languages.length > 0}
    <ul>
      {#each languages as language}
        <li>{language}</li>
      {/each}
    </ul>
  {:else}
    <p>No languages found.</p>
  {/if}
  