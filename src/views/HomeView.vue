<script>
import HeroSection from "../components/HeroSection.vue";

import ScrollingText from "../components/ScrollingText.vue";
import ContraProfile from "../components/ContraProfile.vue";
import TechStack from "../components/TechStack.vue";
import SoundCo from "../components/SoundCo.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ContraProfile,

    ScrollingText,
    TechStack,
    SoundCo,
  },
  metaInfo: {
    title: "Jay Khan",
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <ScrollingText />
    <ContraProfile />
    <TechStack />
    <SoundCo />
  </main>
</template>
