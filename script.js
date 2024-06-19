

const deyer = document.querySelector("#deyer");
const stil = document.getElementById("stil");
const trueWords = document.getElementById("true");
const second = document.getElementById("second");

fetch("https://raw.githubusercontent.com/mirafgan/PerfectJson/main/quote.json")
  .then(res => res.json())
  .then(data => {
    writeTest(data)
    a()
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })


let kod = ''
function writeTest(arr) {
  arr.quotes.map((item, i) => {
    kod += item.quote
    deyer.innerHTML = kod
  })
}
 let x = 0
 let y = 30
 function a() {
   const newFunction = (e) => {
     if (e.key === kod[0]) {
       if(kod[0] === ' '){
         x++
        }
        trueWords.innerHTML = x
        kod = kod.substring(1);
        deyer.innerHTML = kod;
      } else if(e.key != `Tab` && e.key != "CapsLock" ) {
        stil.classList.add('move-animation');
        setTimeout(() => {
          stil.classList.remove('move-animation');
        }, 300)
      }
      
    }
    
    window.addEventListener('keyup', newFunction)
    
    
    const interval =  setInterval( () => {
      y--
      if (y <= 0) {
        clearInterval(interval)
        window.removeEventListener('keyup', newFunction) 
      }
      second.innerHTML = y
    }, 1000)

}

