<template>
  <section class="bg-black text-white py-20" id="services">
    <div class="flex justify-center">
      <div class="container p-2 grid lg:grid-cols-2 gap-4">
        <!-- COL -->
        <div class="" id="freelance">
          <h3 class="font-bold uppercase my-4">Services</h3>
          <h2 class="lg:text-6xl text-4xl font-bold my-4">Freelance</h2>
          <p class="my-4 lg:w-3/5">
            To make it easier for freelancing and contract work, I've included a
            couple of platforms, Contra and Wpwork, for blockcain or fiat based
            transactions.
          </p>
          <ul class="text-2xl space-y-4">
            <li class="text-gray-600 hover:text-white duration-300">
              UI/UX Design
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              Landing Page
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              WordPress and blockchain
            </li>
            <li class="text-gray-600 hover:text-white duration-300">
              Graphic Design
            </li>
          </ul>
          <div class="grid grid-cols-2 gap-4 lg:w-1/2">
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
                UpWork | USD
              </button>
            </a>
          </div>
        </div>
        <!-- COl -->
        <div class="grid place-items-center">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_51hxjnkl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 300px; height: 300px"
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
    });
  },
};
</script>
