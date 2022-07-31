<template>
  <section id="" class="bg-zinc-900 text-orange-100">
    <div class="grid place-items-center p-2">
      <div class="grid lg:grid-cols-2 gap-8 my-20 py-20 lg:w-1/2">
        <!-- COL -->
        <div class="grid place-items-center">
          <lottie-player
            src="https://assets10.lottiefiles.com/datafiles/TK6e5afd6uo1kv4/data.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="opacity-80"
          ></lottie-player>
        </div>
        <!-- COL -->
        <div class="">
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
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);
export default {
  setup() {
    onMounted(() => {
      //enso dragon
      gsap.set("#", { opacity: 0, scale: 1.2, y: 0 });
      gsap.to("#", {
        scrollTrigger: {
          trigger: "#",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        scale: 1,
        opacity: 0.2,
        y: 300,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style></style>
