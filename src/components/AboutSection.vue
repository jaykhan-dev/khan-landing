<template>
  <section class="bg-black text-white flex justify-center" id="about-section">
    <div class="container my-8">
      <div class="grid lg:grid-cols-2 place-items-center">
        <!-- COL1 -->
        <div class="grid place-items-center rounded bg-fixed p-2" id="portrait">
          <img
            src="../assets/portrait-large-glow.png"
            alt=""
            class="rounded hover:invert duration-300 hover:rotate-6"
          />
        </div>
        <!-- COL2 -->
        <div class="grid place-items-center">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_51hxjnkl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
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
      gsap.set("#portrait", { scale: 0, opacity: 0 });
      gsap.to("#portrait", {
        scrollTrigger: {
          trigger: "#portrait",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        scale: 1,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
/*
#portrait {
  background-image: url("../assets/portrait-large-glow.png");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  height: 600px;
  width: 600px;
}
*/
#portrait-overlay {
  height: 600px;
  width: 600px;
}
</style>
