<template>
  <section class="bg-black overflow-hidden truncate ...">
    <h1
      class="uppercase text-8xl text-gray-700 font-bold my-20"
      id="bottom-scroll"
    >
      Ecosystem - DAPPS - Community - DAO - DeFi - Decentralized - Borderless
      Economy -
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
  //ECOSYSTEM
  gsap.set("#bottom-scroll", { opacity: 0, x: -2000 });
  gsap.to("#bottom-scroll", {
    scrollTrigger: {
      trigger: "#bottom-scroll",
      scrub: 1,
      start: "top bottom",
      end: "top top",
    },
    x: 0,
    opacity: 1,
    ease: "none",
    duration: 3,
  });
});
</script>
