<script>
    import GridCard from './gridCard.svelte'
  import HeadlineGridCard from './HeadlineGridCard.svelte';
    export let children

    const news = [
      {
        id:1,
        title:'title',
        description:'descriptions'
      }
    ]
  </script>


<div class="h-full grid grid-cols-4 gap-0 bg-beige-3 pt-0.5 pb-0.5">
    <HeadlineGridCard {...news[0]}/>
  </div>