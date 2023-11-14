// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDKhI8qr8zI5xrNMMSTwOg2HwXFZqQ9LXg",
    authDomain: "lets-chat-54edd.firebaseapp.com",
    projectId: "lets-chat-54edd",
    storageBucket: "lets-chat-54edd.appspot.com",
    messagingSenderId: "208012962328",
    appId: "1:208012962328:web:4a2bf8ad934bb16104b16d",
    measurementId: "G-6401JXDGZR"
};
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



