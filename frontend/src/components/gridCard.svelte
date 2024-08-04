<script>
  import { onMount } from "svelte";
  import { typingTransition } from "../transitions/typingTransition";

   
    export let articleData
    const {title,description} = articleData

    let i =-1
    onMount(()=>{
        i += 1;
        console.log(articleData)
        
       // i %= description.length;
    })
</script>
<div class="justify-center content-center flex flex-row items-center">
<a href="#" class="flex flex-col content-between bg-beige-3 aspect-square w-full h-full p-10 m-0.5 flex flex-col text-brown-1 justify-between hover:bg-beige-4 hover:text-beige-1 ease-in duration-500 dark:bg-gray-800 dark:text-beige-2 dark:hover:bg-gray-900 dark:hover:text-beige-1">
    <h5 class="h-1/2 text-balance truncate text-ellipsis line-clamp-8 text-md xl:text-2xl font-bold font-body tracking-wider">{title}</h5>
    {#key i}
    {#if description!=null}
      <p in:typingTransition={{ speed: 5 }} class="font-body h-1/4  line-clamp-6 text-sm xl:text-md w-full text-justify p-0 md:pl-10 lg:pl-20">{ description.slice(0,100) || ''}</p>
      {/if}
    {/key}
    </a>
  </div>