// app.js

// Konfigurační objekt pro knihovnu Firebase
var config = {
  apiKey: "AIzaSyCYqEissBfmc_n0wWZ49VI9304iEMCE2L0",
  authDomain: "the-cube-4fd89.firebaseapp.com",
  projectId: "the-cube-4fd89",
  storageBucket: "the-cube-4fd89.appspot.com",
  messagingSenderId: "300500457511",
  appId: "1:300500457511:web:bfa70c4e670f90526e5602"
};

// Inicializace knihovny Firebase
firebase.initializeApp(config);

// Získání přihlašovacích údajů z formuláře
var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");

// Obsluha odeslání formuláře
submit.addEventListener("click", (e) => {
  e.preventDefault(); // Zabrání odeslání formuláře

  // Přihlášení uživatele pomocí knihovny Firebase
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Přihlášení úspěšné
      window.location.href = "https://marosak09.github.io/chat/";
      // ...
    })
    .catch((error) => {
      // Přihlášení se nezdařilo
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("check Email and Password or create new account")
      // ...
    });
});
