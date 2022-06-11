<template>
  <section class="bg-black text-white flex justify-center" id="about-section">
    <div class="container my-8">
      <div class="grid place-items-center">
        <!-- COL1 -->
        <div class="grid place-items-center rounded bg-fixed p-2" id="portrait">
          <img
            src="../assets/portrait-large-glow.png"
            alt=""
            class="rounded duration-300 scale-50"
          />
        </div>
        <!-- COL2
        <div class="grid place-items-center">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_51hxjnkl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        -->
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
          start: "top center",
          end: "top 75",
        },

        opacity: 1,
        ease: "none",
        duration: 3,
      });
      // PORTRAIT 3d HOVER
      let el = document.getElementById("portrait");

      const height = el.clientHeight;
      const width = el.clientWidth;

      el.addEventListener("mousemove", handleMove);

      function handleMove(e) {
        const xVal = e.layerX;
        const yVal = e.layerY;

        const yRotation = 5 * ((xVal - width / 2) / width);
        const xRotation = -5 * ((yVal - height / 2) / height);
        const string =
          "perspective(100px) scale(1.1) rotateX(" +
          xRotation +
          "deg) rotateY(" +
          yRotation +
          "deg)";

        el.style.transform = string;
      }

      el.addEventListener("mouseout", function () {
        el.style.transform =
          "perspective(100px) scale(1) rotateX(0) rotateY(0)";
      });

      el.addEventListener("mousedown", function () {
        el.style.transform =
          "perspective(100px) scale(0.9) rotateX(0) rotateY(0)";
      });

      el.addEventListener("mouseup", function () {
        el.style.transform =
          "perspective(100px) scale(1.1) rotateX(0) rotateY(0)";
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
</style>
