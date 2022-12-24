// app.js

// Konfigurační objekt pro knihovnu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYqEissBfmc_n0wWZ49VI9304iEMCE2L0",
  authDomain: "the-cube-4fd89.firebaseapp.com",
  databaseURL: "https://the-cube-4fd89-default-rtdb.firebaseio.com",
  projectId: "the-cube-4fd89",
  storageBucket: "the-cube-4fd89.appspot.com",
  messagingSenderId: "300500457511",
  appId: "1:300500457511:web:bfa70c4e670f90526e5602"
};
  
  // Inicializace knihovny Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Získání přihlašovacích údajů z formuláře
  var submit = document.getElementById("submit");
  
  // Obsluha odeslání formuláře
  submit.addEventListener("click", (e) => {
    var nickname = document.getElementById("nickname").value;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    e.preventDefault(); // Zabrání odeslání formuláře
  
    // Přihlášení uživatele pomocí knihovny Firebase

    firebase.database().ref("nicknames").push({
      nickname: nickname
    });

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {

        // Úprava přezdívky úspěšná
        alert("Account created successfully");
        // ...
        })
        .catch((error) => {
        // Vytvoření účtu se nezdařilo
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        });
      });
  
      
