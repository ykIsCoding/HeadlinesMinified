<script>
  import Footer from "../components/footer.svelte";
  import Navbar from "../components/navbar.svelte"
  import '../app.css'
</script>
<div class="bg-beige-1 dark:bg-gray-900 w-full h-full flex flex-col min-h-screen duration-500">
<Navbar/>
<div class="flex flex-col grow">
<slot></slot>
</div>
<Footer/>
</div>