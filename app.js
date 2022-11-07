// //lets grab the day, hours, secs, and mins
const day = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// // so let get currentYear and newYear
let currentYear = new Date().getFullYear();
// console.log(currentYear);
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
console.log(newYear);

// update the countdown
function updateTimer() {
  const currentTimer = new Date();
  const diffInYear = newYear - currentTimer;
  const d = Math.floor(diffInYear / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diffInYear / 1000 / 60 / 60) % 24;
  const m = Math.floor(diffInYear / 1000 / 60) % 60;
  const s = Math.floor(diffInYear / 1000) % 60;
  // this will be the actual time
  day.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}

updateTimer();
setInterval(updateTimer, 1000);
