<template>
  <div>
    <img :src="url" alt="" />
  </div>
</template>

<script>
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseConfig";
export default {
  props: {
    path: String,
  },
  data: () => {
    return {
      url: "https://via.placeholder.com/150",
    };
  },
  mounted() {
    getDownloadURL(ref(storage, this.path)).then((download_url) => {
      this.url = download_url;
    });
  },
};
</script>

<style lang="scss" scoped></style>
