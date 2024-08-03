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
<a href="#" class="block bg-beige-3 aspect-[5/6] p-10 m-0.5 flex flex-col text-brown-1 justify-between hover:bg-beige-4 hover:text-beige-1 ease-in duration-500 dark:bg-gray-800 dark:text-beige-2 dark:hover:bg-gray-900 dark:hover:text-beige-1">
    <h5 class="mb-2 text-3xl font-bold font-body tracking-wider">{title}</h5>
    {#key i}
    {#if description!=null}
      <p in:typingTransition={{ speed: 5 }} class="font-body w-full text-justify p-0 md:pl-10 lg:pl-20">{ description.slice(0,100) || ''}</p>
      {/if}
    {/key}
    </a>
    