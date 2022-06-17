<template>
  <section class="bg-zinc-900 text-white">
    <div>
      <Vue3Marquee class="overflow-hidden sm:w-full" id="marquee">
        <h3
          v-for="(word, index) in footerText"
          :key="index"
          :class="{
            word: true,
            odd: index % 2 === 0,
            even: index % 2 === 1,
            duration: 100,
          }"
          class="text-6xl text-opacity-10 p-4 text-orange-100"
          id="sun-tzu-quote"
        >
          {{ word }}
        </h3>
      </Vue3Marquee>
    </div>
  </section>
  <section id="footer-content" class="">
    <div
      class="grid lg:grid-cols-2 place-items-center bg-zinc-900 text-orange-100 lg:p-20"
    >
      <div class="grid content-between footer-content lg:p-0 p-8">
        <h1 class="lg:text-9xl text-6xl">Bringing ideas to life.</h1>
        <p class="lg:place-self-center my-20 lg:w-1/4">
          Feel free to reach out if you want to collaborate, hire, or just chat.
        </p>
      </div>
      <div class="grid text-right" id="footer-right-col">
        <AboutSection />
        <a href="mailto:jaykhan.sound@gmail.com">
          <h1
            class="font-bold text-center lg:text-5xl text-xl footer-link lg:mt-2 mt-8"
          >
            jaykhan.sound@gmail.com
          </h1>
        </a>
      </div>
    </div>
    <div class="lg:p-20 p-4 lg:flex justify-between bg-zinc-900 py-20">
      <div
        class="lg:space-x-8 lg:space-y-0 space-y-4 text-orange-100 lg:flex justify-center"
      >
        <a
          href="https://github.com/jaykhan-dev"
          class="flex space-x-4 items-center footer-link"
        >
          <i class="fa-brands fa-github"></i>
          <p>Github</p>
        </a>
        <a
          href="https://twitter.com/jaykhan_sound"
          class="flex space-x-4 items-center footer-link"
        >
          <i class="fa-brands fa-twitter"></i>
          <p>Twitter</p>
        </a>
        <a
          href="https://instagram.com/melange.labs"
          class="flex space-x-4 items-center footer-link"
        >
          <i class="fa-brands fa-instagram"></i>
          <p>Instagram</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jkhanprofile"
          class="flex space-x-4 items-center footer-link"
        >
          <i class="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </a>
      </div>
      <div class="text-orange-100 lg:mt-0 mt-8">
        <p>Made with Vue, Tailwind, GSAP</p>
      </div>
    </div>
  </section>
</template>

<script>
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import AboutSection from "./AboutSection.vue";
export default {
  name: "FooterBar",
  components: {
    AboutSection,
  },
  data() {
    return {
      footerText: [
        "There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard.",
      ],
    };
  },
  mounted() {
    //left
    gsap.set(".footer-content", { y: 150 });
    gsap.to(".footer-content", {
      scrollTrigger: {
        trigger: ".footer-content",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      y: 0,

      ease: "none",
      duration: 3,
    });

    //right
    gsap.set("#footer-right-col", { x: 150, opacity: 0.5 });
    gsap.to("#footer-right-col", {
      scrollTrigger: {
        trigger: "#footer-right-col",
        scrub: 1,
        start: "top bottom",
        end: "top top",
      },
      x: 0,
      opacity: 1,
      ease: "none",
      duration: 3,
    });
  },
};
</script>

<style>
#sun-tzu-quote {
  font-family: "Uncial Antiqua", cursive;
}
.footer-link {
  text-decoration: none;
  position: relative;
}
.footer-link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid;
  transition: 0.4s;
}
.footer-link:hover:after {
  width: 0%;
}
</style>
