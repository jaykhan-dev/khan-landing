<template>
  <section class="flex justify-center bg-black text-white">
    <div class="container w-full">
      <div class="grid place-items-center w-full">
        <img src="../assets/fire-3.gif" alt="" width="500" class="" />

        <div
          class="grid lg:grid-cols-3 gap-4 p-4 lg:text-left text-center"
          v-motion-fade
        >
          <!-- COL -->
          <div class="flex flex-col space-y-4 text-2xl">
            <h2 class="font-bold uppercase text-blue-600 text-sm">Work</h2>
            <a href="https://jkhan.netlify.app/work/uiux">UI/UX</a>
            <a href="https://jkhan.netlify.app/work/blockchain">Blockchain</a>
            <a href="https://jkhan.netlify.app/work/graphics">Graphics</a>
            <a href="https://jkhan.netlify.app/work/resume">Resume</a>
            <a href="https://jkhan.netlify.app/work/tech-stack">Tech Stack</a>
          </div>
          <!-- COL -->
          <div class="flex flex-col space-y-4 text-2xl">
            <h2 class="font-bold uppercase text-blue-600 text-sm">Blog</h2>
            <a href="https://jkhan.netlify.app/blog/blockchain">Blockchain</a>
            <a href="https://jkhan.netlify.app/blog/programming">Programming</a>
            <a href="https://jkhan.netlify.app/blog/">Art</a>
            <a href="https://jkhan.netlify.app/blog/life">Life</a>
          </div>
          <!-- COL -->
          <div class="flex flex-col space-y-4 text-2xl">
            <h2 class="font-bold uppercase text-blue-600 text-sm">Music</h2>
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
          class="grid place-items-center space-x-4 space-y-4 items-center lg:text-4xl p-4 mt-8 lg:w-full"
          v-motion-roll-right
        >
          <img src="../assets/jk-logo-white.svg" alt="" width="100" />
          <a href="mailto:jaykhan.sound@gmail.com">
            <p class="font-bold text-center">jaykhan.sound@gmail.com</p>
          </a>
          <div class="space-x-4 text-4xl text-blue-500 flex justify-center">
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
  <section class="bg-blue-600 text-white">
    <div>
      <Vue3Marquee class="overflow-hidden sm:w-full" id="marquee">
        <h3
          v-for="(word, index) in footerText"
          :key="index"
          :class="{
            word: true,
            odd: index % 2 === 0,
            even: index % 2 === 1,
            duration: 30,
          }"
          class="font-bold text-2xl text-white text-opacity-30 uppercase p-4"
        >
          {{ word }}
        </h3>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      footerText: [
        "There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard.",
        "Do the difficult things while they are easy and do the great things while they are small.",
        "If you're afraid - don't do it, - if you're doing it - don't be afraid!",
      ],
    };
  },
  mounted() {},
};
</script>

<style>
a:hover {
  color: deepskyblue;
}
</style>
