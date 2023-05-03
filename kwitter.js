var firebaseConfig = {
  apiKey: "AIzaSyBPjo_JOIgpXiHlks_XYojIGHHCKqZpYY4",
  authDomain: "kwitter-a0336.firebaseapp.com",
  databaseURL: "https://kwitter-a0336-default-rtdb.firebaseio.com",
  projectId: "kwitter-a0336",
  storageBucket: "kwitter-a0336.appspot.com",
  messagingSenderId: "730212696949",
  appId: "1:730212696949:web:19c27e9ff3ee1e4949893c"
};

firebase.initializeApp(firebaseConfig);

function addUser() {
  Name = document.getElementById("userName").value;
  localStorage.setItem("user",Name);
  firebase.database().ref("/users").child(Name).update({
    purpose: "adicionar nome ",
  });
  setTimeout(function() {
    window.location = "kwitterRoom.html";
  }, 3000)
  
}
