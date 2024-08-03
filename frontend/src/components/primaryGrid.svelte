<script>
    import GridCard from './gridCard.svelte'
  import Heading from './heading.svelte';
  import HeadlineGridCard from './HeadlineGridCard.svelte';
  import Paragraphtext from './paragraphtext.svelte';
    export let children

    const news = [
      {
        id:1,
        title:'title',
        description:'descriptions'
      }
    ]
  </script>


<div class="h-full duration-500 gap-10 grid grid-cols-3 gap-0 pt-0.5 pb-0.5 dark:bg-gray-500">
  <div class="col-span-3 lg:col-span-1">
    <div class="flex flex-col h-full w-full gap-10">
    <Heading/>
    <Paragraphtext content="Bringing you the top headlines from all over the world."/>
    </div>
  </div>
  <div class="col-span-3 lg:col-span-2">
    <div class="bg-black aspect-[6/4] h-full w-full"></div>
  </div>
  </div>