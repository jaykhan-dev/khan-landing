<script setup>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
//import HimalayanMountains from "../components/HimalayanMountains.vue";

import TwitterEmbed from "../components/TwitterEmbed.vue";
import InspirationalQuote from "../components/InspirationalQuote.vue";
import ContraProfile from "../components/ContraProfile.vue";
</script>

<template>
  <main>
    <HeroSection />
    <InspirationalQuote />

    <AboutSection />

    <ContraProfile />
    <TwitterEmbed />
  </main>
</template>
