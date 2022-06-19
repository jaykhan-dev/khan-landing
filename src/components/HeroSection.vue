<template>
  <video-background
    src="https://khanquest-heroku.s3.ca-central-1.amazonaws.com/media/purple-grapes.mp4"
    style="height: 100vh"
    class=""
  >
    <section class="bg-zinc-900/50 text-orange-100 h-screen" id="hero-section">
      <div class="grid place-items-center" v-motion-slide-bottom :delay="1000">
        <div class="my-20" id="hero-content">
          <h1 class="large-text">Jay Khan</h1>
          <h2 class="lg:text-5xl text-center font-bold">Portfolio</h2>
        </div>
        <div>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_vfmyxu76.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="opacity-50"
            style="width: 100px; height: 100px"
          ></lottie-player>
        </div>
      </div>
    </section>
  </video-background>
</template>

<script>
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    onMounted(() => {
      //WORDS
      gsap.set("#hero-content", { y: 50 });
      gsap.to("#hero-content", {
        scrollTrigger: {
          trigger: "#hero-content",
          scrub: 1,
          start: "top 75",
          end: "top top",
        },
        y: 200,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
/*
#hero-section {
  background-image: url("../assets/blue-painting.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
*/

.large-text {
  font-size: 18vw;
}
</style>
