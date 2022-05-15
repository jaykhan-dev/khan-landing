<template>
  <section id="quote-section" class="bg-fixed">
    <div
      class="flex justify-center items-center bg-black bg-opacity-70 overflow-hidden truncate ..."
    >
      <h1
        class="text-white text-opacity-20 uppercase text-8xl font-bold my-20"
        id="words"
      >
        simplicity | patience | compassion | empathy | creativity | Music |
        Blockchain | art | travel | web3 | vue js | frontend | design |
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
      x: -2000,
      ease: "none",
      duration: 3,
    });
  },
};
</script>
<style>
#quote-section {
  background-image: url("../assets/steppe.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
