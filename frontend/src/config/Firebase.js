import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlfEvmQTjJrnDbIh14i7aXQNdawvmBcr0",
  authDomain: "mern-book-store-80479.firebaseapp.com",
  projectId: "mern-book-store-80479",
  storageBucket: "mern-book-store-80479.appspot.com",
  messagingSenderId: "824877929703",
  appId: "1:824877929703:web:0ecb76335968d61b8cfe42",
  measurementId: "G-P8TSY7HX1N"
};

export const app = initializeApp(firebaseConfig);
