<template>
  <section class="bg-black text-white bg-fixed" id="hero-section">
    <div
      class="grid place-items-center lg:h-screen bg-gradient-to-b from-black/90 to-black"
    >
      <div class="grid place-items-center">
        <!-- 
          <img
          src="../assets/horse-head.svg"
          alt=""
          width="100"
          class="opacity-10 mt-20"
        />
         -->

        <h1
          class="lg:text-8xl text-6xl font-bold mt-20"
          v-motion-fade
          :delay="500"
        >
          J. Khan
        </h1>

        <p
          class="text-2xl p-4 leading-8 lg:w-1/2 text-center text-gray-600"
          v-motion-fade
          :delay="400"
        >
          Welcome to my portfolio. To see my work please go to the following
          pages:
        </p>
        <div class="grid lg:grid-cols-3 gap-4 my-8" v-motion-fade :delay="500">
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/uiux">
            <div
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_cuvw9mtg.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style="width: 200px; height: 200px"
              ></lottie-player>
              <p class="my-4">UI/UX</p>
            </div>
          </a>
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/blockchain">
            <div
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_k0o4rppb.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style="width: 200px; height: 200px"
              ></lottie-player>
              <p class="my-4">Blockchain</p>
            </div>
          </a>
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/graphics">
            <div
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_p2sacysm.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                style="width: 200px; height: 200px"
              ></lottie-player>
              <p class="my-4">Graphics</p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_vfmyxu76.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          class="opacity-50"
          style="width: 100px; height: 100px"
        ></lottie-player>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
#hero-section {
  background-image: url("../assets/blue-painting.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
