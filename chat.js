// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKhI8qr8zI5xrNMMSTwOg2HwXFZqQ9LXg",
    authDomain: "lets-chat-54edd.firebaseapp.com",
    databaseURL: "https://lets-chat-54edd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-54edd",
    storageBucket: "lets-chat-54edd.appspot.com",
    messagingSenderId: "208012962328",
    appId: "1:208012962328:web:b3b81e654a0b23fa04b16d",
    measurementId: "G-E2BKNXR936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}

