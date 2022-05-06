<template>
  <section id="mountain-section" class="bg-fixed">
    <div class="bg-black absolute w-full z-40" id="mountain-cover"></div>
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
      gsap.set("#mountain-cover", { x: 0 });
      gsap.to("#mountain-cover", {
        scrollTrigger: {
          trigger: "#mountain-cover",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        x: -2000,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
#mountain-section {
  background-image: url("../assets/himalayas.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
}
#mountain-cover {
  height: 500px;
}
</style>
