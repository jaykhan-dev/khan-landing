<template>
  <section class="bg-zinc-900 flex justify-center py-28" id="about-section">
    <div class="container skew" id="3d-scene">
      <div class="grid place-items-center my-20" id="portrait">
        <img src="../assets/portrait-large-glow.png" alt="" class="rounded" />
        <img src="../assets/portrait-large-glow.png" alt="" class="rounded" />
        <img src="../assets/portrait-large-glow.png" alt="" class="rounded" />
        <img src="../assets/portrait-large-glow.png" alt="" class="rounded" />
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
      gsap.set("#portrait", { opacity: 0 });
      gsap.to("#portrait", {
        scrollTrigger: {
          trigger: "#portrait",
          scrub: 1,
          start: "top bottom",
          end: "top 75",
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
#portrait-overlay {
  height: 600px;
  width: 600px;
}

.skew {
  position: relative;
  width: 440px;
  height: 180px;
  margin-top: 150px;

  transform: rotate(-30deg) skew(25deg) scale(0.8);
  transition: 0.5s;
}
.skew img {
  position: absolute;
  width: 100%;
  transition: 0.5s;
}

.skew:hover img:nth-child(4) {
  transform: translate(160px, -160px);
  opacity: 1;
}
.skew:hover img:nth-child(3) {
  transform: translate(120px, -120px);
  opacity: 0.8;
}
.skew:hover img:nth-child(2) {
  transform: translate(80px, -80px);
  opacity: 0.6;
}
.skew:hover img:nth-child(1) {
  transform: translate(40px, -40px);
  opacity: 0.4;
}
</style>
