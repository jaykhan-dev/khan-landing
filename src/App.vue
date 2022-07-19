<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import { gsap } from "gsap";

export default {
  name: "app",
  components: {
    NavBar,
    FooterBar,
  },
  metaInfo: {
    title: "Jay Khan Portfolio",
  },
  mounted() {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.35;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 0.8 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  },
};
</script>

<template>
  <div class="ball"></div>
  <NavBar />
  <FooterBar />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&family=Uncial+Antiqua&display=swap");
/*
font-family: 'Prompt', sans-serif;
font-family: 'Uncial Antiqua', cursive;
*/
body,
html {
  display: block;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
  cursor: crosshair;
}
a,
h2,
p {
  font-family: "Prompt", sans-serif;
}

h1 {
  font-family: "Uncial Antiqua", cursive;
}

.ball {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  border: 3px solid dodgerblue;
  border-radius: 50%;
  pointer-events: none;
  z-index: 50;
}

@media screen and (max-width: 480px) {
  .ball {
    opacity: 0;
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 0px;
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: blanchedalmond;
  border-radius: 0px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 208, 243);
}
</style>
