<template>
  <section
    class="bg-zinc-900 text-orange-100 flex justify-center py-20 relative"
  >
    <div class="lg:w-1/2 grid lg:grid-cols-4 grid-cols-2 gap-4 py-20">
      <!-- COL -->
      <div class="grid place-items-center" id="vue">
        <div class="scale-150 text-center">
          <img src="../assets/vue.svg" alt="vue js logo" width="100" />
          <p class="text-sm uppercase font-bold my-4">Vue js</p>
        </div>
      </div>
      <!-- COL -->
      <div class="grid place-items-center" id="tailwind">
        <div class="text-center scale-95">
          <img src="../assets/tailwind.svg" alt="vue js logo" width="100" />
          <p class="text-sm uppercase font-bold my-4">Tailwind css</p>
        </div>
      </div>
      <!-- COL -->
      <div class="grid place-items-center" id="adobe">
        <div class="text-center scale-110">
          <img src="../assets/adobe.svg" alt="vue js logo" width="100" />
          <p class="text-sm uppercase font-bold my-4">Adobe CC</p>
        </div>
      </div>
      <!-- COL -->
      <div class="grid place-items-center" id="figma">
        <div class="text-center scale-75">
          <img src="../assets/figma.svg" alt="vue js logo" width="50" />
          <p class="text-sm uppercase font-bold my-4">Figma</p>
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
      gsap.set("#vue", { y: 30, opacity: 0, scale: 1 });
      gsap.to("#vue", {
        scrollTrigger: {
          trigger: "#vue",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -400,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //IMAGE
      gsap.set("#tailwind", { y: 20, opacity: 0 });
      gsap.to("#tailwind", {
        scrollTrigger: {
          trigger: "#tailwind",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -10,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //IMAGE
      gsap.set("#adobe", { y: 10, opacity: 0, scale: 1 });
      gsap.to("#adobe", {
        scrollTrigger: {
          trigger: "#adobe",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -200,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //IMAGE
      gsap.set("#figma", { y: 15, opacity: 0 });
      gsap.to("#figma", {
        scrollTrigger: {
          trigger: "#figma",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -100,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //IMAGE
      gsap.set("#guitar-graphic", { y: 0 });
      gsap.to("#guitar-graphic", {
        scrollTrigger: {
          trigger: "#guitar-graphic",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -200,

        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>
