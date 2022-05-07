<template>
  <section class="bg-black overflow-hidden truncate ... py-8">
    <h1
      class="uppercase text-8xl text-gray-700 font-bold my-20"
      id="bottom-scroll"
    >
      Music - Blockchain - art - travel - web3 - vue js - frontend - design -
    </h1>
    <div class="grid place-items-center py-20">
      <img
        src="../assets/khaan-calligraphy.svg"
        alt="Khan of Khans"
        width="100"
        class="opacity-10 m-8"
        id="khan-calligraphy"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  //Khan of Khans
  gsap.set("#khan-calligraphy", { opacity: 0, scale: 2 });
  gsap.to("#khan-calligraphy", {
    scrollTrigger: {
      trigger: "#khan-calligraphy",
      scrub: 1,
      start: "top center",
      end: "top 75",
    },
    scale: 1,
    opacity: 0.5,
    ease: "none",
    duration: 3,
  });
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
