<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import InspirationalQuote from "../components/InspirationalQuote.vue";
import ContraProfile from "../components/ContraProfile.vue";
import TechStack from "../components/TechStack.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    ContraProfile,
    AboutSection,
    InspirationalQuote,
    TechStack,
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
    <TechStack />
    <AboutSection />
  </main>
</template>
