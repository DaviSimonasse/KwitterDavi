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

userName = localStorage.getItem("user");

document.getElementById("userName").innerHTML =
  "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/rooms").child(roomName).update({
    purpose: "adicionar nome de sala",
  });

  localStorage.setItem("roomName", roomName);

  // window.location = "kwitterPage.html";
}

function getData() {
  firebase
    .database()
    .ref("/rooms")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        roomNames = childKey;
        console.log("Nome da Sala - " + roomNames);
        row =
          "<div class='roomName' id=" +
          roomNames +
          " onclick='redirectToRoomName(this.id)' >#" +
          roomNames +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
