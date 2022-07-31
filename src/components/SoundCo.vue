<template>
  <section id="" class="bg-zinc-900 text-orange-100">
    <div class="grid place-items-center p-2">
      <div class="grid lg:grid-cols-2 gap-8 my-20 lg:w-1/2">
        <!-- COL -->
        <div class="" id="coin">
          <lottie-player
            src="https://assets10.lottiefiles.com/datafiles/TK6e5afd6uo1kv4/data.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="opacity-80 lg:-translate-y-20"
          ></lottie-player>
        </div>
        <!-- COL -->
        <div class="" id="bitcoin-text">
          <h2 class="uppercase font-bold">Blockchain</h2>
          <h2 class="text-6xl font-bold my-4">Bitcoin</h2>
          <p class="">
            The internet is becoming more decentralized and P2P is a much more
            efficient way of doing business. The new generation of apps are
            being built with blockchain technology.
          </p>
          <div class="flex space-x-4 items-center my-4">
            <a href="https://songbookapp.pages.dev">
              <button
                class="p-2 rounded px-4 bg-gradient-to-r from-blue-500 to-purple-500 my-8 hover:bg-black duration-300 hover:scale-95 border w-full"
              >
                SongBook
              </button>
            </a>
            <a href="https://melange.pages.dev">
              <button
                class="p-2 rounded px-4 bg-gradient-to-r from-blue-500 to-purple-500 my-8 hover:bg-black duration-300 hover:scale-95 border w-full"
              >
                Melange
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TroisJS from "./TroisJS.vue";
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);
export default {
  components: {
    TroisJS,
  },
  setup() {
    onMounted(() => {
      //Bitcoin TEST
      gsap.set("#bitcoin-text", { x: 200, opacity: 0 });
      gsap.to("#bitcoin-text", {
        scrollTrigger: {
          trigger: "#bitcoin-text",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        x: 0,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //COIN
      gsap.set("#coin", { scale: 0.5 });
      gsap.to("#coin", {
        scrollTrigger: {
          trigger: "#coin",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        scale: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style></style>
