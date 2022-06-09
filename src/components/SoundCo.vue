<template>
  <section id="soundco-bg" class="bg-gray-900 bg-fixed">
    <div class="grid place-items-center text-white bg-black/80 py-20">
      <div class="soundco-content grid place-items-center">
        <img src="../assets/sound-logo-white.svg" alt="" class="" width="" />
        <p class="text-2xl text-center text-gray-400 lg:w-1/2">
          A suite of blockchain apps for financial freedom, affiliates,
          knowledge, and art.
        </p>
      </div>

      <div class="my-8 soundco-content">
        <div class="lg:text-4xl text-2xl text-green-500">
          <p class="font-mono">def sound:</p>
          <div class="flex">
            <p class="ml-8">apps = [</p>
            <div class="ml-2 flex flex-col">
              <a
                href="https://soundbit.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono"
                >'Sound Bit'</a
              >
              <a
                href="https://soundmoney.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono"
                >'Sound Money</a
              >
              <a
                href="https://soundendeavr.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono"
                >'Sound Endeavr'</a
              >
              <a class="-translate-x-3">]</a>
            </div>
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
      //IMAGE
      gsap.set(".soundco-content", { y: 100, opacity: 0 });
      gsap.to(".soundco-content", {
        scrollTrigger: {
          trigger: ".soundco-content",
          scrub: 1,
          start: "top bottom",
          end: "top top",
        },
        y: -50,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
#soundco-bg {
  background-image: url("../assets/tech-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
