<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
    FooterBar,
  },
  metaInfo: {
    title: "Jay Khan Portfolio",
  },
};
</script>

<template>
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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
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
