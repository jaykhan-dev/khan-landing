<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import InspirationalQuote from "../components/InspirationalQuote.vue";
import ContraProfile from "../components/ContraProfile.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ContraProfile,
    AboutSection,
    InspirationalQuote,
  },
  metaInfo: {
    title: "Jay Khan home page",
  },
};
</script>

<template>
  <main>
    <HeroSection />
    <InspirationalQuote />
    <ContraProfile />
    <AboutSection />
  </main>
</template>
