<template>
  <section class="bg-black text-white flex justify-center">
    <div class="container">
      <div class="grid lg:grid-cols-2 place-items-center mb-20">
        <!-- COL -->
        <div class="grid p-4" id="goals-text">
          <h2 class="uppercase font-bold">Goals and Aspirations</h2>
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
                with regards to our data. I use blockchain for my music projects
                and to help clients adapt to the changing times.
              </p>
            </div>
            <!-- -->
            <div class="">
              <h2 class="lg:text-2xl text-2xl my-2">Design process</h2>
              <p class="text-gray-500">
                In order to solve a problem, first understand the user, find a
                theme, develop the concept, create a prototype and finally test
                it extensively.
              </p>
            </div>
            <!-- -->
            <div class="">
              <h2 class="lg:text-2xl text-2xl my-2">Remote work</h2>
              <p class="text-gray-500">
                Working remotely is beneficial to the environment and helps with
                creative endeavours.
              </p>
            </div>
          </div>
        </div>
        <!-- COL -->
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
      gsap.set("#goals-text", { x: -1000, opacity: 0 });
      gsap.to("#goals-text", {
        scrollTrigger: {
          trigger: "#goals-text",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        x: 1,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style></style>
