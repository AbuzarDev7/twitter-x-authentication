
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
 import { getAuth } from "//www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyDSlLQfHEyAUoTXe25DVgQzvg--5LR2CGI",
    authDomain: "authentication-twitter-x.firebaseapp.com",
    projectId: "authentication-twitter-x",
    storageBucket: "authentication-twitter-x.firebasestorage.app",
    messagingSenderId: "254252389671",
    appId: "1:254252389671:web:9735eab6cc1c0c1a488502",
    measurementId: "G-1C7B5F6N6W"
  };

 
   export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app)

