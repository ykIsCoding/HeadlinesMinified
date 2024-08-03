<script>
  import Heading from "../components/heading.svelte";
  import PrimaryGrid from "../components/primaryGrid.svelte";
  import SecondaryGrid from "../components/secondaryGrid.svelte";
  import GridCard from "../components/gridCard.svelte";

	let news = []

	async function getNews() {
		const response = await fetch('/api/news', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

		news = await response.json();
	}

  
</script>

{news}
<div class="w-full p-2 sm:p-10">
	<div class="sm:p-5 m-2 sm:ml-12 sm:mr-12">
<PrimaryGrid></PrimaryGrid>
<div class="h-20">

</div>
<SecondaryGrid>
</SecondaryGrid>
	</div>
</div>