<template>
  <nav
    class="flex justify-center fixed top-0 w-full shadow z-50 bg-black border-b border-gray-900 text-white"
  >
    <div
      class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-evenly">
        <img src="../assets/jk-logo-white.svg" alt="" width="40" />
        <!-- MOBILE MENU BUTTON -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-500 hover:text-orange-400 focus:outline-none focus:text-gray-900"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 md:mt-0"
        @click="showMenu == !showMenu"
      >
        <a href="https://jkhan.netlify.app/work">Projects</a>
        <a href="https://jkhan.netlify.app/work/resume">Resume</a>
        <a href="https://jkhan.netlify.app/blog">Blog</a>
        <a
          href="https://contra.com/jkhan_design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="p-2 px-4 rounded bg-white text-black hover:bg-black hover:text-white duration-300 border animate-pulse"
          >
            Hire on Contra
          </button>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~014489ba7a4c22b2bf?viewMode=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            class="p-2 px-4 bg-green-600 rounded hover:bg-black duration-300 border animate-pulse shadow-mg shadow-white"
          >
            Hire on UpWork
          </button>
        </a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  mounted() {},
};
</script>

<style>
a:hover {
  color: dodgerblue;
}
</style>
