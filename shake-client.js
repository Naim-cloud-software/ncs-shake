import { initializeApp } from "https://gstatic.com";
import { getDatabase, ref, onValue } from "https://gstatic.com";

// Gekoppeld aan jouw database link
const firebaseConfig = { databaseURL: "https://firebaseio.com" };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// CSS toevoegen die het schudden regelt
const style = document.createElement('style');
style.textContent = `@keyframes s {0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)}} .shaking {animation: s 0.2s infinite;}`;
document.head.appendChild(style);

// Luister live naar jouw database
onValue(ref(db, 'status/shake'), (snapshot) => {
  if (snapshot.val() === true) {
    document.body.classList.add('shaking');
  } else {
    document.body.classList.remove('shaking');
  }
});
