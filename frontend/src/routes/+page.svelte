<script>
  import SecondaryGrid from "../components/secondaryGrid.svelte";

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

<div class="">
  <SecondaryGrid news={news}/>
</div>
