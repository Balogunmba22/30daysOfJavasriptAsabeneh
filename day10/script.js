//Exercises:Level 1
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country 

let mySet = new Set(); // declaring an empty set

for (let i = 0; i <= 10; i++) {
   mySet.add(i)
}
console.log(mySet) // adding elements to it through loop

mySet.delete(0) // deleting an element from the set
console.log(mySet)

mySet.clear() // clearing the set

let arr = ['mango', 'lemon', 'peach', 'orange', 'apple']

let arrSet = new Set()
// adding the strings in the array to the set using for of loop
for (const fruit of arr) {
    arrSet.add(fruit)
} console.log(arrSet)

let countriess = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countriess)
  console.log(map)
  
for (const [cont, city ] of countriess) {
    let numOfChar = cont.length
    let cityChar = city.length
    console.log(cont, numOfChar)
    console.log(city, cityChar)
}

// LEVEL 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// Find a union b
let c = [...a, ...b]

let setA = new Set(a)
let setB = new Set(b)
let setC = new Set(c)

console.log(setC)

// Find a intersection b
let A = new Set(a)
let B = new Set(b)

let cc = a.filter((num) => {
    return B.has(num)
})
let C = new Set(cc)

console.log(C)

// Find a with b
let d = a.filter((num) => {
    return !B.has(num)
})
let dd = new Set(d)
console.log(dd)