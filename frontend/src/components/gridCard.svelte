<script>
  import { onMount } from "svelte";
  import { typingTransition } from "../transitions/typingTransition";

    export let title="loading title..."
    export let description = "loading description..."
    export let id

    let i =-1
    onMount(()=>{
        i += 1;
        i %= description.length;
    })
</script>
<a href="#" class="block bg-beige-1 aspect-[5/6] p-5 m-0.5 flex flex-col text-brown-1 justify-between hover:bg-beige-4 hover:text-beige-1 ease-in duration-500">
    <h5 class="mb-2 text-3xl font-bold tracking-tight">{title}</h5>
    {#key i}
    <p in:typingTransition={{ speed: 5 }} class="font-normal w-5/6">{description.slice(0,100) || ''}</p>
    {/key}
    </a>
    