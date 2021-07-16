var firebaseConfig = {
    apiKey: "AIzaSyBng6bLQzfmmchjGki4g5QN6D8n_kmdZpw",
    authDomain: "c-93-a2955.firebaseapp.com",
    projectId: "c-93-a2955",
    storageBucket: "c-93-a2955.appspot.com",
    messagingSenderId: "385839867903",
    appId: "1:385839867903:web:34e594e4c2b97d64c5e9ca",
    measurementId: "G-JX4MS5CGFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}