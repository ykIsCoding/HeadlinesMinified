<script>
  import { onMount } from 'svelte';
    import GridCard from './gridCard.svelte'
    export let news
  </script>


<div class="h-full gap-10 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 pt-0.5 pb-0.5 dark:bg-gray-500 duration-500">
    {#each news as article (article.id)}
      <GridCard articleData={article}/>
    {/each}
  </div>