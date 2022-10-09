const titleArr = [
    'Software Engineer',
    'Motivational Speaker',
    'Technical Communicator',
    'Content Creator'
]

const techArr = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'REACT'
]

const titleEl = document.querySelector('.title')
const techSkillsEl = document.querySelector('.tech-skills')


// a function that generates random array numbers btw 0-4 (lenght of the arrays)
function randNo() {
   let n =  Math.floor(Math.random() * 4)
   return  n
}

// create random titles
function randTitle() {
    let n =  titleArr[randNo()]
    return titleEl.innerHTML = `<p class="animated-title">${n}</p>`
}
setInterval(randTitle, 1000)


// create random tech
function randTech() {
    let n =  techArr[randNo()]
    return techSkillsEl.textContent = n
}
setInterval(randTech, 1000)

//create a random color and apply it to tech skills
function randColNo() {
  return  Math.floor(Math.random() * 256)
}

function randCol() {
    let color = `rgb(${randColNo()}, ${randColNo()}, ${randColNo()})`
    return  techSkillsEl.style.color = color
}
setInterval(randCol, 1000)