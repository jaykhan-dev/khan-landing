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
                  with regards to our data. I use blockchain for my music
                  projects and to help clients adapt to the changing times.
                </p>
              </div>
              <!-- -->
              <div class="">
                <h2 class="lg:text-2xl text-2xl my-2">Design process</h2>
                <p class="text-gray-500">
                  In order to solve a problem, first understand the user, find a
                  theme, develop the concept, create a prototype and finally
                  test it extensively.
                </p>
              </div>
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
          end: "top 75",
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
