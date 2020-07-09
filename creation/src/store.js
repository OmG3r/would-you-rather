import { writable } from 'svelte/store';

var firebaseConfig = {
    apiKey: "AIzaSyCosNRqZEJ9_FUmGfa6PIsXIMqJGopZDQA",
    authDomain: "would-your-rather.firebaseapp.com",
    databaseURL: "https://would-your-rather.firebaseio.com",
    projectId: "would-your-rather",
    storageBucket: "would-your-rather.appspot.com",
    messagingSenderId: "100928772304",
    appId: "1:100928772304:web:5b2ae8b4376514c08fe6d5",
    measurementId: "G-8T2965MRJS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const user = writable(undefined)