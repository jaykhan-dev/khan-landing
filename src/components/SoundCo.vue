<template>
  <section id="soundco-bg" class="bg-zinc-900">
    <div class="grid place-items-center text-white">
      <div class="soundco-content grid place-items-center">
        <img
          src="../assets/enso-dragon-white.svg"
          alt=""
          class="blur-md"
          width="350"
          id="enso-dragon"
        />
        <img
          src="../assets/sound-logo-white.svg"
          alt="Sound Logo white"
          width="300"
        />
        <p class="text-2xl text-center text-gray-400 lg:w-1/2">
          Blockchain apps. Click on the names below to see the prototypes.
        </p>
      </div>

      <div class="my-8 soundco-content">
        <div class="lg:text-4xl text-2xl text-green-500">
          <p class="font-mono">def sound:</p>
          <div class="flex">
            <p class="ml-8">apps = [</p>
            <div class="ml-2 flex flex-col">
              <a
                href="https://melange.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono hover:text-blue-500 duration-300"
                >'Melange Labs'</a
              >
              <a
                href="https://songbookapp.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono hover:text-blue-500 duration-300"
                >'SongBook'</a
              >

              <a
                href="https://soundmoney.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono hover:text-blue-500 duration-300"
                >'Sound Money</a
              >

              <a class="-translate-x-3">]</a>
            </div>
          </div>
        </div>
        <div>
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_h03e9pog.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            class="opacity-50"
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
      gsap.set(".soundco-content", { y: 20, opacity: 0 });
      gsap.to(".soundco-content", {
        scrollTrigger: {
          trigger: ".soundco-content",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -100,
        opacity: 1,
        ease: "none",
        duration: 3,
      });

      //enso dragon
      gsap.set("#enso-dragon", { opacity: 0, scale: 1.2, y: 0 });
      gsap.to("#enso-dragon", {
        scrollTrigger: {
          trigger: "#enso-dragon",
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
