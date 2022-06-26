// Your web app's Firebase configuration

var firebaseConfig = {
      apiKey: "AIzaSyAY_zlv9STqv0H0-BmSQioBcNOG8mpnK-8",
      authDomain: "kwitter-c-2.firebaseapp.com",
      databaseURL: "https://kwitter-c-2-default-rtdb.firebaseio.com",
      projectId: "kwitter-c-2",
      storageBucket: "kwitter-c-2.appspot.com",
      messagingSenderId: "423079292361",
      appId: "1:423079292361:web:c6aa2804518882977ecc18"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
//End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
