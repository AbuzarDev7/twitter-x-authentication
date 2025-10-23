import { getAuth, createUserWithEmailAndPassword } from "//www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


const form = document.querySelector("#form");
const email = document.querySelector("#inpEmail");
const password = document.querySelector("#inpPassword");
form.addEventListener("submit" ,(eve)=>{
eve.preventDefault();
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})