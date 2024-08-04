<script>
  import Heading from "../components/heading.svelte";
  import PrimaryGrid from "../components/primaryGrid.svelte";
  import SecondaryGrid from "../components/secondaryGrid.svelte";
  import GridCard from "../components/gridCard.svelte";
  import { onMount } from "svelte";
  import getNews from "../services/newsService";

	let news = []

	onMount(()=>{
		getNews().then(res=>{
			
			if(res.status=='pass'){
				console.log(res)
				news = res.data
				console.log(news)
			}
		})
	})

  
</script>
<div class="w-full p-2 sm:p-10">
	<div class="sm:p-5 m-2 sm:ml-12 sm:mr-12">
<PrimaryGrid news={news[0]}></PrimaryGrid>
<div class="h-20">

</div>
<SecondaryGrid news={news.slice(1,news.length)}>
</SecondaryGrid>
	</div>
</div>