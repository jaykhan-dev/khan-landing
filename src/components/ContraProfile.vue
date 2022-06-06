<template>
  <section class="bg-black text-white" id="services">
    <div class="flex justify-center">
      <div class="lg:w-3/4 p-2 grid lg:grid-cols-2 gap-4 place-items-center">
        <!-- COl -->
        <div id="about" class="">
          <div class="backdrop-blur-xl bg-black bg-opacity-70" id="about-text">
            <h2 class="uppercase font-bold my-4">About</h2>
            <h2
              class="lg:text-6xl text-4xl flex-warp font-bold my-4 lg:text-left"
            >
              Design and build
            </h2>
            <div class="grid grid-cols-1 gap-2 lg:w-3/4">
              <!-- -->
              <div class="">
                <h2 class="lg:text-2xl text-2xl my-2">Web3</h2>
                <p class="text-gray-500">
                  The web is evolving and bringing more autonomy into our lives
                  with regards to our data. I use blockchain for my music
                  projects and to help clients adapt to the changing times.
                </p>
              </div>
              <!-- -->
              <div class="">
                <h2 class="lg:text-2xl text-2xl my-2">Design process</h2>
                <p class="text-gray-500">
                  In order to solve a problem, I first try to understand the
                  user, find a theme, develop the concept, create a prototype
                  and then test it extensively.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- COL -->
        <div class="py-20" id="freelance">
          <h3 class="font-bold uppercase my-4">Services</h3>
          <h2 class="lg:text-6xl text-4xl font-bold my-4">Freelance</h2>

          <ul class="text-xl space-y-2">
            <li class="text-gray-600 hover:text-white duration-300">
              UI/UX Design
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              Landing Page
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              WordPress | Webflow
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              Graphic Design
            </li>
          </ul>
          <div class="grid grid-cols-2 gap-4">
            <a href="https://contra.com/jkhan_design/services" class="">
              <button
                class="p-2 rounded px-4 bg-gradient-to-r from-blue-500 to-purple-500 my-8 hover:bg-black duration-300 hover:scale-95 border w-full"
              >
                Contra | USDC
              </button>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~014489ba7a4c22b2bf?viewMode=1"
              class=""
            >
              <button
                class="p-2 rounded px-4 bg-gradient-to-r from-blue-500 to-purple-500 my-8 hover:bg-black duration-300 hover:scale-95 border w-full"
              >
                Upwork | USD
              </button>
            </a>
          </div>
        </div>

        <div class=""></div>
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
      gsap.set("#freelance", { x: 500, opacity: 0 });
      gsap.to("#freelance", {
        scrollTrigger: {
          trigger: "#freelance",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        x: 0,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
      //ABOUT TEXT
      gsap.set("#about-text", { x: -500, opacity: 0 });
      gsap.to("#about-text", {
        scrollTrigger: {
          trigger: "#about-text",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        x: 0,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style></style>
