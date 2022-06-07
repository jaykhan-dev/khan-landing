<template>
  <section class="bg-black text-white flex justify-center py-20">
    <div
      class="lg:w-1/2 grid lg:grid-cols-4 grid-cols-2 gap-4 py-20"
      id="tech-stack"
    >
      <!-- COL -->
      <div class="grid place-items-center">
        <img src="../assets/vue.svg" alt="vue js logo" width="100" />
        <p class="text-sm uppercase font-bold my-4">Vue js</p>
      </div>
      <!-- COL -->
      <div class="grid place-items-center">
        <img src="../assets/tailwind.svg" alt="vue js logo" width="100" />
        <p class="text-sm uppercase font-bold my-4">Tailwind css</p>
      </div>
      <!-- COL -->
      <div class="grid place-items-center">
        <img src="../assets/adobe.svg" alt="vue js logo" width="100" />
        <p class="text-sm uppercase font-bold my-4">Adobe CC</p>
      </div>
      <!-- COL -->
      <div class="grid place-items-center">
        <img src="../assets/figma.svg" alt="vue js logo" width="50" />
        <p class="text-sm uppercase font-bold my-4">Figma</p>
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
      gsap.set("#tech-stack", { y: 100, opacity: 0 });
      gsap.to("#tech-stack", {
        scrollTrigger: {
          trigger: "#tech-stack",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        y: 0,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>
