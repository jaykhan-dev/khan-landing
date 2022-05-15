<template>
  <section class="bg-black text-white flex justify-center" id="about-section">
    <div class="container my-8">
      <div class="grid lg:grid-cols-2 place-items-center">
        <!-- COL1 -->
        <div class="grid place-items-center rounded bg-fixed p-2" id="portrait">
          <img src="../assets/portrait-large-glow.png" alt="" class="rounded" />
        </div>
        <!-- COL2 -->
        <div id="about" class="grid justify-items-center">
          <div
            class="backdrop-blur-xl py-20 p-8 bg-black bg-opacity-70"
            id="about-text"
          >
            <h2 class="uppercase font-bold my-4">About</h2>
            <h2 class="lg:text-6xl text-4xl font-bold">
              Creative visual <br />designer
            </h2>
            <p class="leading-8 lg:w-3/4 my-12">
              Design is my expertise. I have worked in several different mediums
              like web, video, print, and social media. I am currently focused
              on web3.
              <br />
            </p>
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
      gsap.set("#portrait", { scale: 0, opacity: 0 });
      gsap.to("#portrait", {
        scrollTrigger: {
          trigger: "#portrait",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        scale: 1,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
      //ABOUT TEXT
      gsap.set("#about-text", { x: 1000, opacity: 0 });
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
      //BLOB
      gsap.set("#about", { opacity: 0 });
      gsap.to("#about", {
        scrollTrigger: {
          trigger: "#about",
          scrub: 1,
          start: "top center",
          end: "top top",
        },
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>

<style>
/*
#portrait {
  background-image: url("../assets/portrait-large-glow.png");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  height: 600px;
  width: 600px;
}
*/
#portrait-overlay {
  height: 600px;
  width: 600px;
}

#about {
  background-image: url("../assets/blob-light-blue.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
