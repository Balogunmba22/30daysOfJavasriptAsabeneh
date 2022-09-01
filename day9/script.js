//Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//q3 Use forEach to console.log each country in the countries array.
countries.forEach((country) => {
    console.log(country)
})

// q4 Use forEach to console.log each name in the names array.
names.forEach((name) => {
    console.log(name)
})

//q5 Use forEach to console.log each number in the numbers array.
numbers.forEach((num) => {
    console.log(num)
})

//q6 Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((con) => {
    return con.toUpperCase()
})
console.log(uppercaseCountries)

//q7 Use map to create an array of countries length from countries array.
const countryLenght = countries.map((country) => {
    return country.length
})
console.log(countryLenght)

//q8 Use map to create a new array by changing each number to square in the numbers array
const squareArr = numbers.map((num) => {
    return num * num
})
console.log(squareArr)

//q9 Use map to change to each name to uppercase in the names array //same as q6

//q10 Use map to map the products array to its corresponding prices.

//q11 Use filter to filter out countries containing land.
let landcountries = countries.filter((con) => {
    return con.includes('land')
})
console.log(landcountries)

//q12 Use filter to filter out countries having six character
let sixCharCountries = countries.filter((country) => {
     if (country.length === 6)
     return country
})
console.log(sixCharCountries)

//q13 Use filter to filter out countries containing six letters and more in the country array.
let sixCharOrMore = countries.filter((country) => {
    if (country.length >= 6)
    return country
})
console.log(sixCharOrMore)

//q14 Use filter to filter out country start with 'E';
let eCountry = countries.filter((country) => {
    if (country.startsWith('E'))
    return country
})
console.log(eCountry)

// //Use filter to filter out only prices with values
// let values = products.filter((key) => {
//   let v = key.keys
//   let arrv = v.filter((p))
// })
// console.log(values)