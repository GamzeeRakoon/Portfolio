import { load } from 'svelte/server';

export async function load({ fetch }) {
  const GITHUB_API_TOKEN = process.env.VITE_GITHUB_API_TOKEN; // Access the token securely

  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });
  const data = await response.json();

  // Perform any calculations using the data
  const processedData = {
    // ... processed data logic
  };

  return {
    props: {
      userData: processedData,
    },
  };
}
