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
export const db = firebase.firestore();
export const storage = firebase.storage()

export const user = writable(undefined)

export const itemBaseStorageLink = "https://firebasestorage.googleapis.com/v0/b/would-your-rather.appspot.com/o/"

export const generateImageUrl = (name, token) => {
    let itemPathBase = "packages/" + name
    let encode = encodeURIComponent(itemPathBase)
    if (token) {
        return itemBaseStorageLink + encode + "?alt=media&token=" + token
    } else {
        return itemBaseStorageLink + encode + "?alt=media&token="
    }

}

export const shrinkImageUrl = (link) => {

}