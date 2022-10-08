const titleEl = document.querySelector('.title')
const techEl = document.querySelector('.tech')


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

// a function that generates random array numbers
function randNo() {
   let n =  Math.floor(Math.random() * 4)
   return  n
}

// create random titles
function randTitle() {
    return titleArr[randNo()]
}

function role() {
  return  titleEl.innerHTML = `<p class ="title-child">${randTitle()}</p>`
}
setInterval(role, 1000)


// create random tech
function randTech() {
    return techArr[randNo()]
}

function techRole() {
    return techEl.innerHTML = `<p>The technologies I teach are 
    <span class="tech-skills">${randTech()}</span></p>`
 
}

setInterval(techRole, 1000)