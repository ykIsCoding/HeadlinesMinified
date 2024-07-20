<script>
    import GridCard from './gridCard.svelte'

    const news = [
      {
        id:1,
        title:'title',
        description:'descriptions'
      },
      {
        id:2,
        title:'title',
        description:'descriptions'
      },
      {
        id:3,
        title:'title',
        description:'descriptions'
      },
      {
        id:4,
        title:'title',
        description:'descriptions'
      },
      {
        id:5,
        title:'title',
        description:'descriptions'
      },
      {
        id:6,
        title:'title',
        description:'descriptions'
      },
      {
        id:7,
        title:'title',
        description:'descriptions'
      },
      {
        id:8,
        title:'title',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites'
      }

    ]
  </script>


<div class="h-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-0 bg-beige-3 pt-0.5 pb-0.5">
    {#each news as article (article.id)}
      <GridCard {...article}/>
    {/each}
  </div>