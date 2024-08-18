<script>
  import '../app.css'
  import Sidebar from "../components/sidebar.svelte";
</script>
<div class="bg-beige-1 dark:bg-gray-900 w-full h-full flex flex-row min-h-screen max-h-screen duration-500 overflow-y-hidden no-scrollbar">
  <div class="flex">
    <Sidebar/>
  </div>
<slot></slot>
</div>