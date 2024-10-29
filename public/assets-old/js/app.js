import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyA7Mj1AXlE1fWDx__0mz2B1SIDBBk62VvA",
    authDomain: "sushant-uk.firebaseapp.com",
    projectId: "sushant-uk",
    storageBucket: "sushant-uk.appspot.com",
    messagingSenderId: "893673404658",
    appId: "1:893673404658:web:03ec54671346102252786b"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const menu = document.getElementById('menu')
const close = document.getElementById('close')
const nav = document.getElementById('home-mob-nav-ul')
const exit = document.getElementById('mobile-nav-exit')

const contactForm = document.getElementById('contactForm')
const formSubmit = document.getElementById('contactFormSubmit')
const formOut = document.getElementById('formResponse')

//preloader

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
})

menu.addEventListener('click', () => {
    menu.style.display = 'none';
    close.style.display = 'flex';
    nav.style.display = 'flex';
    exit.style.display = 'flex';
})

close.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'none';
    nav.style.display = 'none';
    exit.style.display = 'none';
})

exit.addEventListener('click', () => {
    menu.style.display = 'flex';
    close.style.display = 'none';
    nav.style.display = 'none';
    exit.style.display = 'none';
})

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if(!fname || !lname || !email || !message){
        console.log(fname,lname,email,message)
        formOut.style.color = 'red'
        formOut.innerHTML = 'Please fill all the required fields!!!'
    } else {
        // console.log(fname,lname,email,message)
        var d = new Date(Date.now());
        d.toString()

        try {
            const docRef = addDoc(collection(db, "sushant-uk-contact-form"), {
                fname: fname,
                lname: lname,
                email: email,
                message: message,
                time: d,
            });
            var submitted = true;
          } catch (e) {
            console.error("Error adding document!");
          }

        formOut.style.color = 'green'
        formOut.innerHTML = 'Message Sent Sucessfully!'
        contactForm.reset()
    }
})