//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
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
getData();
