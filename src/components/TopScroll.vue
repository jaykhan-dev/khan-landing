<template>
  <section class="bg-black overflow-hidden truncate ...">
    <h1
      class="my-20 text-gray-800 uppercase text-8xl font-bold"
      id="top-scroll"
    >
      Features - Tune in - Turn on - Make some noize - Disrupt the status quo -
      Reimagine the future
    </h1>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  //FEATURES
  gsap.set("#top-scroll", { opacity: 0, x: 0 });
  gsap.to("#top-scroll", {
    scrollTrigger: {
      trigger: "#top-scroll",
      scrub: 1,
      start: "top bottom",
      end: "top top",
    },
    x: -2000,
    opacity: 1,
    ease: "none",
    duration: 3,
  });
});
</script>
