<template>
  <!-- <CloudImageVue path="image/image.jpg"></CloudImageVue> -->
  <input type="file" ref="myfile" />
  <button @click="upload">Upload</button>
</template>

<script>
import { ref, uploadBytes } from "firebase/storage";
import { imagesRef } from "@/firebaseConfig";
// import CloudImageVue from "./components/CloudImage.vue";
export default {
  name: "App",
  components: {},
  methods: {
    upload() {
      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(imagesRef);
      uploadBytes(storageRef, this.$refs.myfile.file, metadata)
        .then((snapshot) => console.log("uploaded!" + snapshot))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
