const mainEl = document.querySelector('main')
const childEl = document.querySelectorAll('.child')
 const parentEl = document.querySelectorAll('.parent')


//create a function which generates a random rgb number
function randomNum(number) {
      return Math.floor(Math.random() * (number+1));
     }
    
// create a rgb random colors with the randomNum function
function randomColor() {
     const rndCol = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;

       return rndCol;
    }

// apply the random colors to the main element background and set to 1s interval
function changeMainColor() {
        mainEl.style.background = randomColor();
        mainEl.style.fontSize = randFont()

      }
      setInterval(changeMainColor, 1000)

//loop through the childEl and give them random colors
for (const element of childEl) {

  function changeTextColor() {
   return element.style.color = randomColor()
  }

  setInterval(changeTextColor, 1000)
}

// function to generate random fonts betweeen 2rem and 4rem
function randFont() {

  let n = Math.floor(Math.random() * 2) + 1
  
  let fontSize = `${n}rem`
  return fontSize
}

function changeMainFont() {
 return  mainEl.style.fontSize = randFont()
}
setInterval(changeMainFont, 1000)
