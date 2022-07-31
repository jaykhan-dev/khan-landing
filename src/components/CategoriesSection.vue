<template>
  <section class="bg-zinc-900 text-orange-100 py-20" id="services">
    <div
      class="grid place-items-center text-center py-20 bg-zinc-900 text-orange-100 p-2"
    >
      <h2 class="lg:text-8xl text-4xl lg:w-2/4 font-bold" id="about-text">
        I'm a designer based in Canada. I create user interfaces and digital
        assets.
      </h2>
    </div>
    <div class="flex justify-center">
      <div class="lg:w-1/2 p-2 grid lg:grid-cols-2 gap-4 place-items-center">
        <!-- COl -->
        <div id="" class="grid place-items-end">
          <div class="py-20" id="">
            <h3 class="font-bold uppercase my-4">Services</h3>
            <h2 class="text-6xl font-bold my-4">Design</h2>
            <p class="">
              The most important ingredients for a good user experience and
              aesthetics is simplicity and empathy
            </p>

            <div class="flex space-x-4 my-4">
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
        </div>
        <!-- COL -->
        <div>
          <div class="grid lg:grid-cols-3 gap-4 my-8" id="categories">
            <!-- COL -->
            <a href="https://jaykhan.live/work/uiux/intro">
              <div
                class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
              >
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_cuvw9mtg.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style="width: 100px; height: 100px"
                ></lottie-player>
                <p class="my-4">UI/UX</p>
              </div>
            </a>
            <!-- COL -->
            <a href="https://jaykhan.live/work/blockchain/intro">
              <div
                class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
              >
                <lottie-player
                  src="https://assets5.lottiefiles.com/packages/lf20_k0o4rppb.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style="width: 100px; height: 100px"
                ></lottie-player>
                <p class="my-4">Blockchain</p>
              </div>
            </a>
            <!-- COL -->
            <a href="https://jaykhan.live/work/graphic-design/intro">
              <div
                class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
              >
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_p2sacysm.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style="width: 100px; height: 100px"
                ></lottie-player>
                <p class="my-4">Graphics</p>
              </div>
            </a>
          </div>
          <!-- <ThreeBox /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import ThreeBox from "../components/ThreeBox.vue";
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    //ThreeBox,
  },
  setup() {
    onMounted(() => {
      //external js file import
      const plugin = document.createElement("script");
      plugin.setAttribute("src", "/src/three/box.js");
      document.head.appendChild(plugin);
      //IMAGE
      gsap.set("#freelance", { x: -500, opacity: 0 });
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
      gsap.set("#about-text", { y: 0, opacity: 0 });
      gsap.to("#about-text", {
        scrollTrigger: {
          trigger: "#about-text",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -100,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //Categories
      gsap.set("#categories", { y: 0, opacity: 0 });
      gsap.to("#categories", {
        scrollTrigger: {
          trigger: "#categories",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -20,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style></style>
