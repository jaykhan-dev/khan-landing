<template>
  <section id="quote-section" class="bg-fixed">
    <div
      class="flex justify-center items-center bg-black bg-opacity-20 mix-blend-overlay overflow-hidden truncate ..."
    >
      <h1
        class="text-white text-opacity-20 uppercase text-8xl font-bold my-20"
        id="words"
      >
        simplicity | art | blockchain | empathy | creativity | Music |
        Blockchain | strategy | travel | web3 | vue js | frontend | design |
      </h1>
    </div>
  </section>
</template>

<script>
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    //WORDS
    gsap.set("#words", { x: 0 });
    gsap.to("#words", {
      scrollTrigger: {
        trigger: "#words",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      x: 2000,
      ease: "none",
      duration: 3,
    });
  },
};
</script>
<style>
#quote-section {
  background-image: url("../assets/kashmir-backyard-100.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
