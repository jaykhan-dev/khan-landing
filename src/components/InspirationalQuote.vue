<template>
  <section id="quote-section" class="bg-fixed">
    <div class="flex justify-center items-center bg-black bg-opacity-70">
      <div class="my-20 text-white grid place-items-center text-center p-2">
        <h1 class="lg:text-4xl text-2xl lg:w-1/3">
          “A man with outward courage dares to die; a man with inner courage
          dares to live.”
        </h1>
        <p class="my-8 text-2xl font-bold">Lao Tzu</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let contra = document.createElement("script");
    contra.setAttribute("src", "https://contra.com/static/embed/sdk.js");
    document.head.appendChild(contra);
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
