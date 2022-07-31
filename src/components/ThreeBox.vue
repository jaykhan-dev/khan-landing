<template>
  <canvas id="canvas"></canvas>
</template>

<script>
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from "three";

export default {
  name: "ThreeBox",
  data: function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#box"),
    });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      cube: cube,
      geometry: geometry,
      material: material,
    };
  },
  created: function () {
    this.scene.add(this.camera);
    this.scene.add(this.light);
    this.scene.add(this.cube);

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.light.position.set(0, 0, 10);
    this.camera.position.z = 5;
    this.scene.background = new THREE.Color("hsl(0, 100%, 100%)");

    this.controls.rotateSpeed = 1.0;
  },
  mounted: function () {
    this.document.body.appendChild(renderer.domElement);
    this.animate();
  },
  methods: {
    animate: function () {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      this.cube.rotation.y += 0.01;
      this.cube.rotation.x += 0.01;
    },
  },
  computed: {},
};
</script>
