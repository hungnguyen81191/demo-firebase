// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM4fHCNPpHxoaSaj8YsAAXjLZ-nV2GW-E",
  authDomain: "upload-images-demo.firebaseapp.com",
  projectId: "upload-images-demo",
  storageBucket: "upload-images-demo.appspot.com",
  messagingSenderId: "303839484154",
  appId: "1:303839484154:web:b25fa817614aa4dce09143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const imagesRef = ref(storage, "images");
export { storage, imagesRef };
