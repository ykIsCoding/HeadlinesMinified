<script>
    /*keep*/

  import Logo from "./logo.svelte";

    </script>
  
  <div class="p-0 h-full w-48 flex flex-col min-h-screen border-r-4 border-beige-3" aria-label="Sidebar">
    <div class="p-5 flex flex-row justify-center content-center">
      <a class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href="#" aria-label="Brand">
        <Logo/>
      </a>
    </div>
    <nav class="hs-accordion-group p-2 w-full flex flex-col flex-wrap h-full content-center justify-evenly" data-hs-accordion-always-open>
      <ul class="space-y-3.5">
        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white" href="#">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Dashboard
          </a>
        </li>
        <li>
            <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-xl text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white" href="#">
              <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Dashboard
            </a>
          </li>
        
      </ul>

    </nav>
    <div class="bg-beige-4">
        hi
      </div>
  </div>