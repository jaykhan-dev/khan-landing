<template>
  <section class="bg-zinc-900 text-orange-100 flex justify-center py-20">
    <div class="relative grid place-items-center lg:w-1/2">
      <div class="h-64 absolute top-0 right-0 w-64 z-20 blur-sm" id="box-back">
        <img src="../assets/astronaut.svg" alt="" />
      </div>
      <!-- GRID -->
      <div
        id="tech-stack-grid"
        class="z-30 lg:w-2/3 grid lg:grid-cols-3 grid-cols-2 gap-4 py-10 border border-gray-800 p-4 rounded-xl bg-black/30 backdrop-blur-md"
      >
        <!-- COL -->
        <div class="grid place-items-center" id="vue">
          <div class="text-center">
            <img src="../assets/vue.svg" alt="vue js logo" width="80" />
            <p class="text-sm uppercase font-bold my-4">Vue js</p>
          </div>
        </div>
        <!-- COL -->
        <div class="grid place-items-center" id="tailwind">
          <div class="text-center">
            <img src="../assets/tailwind.svg" alt="vue js logo" width="100" />
            <p class="text-sm uppercase font-bold my-4">Tailwind css</p>
          </div>
        </div>
        <!-- COL -->
        <div class="grid place-items-center" id="adobe">
          <div class="text-center">
            <img src="../assets/adobe.svg" alt="vue js logo" width="80" />
            <p class="text-sm uppercase font-bold my-4">Adobe CC</p>
          </div>
        </div>
        <!-- COL -->
        <div class="grid place-items-center" id="figma">
          <div class="text-center">
            <img src="../assets/figma.svg" alt="vue js logo" width="50" />
            <p class="text-sm uppercase font-bold my-4">Figma</p>
          </div>
        </div>
        <!-- COL -->
        <div class="grid place-items-center" id="django">
          <img
            src="../assets/django.png"
            alt="bass clef graphic"
            class=""
            width="80"
          />
          <p class="text-sm uppercase font-bold my-4">django</p>
        </div>
      </div>
      <!-- PARALLAX BOX -->
      <div
        class="h-64 lg:absolute bottom-0 left-0 blur-md opacity-80 w-64 z-40"
        id="box-front"
      >
        <img src="../assets/cat-moon.svg" alt="" />
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
      // BOX BACK
      gsap.set("#box-back", { y: 0 });
      gsap.to("#box-back", {
        scrollTrigger: {
          trigger: "#box-back",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -100,
        ease: "none",
        duration: 3,
      });
      //TECH GRID
      gsap.set("#tech-stack-grid", { scale: 0.9, y: 0 });
      gsap.to("#tech-stack-grid", {
        scrollTrigger: {
          trigger: "#tech-stack-grid",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: 20,
        scale: 1,
        ease: "none",
        duration: 3,
      });
      //BOX FRONT
      gsap.set("#box-front", { y: 100 });
      gsap.to("#box-front", {
        scrollTrigger: {
          trigger: "#box-front",
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
