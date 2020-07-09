import { writable } from 'svelte/store';

export const activePackage = writable(0);


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
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export const analytics = firebase.analytics();


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


export const questions = {
    "1001": {
        "1": {
            one: {
                text: "Nod5lo na9raw w njibo A",
                clicks: 958
            },
            two: {
                text: "Nel3abo belote",
                clicks: 600
            }
        },
        "2": {
            one: {
                text: "nor9do",
                clicks: 958
            },
            two: {
                text: "neklo kaskrout",
                clicks: 600
            }
        }
    },
    "1002": {
        "1": {
            one: {
                text: "buy a car",
                clicks: 9571
            },
            two: {
                text: "buy a bike",
                clicks: 3598
            }
        },
        "2": {
            one: {
                text: "go to tunisia",
                clicks: 958
            },
            two: {
                text: "go to america",
                clicks: 600
            }
        }
    },
    "1003": {
        "1": {
            one: {
                text: "boy",
                clicks: 751
            },
            two: {
                text: "girl",
                clicks: 369
            }
        },
        "2": {
            one: {
                text: "yes we are here",
                clicks: 958
            },
            two: {
                text: "no we are not",
                clicks: 600
            }
        },
        "3": {
            one: {
                text: "league of legends",
                clicks: 958
            },
            two: {
                text: "dota 2",
                clicks: 600
            }
        }

    }

}