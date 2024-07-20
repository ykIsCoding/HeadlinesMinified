<script>
    import { onMount } from "svelte";
    import { typingTransition } from "../transitions/typingTransition";
    import { goto } from '$app/navigation';
  import Button from "./button.svelte";
  
      export let title="loading title..."
      export let description = "loading description..."
      export let id
  
      let i =-1
      onMount(()=>{
          i += 1;
          i %= description.length;
      })

      const handleClick = () =>{
        goto(`/article/${id}`)
      }
  </script>
    <div on:click={handleClick} class="col-span-3 bg-beige-5 mt-0.5 mb-0.5 mr-0.5"></div>
    <div class="col-span-1 aspect-[5/6] p-5">
    <h5 class="mb-2 text-3xl font-bold font-display  tracking-wider">{title}</h5>
      {#key i}
      <p in:typingTransition={{ speed: 5 }} class="font-body w-5/6">{description.slice(0,100) || ''}</p>
      {/key}
    </div>