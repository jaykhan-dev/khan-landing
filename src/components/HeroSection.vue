<template>
  <section class="bg-black text-white bg-fixed" id="hero-section">
    <div
      class="grid place-items-center lg:h-screen bg-gradient-to-b from-blue-900/80 to-black"
    >
      <div class="grid place-items-center">
        <img
          src="../assets/horse-head.svg"
          alt=""
          width="100"
          class="opacity-10 mt-20"
          v-motion-fade
          :delay="700"
        />
        <h1 class="lg:text-8xl text-6xl font-bold my-8" v-motion-slide-right>
          J. Khan
        </h1>

        <p
          class="text-2xl p-4 leading-8 lg:w-1/2 text-center text-gray-600"
          v-motion-slide-left
        >
          Welcome to my portfolio. To see my work please go to the following
          pages:
        </p>
        <div class="grid lg:grid-cols-3 gap-4 my-8">
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/uiux">
            <div
              v-motion-roll-bottom
              :delay="300"
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <i class="fa-solid fa-object-group text-8xl"></i>
              <p class="my-4">UI/UX</p>
            </div>
          </a>
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/blockchain">
            <div
              v-motion-roll-bottom
              :delay="400"
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <i class="fa-solid fa-cubes text-8xl"></i>
              <p class="my-4">Blockchain</p>
            </div>
          </a>
          <!-- COL -->
          <a href="https://jkhan.netlify.app/work/graphics">
            <div
              v-motion-roll-bottom
              :delay="500"
              class="grid place-items-center p-4 px-4 rounded border border-gray-700 hover:border-gray-200 duration-300 hover:scale-95"
            >
              <i class="fa-solid fa-bezier-curve text-8xl"></i>
              <p class="my-4">Graphics</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
#hero-section {
  background-image: url("../assets/northern-lights-smooth-transition.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
