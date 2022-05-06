<template>
  <section class="flex justify-center bg-black text-white">
    <div class="container">
      <div class="grid place-items-center my-20">
        <img
          src="../assets/khaan-calligraphy.svg"
          alt=""
          width="100"
          class="opacity-20"
        />
      </div>
      <div class="grid lg:grid-cols-4 gap-4 justify-items-center p-4">
        <!-- COL -->
        <div class="grid place-items-center">
          <img src="../assets/jk-logo-white.svg" alt="" width="200" />
        </div>
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <h2 class="font-bold text-2xl">Work</h2>
          <a href="https://jkhan.live/work/uiux">UI/UX</a>
          <a href="https://jkhan.live/work/blockchain">Blockchain</a>
          <a href="https://jkhan.live/work/graphics">Graphics</a>
          <a href="https://jkhan.live/work/resume">Resume</a>
          <a href="https://jkhan.live/work/tech-stack">Tech Stack</a>
        </div>
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <h2 class="font-bold text-2xl">Blog</h2>
          <a href="https://jkhan.live/work/uiux">Blockchain</a>
          <a href="https://jkhan.live/work/blockchain">Programming</a>
          <a href="https://jkhan.live/work/graphics">Art</a>
          <a href="https://jkhan.live/work/resume">Life</a>
        </div>
        <!-- COL -->
        <div class="flex flex-col space-y-4">
          <h2 class="font-bold text-2xl">Music</h2>
          <a href="https://jkhan.live/work/uiux">Endeavr</a>
          <a href="https://jkhan.live/work/blockchain">Soundcloud</a>
          <a href="https://jkhan.live/work/graphics">Documentation</a>
        </div>
      </div>
      <div class="flex justify-between p-4 border-t border-gray-800 mt-8">
        <p class="font-bold">Built with Vue</p>
        <div class="space-x-4 text-2xl">
          <a href="https://github.com/jaykhan-dev" class="hover:text-blue-600">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/jaykhan_sound">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://instagram.com/melange.labs">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
a :hover {
  color: blue;
}
</style>
