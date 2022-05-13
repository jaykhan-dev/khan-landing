<template>
  <section class="flex justify-center bg-black text-white">
    <div class="container w-full">
      <div class="grid place-items-center my-20 w-full">
        <div
          class="grid place-items-center lg:grid-cols-2 lg:w-1/4 gap-4 mt-20 justify-center items-center"
        >
          <div
            class="contra-hire-me-button"
            data-analyticsUserId="8aeb570f-50a4-4fc8-af9d-8cbf5859e0bc"
            data-theme="dark"
            data-username="jkhan_design"
          ></div>
          <div>
            <a
              href="https://www.upwork.com/freelancers/~014489ba7a4c22b2bf?viewMode=1"
            >
              <button
                class="p-2 px-4 bg-green-600 rounded-xl hover:bg-green-700 duration-300"
              >
                Hire on UpWork
              </button>
            </a>
          </div>
        </div>
        <img src="../assets/fire-3.gif" alt="" width="500" class="" />

        <div
          class="grid lg:grid-cols-4 gap-4 justify-items-center p-4 lg:text-left text-center"
        >
          <!-- COL -->
          <div class="grid place-items-center">
            <img src="../assets/jk-logo-white.svg" alt="" width="200" />
          </div>
          <!-- COL -->
          <div class="flex flex-col space-y-4">
            <h2 class="font-bold text-2xl text-blue-600">Work</h2>
            <a href="https://jkhan.netlify.app/work/uiux">UI/UX</a>
            <a href="https://jkhan.netlify.app/work/blockchain">Blockchain</a>
            <a href="https://jkhan.netlify.app/work/graphics">Graphics</a>
            <a href="https://jkhan.netlify.app/work/resume">Resume</a>
            <a href="https://jkhan.netlify.app/work/tech-stack">Tech Stack</a>
          </div>
          <!-- COL -->
          <div class="flex flex-col space-y-4">
            <h2 class="font-bold text-2xl text-blue-600">Blog</h2>
            <a href="https://jkhan.netlify.app/blog/blockchain">Blockchain</a>
            <a href="https://jkhan.netlify.app/blog/programming">Programming</a>
            <a href="https://jkhan.netlify.app/blog/">Art</a>
            <a href="https://jkhan.netlify.app/blog/life">Life</a>
          </div>
          <!-- COL -->
          <div class="flex flex-col space-y-4">
            <h2 class="font-bold text-2xl text-blue-600">Music</h2>
            <a
              href="https://music-endeavr.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              >Endeavr</a
            >
            <a
              href="https://soundcloud.com/mixbase-cloud"
              target="_blank"
              rel="noopener noreferrer"
              >Soundcloud</a
            >
            <a href="https://jkhan.netlify.app/music">Documentation</a>
          </div>
        </div>
        <div
          class="lg:flex justify-between p-4 border-t border-gray-800 mt-8 lg:w-full"
        >
          <a href="mailto:jaykhan.sound@gmail.com">
            <p class="font-bold text-center">jaykhan.sound@gmail.com</p>
          </a>
          <div class="space-x-4 text-2xl flex justify-center">
            <a href="https://github.com/jaykhan-dev">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/jaykhan_sound">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com/melange.labs">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/jkhanprofile">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let contra = document.createElement("script");
    contra.setAttribute("src", "https://contra.com/static/embed/sdk.js");
    document.head.appendChild(contra);
  },
};
</script>

<style>
a:hover {
  color: deepskyblue;
}
</style>
