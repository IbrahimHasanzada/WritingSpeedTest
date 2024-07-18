fetch("https://raw.githubusercontent.com/IbrahimHasanzada/StarbucksGiftCard_json/main/quotes.json")
  .then(res => res.json())
  .then(data => {
    writeTest(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

let img = ["turtle-preview.png", "rabbit-preview.png", "cartoon-tiger-png.webp"]
let txt = ["You're typing at the leisurely pace of a snail.", "You're typing with the speed and agility of a rabbit!", "You're as swift as a comet blazing through the night sky."]

const deyer = document.querySelector("#deyer");
const stil = document.getElementById("stil");
const trueWords = document.getElementById("true");
const second = document.getElementById("second");
const timeMicSec = document.getElementById('timemicsec');
const timeSec = document.getElementById('timesec');
const timeMin = document.getElementById('timemin');
const btn = document.querySelectorAll(".btn")
let kod = '';
let letter = '';
let resultPoint = ''
let x = 0;
let y = 15;
let count = 0;
let intervalStarted = false;
let interval;
second.innerHTML = y;

timeMicSec.onclick = () => {
  for (let i = 0; i < btn.length; i++) btn[i].classList.remove("addBtn")
  timeMicSec.classList.add("addBtn")
  if (!intervalStarted) {
    y = 15;
    second.innerHTML = y;
  }
};
timeSec.onclick = () => {
  for (let i = 0; i < btn.length; i++) btn[i].classList.remove("addBtn")
  timeSec.classList.add("addBtn")
  if (!intervalStarted) {
    y = 30;
    second.innerHTML = y;
  }
};
timeMin.onclick = () => {
  for (let i = 0; i < btn.length; i++) btn[i].classList.remove("addBtn")
  timeMin.classList.add("addBtn")
  if (!intervalStarted) {
    y = 60;
    second.innerHTML = y;
  }
};

console.log(img);
//  G E T   D A T A 
function writeTest(arr) {
  const shuffledQuotes = [...arr];
  shuffle(shuffledQuotes);
  shuffledQuotes.map(item => kod += item + ' ');
  deyer.innerHTML = kod;
}

//  S H U F F L E   Q U O T E S 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//  C H E C K   P R E S S   K E Y S
function checkFunction(e) {
  // S T A R T   W R I T I N G   T E S T 
  if (!intervalStarted) {
    intervalStarted = true;
    interval = setInterval(() => {
      y--
      second.innerHTML = y;
      item(y)
    }, 1000);
  }
  

  //  W R I T I N G   C O N T R O L  
  if (e.key === kod[0]) {
    (kod[0] === ' ') ? x++ : 
    (x <= 15) ? count = 0 : (x <= 30) ? count = 1 : count = 2
    trueWords.innerHTML = 'Correct words: ' + x
    kod = kod.substring(1);
    deyer.innerHTML = `<span style="color:#646669;">${kod[0]}</span>${kod.slice(1)}`;
  } else {
    deyer.innerHTML = `<span style="color:#E2B714;">${kod[0]}</span>${kod.slice(1)}`;
    stil.classList.add('move-animation');
    setTimeout(() => { stil.classList.remove('move-animation') }, 300);
  }
}
window.addEventListener('keypress', checkFunction);

  //  T I M E   O U T   C O N T R O L
function item(y) {
  if (y === 0) {
    clearInterval(interval)
    window.removeEventListener('keypress', checkFunction)
    //  O U T   O F   T I M E   R E S U L T S   
    stil.innerHTML = `
        <div id="result">
                    <div id="image">
                        <img src="img/${img[count]}" alt="">
                    </div>
                    <h2>${txt[count]}</h2>
                </div>`
              }
}
item()