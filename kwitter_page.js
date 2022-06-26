//YOUR FIREBASE LINKS

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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0  
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}