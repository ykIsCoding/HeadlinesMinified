<script>
  import Heading from "../components/heading.svelte";
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

  let children = GridCard
</script>

{news}
<div class="p-10 w-full">
<Heading/>
</div>
<SecondaryGrid {children}>
</SecondaryGrid>