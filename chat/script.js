// Konfigurační objekt pro knihovnu Firebase
var config = {
    apiKey: "AIzaSyCYqEissBfmc_n0wWZ49VI9304iEMCE2L0",
    authDomain: "the-cube-4fd89.firebaseapp.com",
    databaseURL: "https://the-cube-4fd89-default-rtdb.firebaseio.com/",
    projectId: "the-cube-4fd89",
    storageBucket: "the-cube-4fd89.appspot.com",
    messagingSenderId: "300500457511",
    appId: "1:300500457511:web:bfa70c4e670f90526e5602"
  };
  
  // Inicializace knihovny Firebase
  firebase.initializeApp(config);
  const nicknamesRef = firebase.database().ref("nicknames");
  
  // Získání formuláře pro odeslání zprávy
  var form = document.getElementById("form");
  var timestamp = Date.now();
  var user = firebase.auth().currentUser;
  
  // Obsluha odeslání formuláře
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Zabrání odeslání formuláře
  
    // Získání údajů z formuláře
    var message = document.getElementById("message").value;
  
    // Uložení zprávy do databáze
    firebase.database().ref("messages").push({
      message: message,
      sender: firebase.auth().currentUser.uid
    });
  
    // Vyčištění formuláře
    form.reset();
  });
  
  // Získání seznamu zpráv
  var messages = document.getElementById("messages");
  
  // Sledování změn v databázi
  firebase.database().ref("messages").on("value", (snapshot) => {
    // Smazání předchozích zpráv
    messages.innerHTML = "";
  
    // Získání aktuálních zpráv z databáze
    var data = snapshot.val();
    for (var key in data) {
      var li = document.createElement("li");
      li.innerText = data[key].message;
      li.innerText = `${snapshot.val().nickname}: ${data[key].message}`;
      messages.appendChild(li);
    }
  });
  
