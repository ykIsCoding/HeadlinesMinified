<script>
  import { onMount } from 'svelte';
    import GridCard from './gridCard.svelte'
  import Heading from './heading.svelte';
  import HeadlineGridCard from './HeadlineGridCard.svelte';
  import Paragraphtext from './paragraphtext.svelte';
    
    export let imageurl
    export let headlineTitle
  </script>


<div class="h-full duration-500 gap-10 grid grid-cols-3 gap-0 pt-0.5 pb-0.5 dark:bg-gray-500">
  <div class="col-span-3 lg:col-span-1">
    <div class="flex flex-col h-full w-full gap-10">
    <Heading/>
    <Paragraphtext content="Bringing you the top headlines from all over the world."/>
    </div>
  </div>
  <div class="col-span-3 lg:col-span-2">
    {#if imageurl!=''}
      <img src={imageurl} class="object-cover aspect-[6/4] w-full h-full"/>
      {:else}
      <div class="object-cover bg-beige-2 aspect-[6/4] w-full h-full">
        <h5 class=" text-md xl:text-2xl font-bold font-body tracking-wider">{headlineTitle}</h5>
      </div>
    {/if}
    </div>
  </div>