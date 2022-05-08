<template>
  <section class="flex justify-center bg-black text-white py-20 p-2">
    <div class="container p-4 border border-gray-900 rounded-3xl" id="carousel">
      <h2 class="uppercase font-bold my-4 text-center">Featured Projects</h2>
      <Splide
        :options="{ rewind: true }"
        aria-label="My Favorite Images"
        class=""
      >
        <SplideSlide
          class="grid place-items-center lg:grid-cols-2 p-4 slider-height"
        >
          <img
            src="../assets/appreci.png"
            alt="Appreci"
            width="500"
            height="500"
          />
          <div>
            <div class="">
              <h2 class="lg:text-4xl text-2xl font-bold my-2">Appreci</h2>
              <p class="lg:w-3/4">
                Landing page for an Australian company that helps teams built
                rapport and trust by showing appreciation through gifts
              </p>
            </div>
            <a
              href="https://appreci.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="p-2 px-4 rounded-full border bg-sky-500 hover:bg-black duration-300 my-8"
              >
                See Project
              </button>
            </a>
          </div>
        </SplideSlide>
        <SplideSlide
          class="grid place-items-center lg:grid-cols-2 p-4 slider-height"
        >
          <img
            src="../assets/melange.png"
            alt="Sample 2"
            width="500"
            height="500"
          />
          <div>
            <div class="">
              <h2 class="lg:text-4xl text-2xl font-bold my-2">Melange Labs</h2>
              <p class="lg:w-3/4">
                Blockchain project for web3 e-commerce using stablecoins like
                USDT and USDC
              </p>
            </div>
            <a
              href="https://melangelabs.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="p-2 px-4 rounded-full border bg-sky-500 hover:bg-black duration-300 my-8"
              >
                See Project
              </button>
            </a>
          </div>
        </SplideSlide>
        <SplideSlide
          class="grid place-items-center lg:grid-cols-2 p-4 slider-height"
        >
          <img
            src="../assets/endeavr.png"
            alt="Sample 2"
            width="500"
            height="500"
          />
          <div>
            <div class="">
              <h2 class="lg:text-4xl text-2xl font-bold my-2">Endeavr</h2>
              <p class="lg:w-3/4">
                Music NFTs on Algorand with other features like voting and
                collaboration
              </p>
            </div>
            <a
              href="https://music-endeavr.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="p-2 px-4 rounded-full border bg-sky-500 hover:bg-black duration-300 my-8"
              >
                See Project
              </button>
            </a>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
import "@splidejs/vue-splide/css";
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    onMounted(() => {
      //IMAGE
      gsap.set("#carousel", { scale: 0, opacity: 0 });
      gsap.to("#carousel", {
        scrollTrigger: {
          trigger: "#carousel",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        scale: 1,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
.slider-height {
  height: 600px;
}
</style>
