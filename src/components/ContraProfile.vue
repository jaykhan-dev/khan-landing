<template>
  <section class="bg-zinc-900 text-orange-100 py-20" id="services">
    <div
      class="grid place-items-center text-center py-20 bg-zinc-900 text-orange-100"
    >
      <h1 class="lg:text-8xl text-4xl lg:w-2/4">
        I'm a designer based in Canada. I create user interfaces and digital
        assets.
      </h1>
      <div class="grid lg:grid-cols-3 gap-4 my-8">
        <!-- COL -->
        <a href="https://jkhan.netlify.app/work/uiux">
          <div
            class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
          >
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_cuvw9mtg.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style="width: 200px; height: 200px"
            ></lottie-player>
            <p class="my-4">UI/UX</p>
          </div>
        </a>
        <!-- COL -->
        <a href="https://jkhan.netlify.app/work/blockchain">
          <div
            class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
          >
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_k0o4rppb.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style="width: 200px; height: 200px"
            ></lottie-player>
            <p class="my-4">Blockchain</p>
          </div>
        </a>
        <!-- COL -->
        <a href="https://jkhan.netlify.app/work/graphics">
          <div
            class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
          >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_p2sacysm.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style="width: 200px; height: 200px"
            ></lottie-player>
            <p class="my-4">Graphics</p>
          </div>
        </a>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="lg:w-3/4 p-2 grid lg:grid-cols-2 gap-4 place-items-center">
        <!-- COl -->
        <div id="about" class="relative">
          <div class="py-20" id="freelance">
            <h3 class="font-bold uppercase my-4">Services</h3>
            <h2 class="lg:text-6xl text-4xl font-bold my-4">Freelance</h2>

            <ul class="text-xl space-y-4">
              <li class="text-gray-600 hover:text-white duration-300">
                Frontend development
              </li>
              <li class="text-gray-600 hover:text-white duration-300">
                UI/UX design
              </li>
              <li class="text-gray-600 hover:text-white duration-300">
                Graphic design
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
        </div>
        <!-- COL -->
        <div>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_51hxjnkl.json"
            background="transparent"
            speed="0.7"
            loop
            autoplay
            class="opacity-50 z-10"
          ></lottie-player>
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
