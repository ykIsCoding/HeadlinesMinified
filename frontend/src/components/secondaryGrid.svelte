<script>
    export let news
  </script>


<div class="h-full w-full overflow-y-scroll no-scrollbar gap-1 xl:gap-10 grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 pt-0.5 pb-0.5 dark:bg-gray-500 duration-500">
    {#each news as article (article.id)}
      <div></div>
    {/each}
  </div>