<template>
  <nav
    class="flex justify-center fixed top-0 w-full text-orange-100 lg:mt-20 z-50"
    v-motion-fade
    :delay="1000"
  >
    <div
      class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-evenly">
        <h1 class="text-2xl">jay</h1>
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
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 md:mt-0 text-orange-100"
        @click="showMenu == !showMenu"
      >
        <a href="https://jkhan.netlify.app/work" class="nav-link">Projects</a>
        <a href="https://jkhan.netlify.app/work/resume" class="nav-link"
          >Resume</a
        >
        <a href="https://jkhan.netlify.app/blog" class="nav-link">Blog</a>
        <a href="https://jkhan.netlify.app/work/tech-stack" class="nav-link"
          >Tech</a
        >
        <!-- <a href="#services">
          <button
            class="p-2 px-4 rounded bg-white text-black hover:bg-black hover:text-white duration-300 border animate-pulse hover:scale-95"
          >
            Hire
          </button>
        </a> -->
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
.nav-link {
  text-decoration: none;
  position: relative;
}
.nav-link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  border-bottom: 2px solid;
  transition: 0.4s;
}
.nav-link:hover:after {
  width: 100%;
}
</style>
