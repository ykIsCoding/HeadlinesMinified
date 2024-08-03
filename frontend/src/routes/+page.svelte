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
			}
		})
	})

  
</script>
<div class="w-full p-2 sm:p-10">
	<div class="sm:p-5 m-2 sm:ml-12 sm:mr-12">
<PrimaryGrid></PrimaryGrid>
<div class="h-20">

</div>
<SecondaryGrid news={news}>
</SecondaryGrid>
	</div>
</div>