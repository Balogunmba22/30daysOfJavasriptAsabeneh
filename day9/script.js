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

//q1 Explain the difference between forEach, map, filter, and reduce.

//q2 Define a callback function before you use it in forEach, map, filter or reduce.

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
const prices = products.map((p) => {
    return p.price
})
console.log(prices)

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

//q15 Use filter to filter out only prices with values
let valuesPrices = products.filter((prod) => {
    return prod.price > 0
})
console.log(valuesPrices)

//q16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items
let a = ['mango', 5, 10, 'melon', 15]; // the array parameter

//creating the function which only prints out strings
const getStringLists = (arr) => {
    let stringArr = arr.filter((elements) => {
       return  typeof elements === 'string'
    })
    return stringArr
}
 console.log(getStringLists(a));

//q17 Use reduce to sum all the numbers in the numbers array
const sum = numbers.reduce((a, b) => {
     return a + b
},0)
console.log(sum)

//q18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// const concatcountries = countries.reduce((x, y) => {
// })
// console.log(concatcountries) // to be revisited

//q19 Explain the difference between some and every

//q20 Use some to check if some names' length greater than seven in names array
const s = names.some((name) => {
    return name.length > 7
})
console.log(s)

//q21 Use every to check if all the countries contain the word land
const e = countries.every((con) => {
    return con.includes('land')
})
console.log(e)

//q22 Explain the difference between find and findIndex.

//q3 Use find to find the first country containing only six letters in the countries array
let f = countries.find((country) => {
   return  country.length === 6
})
console.log(f)

//q24 Use findIndex to find the position of the first country containing only six letters in the countries array
const index = countries.findIndex((country) => {
    return  country.length === 6
 })
 console.log(index)

 //q25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1

 let indexNor = countries.findIndex((country) => {
    return  country.startsWith('Norway')
 })
 console.log(indexNor)

 //26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1
 let indexRuss = countries.findIndex((country) => {
    return  country.includes('Russia')
 })
 console.log(indexRuss)

 // LEVEL 2
//  const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]

//q1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// USING NORMAL METHOD
let validPrice = products.filter((key) => {
    if (key.price > 0) 
    return(key.price)

})
let mapPrice = validPrice.map((price) => {
    return price.price 
})
let totalprice = mapPrice.reduce((x, y) => {
    return x + y
}); // ANSWER = 27

// USING CHAINING METHOD
let totalPrice = products.filter((key) => {
        if (key.price > 0) 
     return key.price
    
 }) .map((key) => {
        return key.price 
 }) .reduce((sum, key) => {
        return sum + key
 });
console.log(totalPrice) // 27