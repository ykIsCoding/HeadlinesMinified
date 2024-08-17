<script>
  import Heading from "../components/heading.svelte";
  import PrimaryGrid from "../components/primaryGrid.svelte";
  import SecondaryGrid from "../components/secondaryGrid.svelte";
  import GridCard from "../components/gridCard.svelte";
  import { onMount } from "svelte";
  import getNews from "../services/newsService";

  /**
   * @type {string | any[]}
   */
  let news = [];

  onMount(() => {
    getNews().then((res) => {
      if (res.status == "pass") {
        news = res.data;
      }
    });
  });
</script>

<div class="w-full p-2 sm:p-10">
  <div class="sm:p-5 m-2 sm:ml-12 sm:mr-12">
    <PrimaryGrid
      imageurl={news.length > 0 ? news[0].urlToImage : ""}
      headlineTitle={news.length > 0 ? news[0].title : ""}
    ></PrimaryGrid>
    <div class="h-20"></div>
    <SecondaryGrid news={news.slice(1, news.length)}></SecondaryGrid>
  </div>
</div>
