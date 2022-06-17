<template>
  <section class="bg-zinc-900 bg-fixed text-orange-100" id="hero-section">
    <div
      class="grid place-items-center bg-gradient-to-b from-zinc-900/90 to-zinc-900"
      v-motion-fade
      :delay="500"
    >
      <div class="my-20">
        <h1 class="large-text">Jay Khan</h1>
        <h1 class="lg:text-5xl text-center">Portfolio</h1>
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
      <img
        src="../assets/jk-logo-white.svg"
        alt=""
        id="jk-logo"
        v-motion-fade
        :delay="600"
      />
    </div>
  </section>
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
      //IMAGE
      gsap.set("#jk-logo", { scale: 0 });
      gsap.to("#jk-logo", {
        scrollTrigger: {
          trigger: "#jk-logo",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        scale: 1,

        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
#hero-section {
  background-image: url("../assets/blue-painting.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.large-text {
  font-size: 18vw;
}
</style>
