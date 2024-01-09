
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCiLsCqIeQzUhmU0t2nVPTWxAcUJbvOMfY",
      authDomain: "meetup-57306.firebaseapp.com",
      databaseURL: "https://meetup-57306-default-rtdb.firebaseio.com",
      projectId: "meetup-57306",
      storageBucket: "meetup-57306.appspot.com",
      messagingSenderId: "46781486177",
      appId: "1:46781486177:web:af992ef1673b38e3ad0620",
      measurementId: "G-TKJNRQGLHK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.GetElemetnById("output").innerHTML;
      //End code
      });});}
getData();

      function redirectToRoomName()
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "MeetUp_chat.html";
      }
      function logout() {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location = "kwitter.html";


      }
function addroom() 
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
         
      localStorage.setItem("room_name", room_name);

      window.location = "MeetUp_page.html";
}