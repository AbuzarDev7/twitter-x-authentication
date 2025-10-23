import {createUserWithEmailAndPassword } from "//www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {auth} from "./config.js"

const form = document.querySelector("#form");
const email = document.querySelector("#inpEmail");
const password = document.querySelector("#inpPassword");
form.addEventListener("submit" ,(eve)=>{
eve.preventDefault();
// const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
console.log(user);
window.location = "login.html"
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
console.log(errorMessage); 
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "already acount regestered!",
  footer: '<a href="#">Why do I have this issue?</a>'
});

  });
})