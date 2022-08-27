//REGULAR FUNCTION WITH MULTIPLE ARGUMENTS
/*function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  console.log(sumAllNums(1, 2, 3, 4, 5)) // 15
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93 */

  //ARROW FUNCTION WITH MULTIPLE ARGUMENTS
 /* const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173 */

 // Exercises: Level 1
 //q1 Declare a function fullName and it print out your full name.
 function fullName(firstname, lastname) {
     return firstname + ' ' + lastname
 }
 console.log(fullName('muhammed', 'balogun'));

 //q2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. // (has the same answer with q1)

 //q3 Declare a function addNumbers and it takes two two parameters and it returns sum.
 function addNumbers(odd, even) {
    let sum = odd + even;
    return sum;
 } console.log(addNumbers(5, 8));

 // q4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
 function areaOfRectangle(length, width) {
     let area = length * width;
     console.log(area);
 } areaOfRectangle(8, 15); // calling the function

 //q5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = function(length, width) { // using a function expression
    let perimeter = 2 *(length + width);
    return perimeter;
} 
console.log(perimeterOfRectangle(5, 5)); 

//q6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => { //usimg arrow function
    let volume = length * width * height;
    return volume;
} 
console.log(volumeOfRectPrism(5, 6, 7)) //210

/* Alternative method using the spread syntax for representing multiple parameters
const volumeOfRectPrism = (...parameters) => {
    let volume = 1;
    for (const element of parameters) {
      product *= element
    }
    return volume
  }
console.log(sumAllNums(5, 6, 7)) */ // 210

//q7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle() { 
    let r = 5
    const area = Math.PI * r * r
    return area //function without parameters and arguments
} 
console.log(areaOfCircle())

//q8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
 const circumOfCircle = (pi, r) => {
    let circumference = 2 * pi * r;
    return circumference;
 } 
 console.log(circumOfCircle(Math.PI, 5));

 //q9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
 function density(mass, volume) {
   return mass / volume;
 }
console.log(density(10, 2))

//q10 speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(totalDistanceCovered, totalTimetTaken) {
      return totalDistanceCovered / totalTimetTaken;
}
console.log(speed(120, 3)) // LEVEL TO BE COMPLETED LATER

// LEVEL 2
//q3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for (const args of arr) {
        console.log(args)
    };
}
printArray(['orange', 'mango', 'guava']);

//q4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
const showDateTime = () => {
    const todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth();
    let date = todaysDate.getDate();
    let hours = todaysDate.getHours();
    let mins = todaysDate.getMinutes();

    let format = `${date}/${month}/${year} ${hours}:${mins}`
    return format

}
console.log(showDateTime());

//q6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArr(arr) {
    let reverse = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse;
     
} console.log(reverseArr([1, 2, 3, 4, 5]));

//q7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalizeArray = (arr) => {
    let caps = [];
    for(const item of arr) {
      caps.push(item.toUpperCase());
    }
    return caps;
  }
  console.log(capitalizeArray(['python', 'java']));

//q8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItems = (arr, item) => {
    return arr.push(item)
  }

  //q9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeItem = (arr, index) => {
    arr.splice(index, 1);
    return arr;
  }
  console.log(removeItem([5, 7, 8, 4], 2))

  //q10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0;
   for (let i = 0; i <= number; i++) {
         sum += i;
   }
   return sum;
} console.log(sumOfNumbers(100));

//q11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
    let sum = 0;
    for (i = 0; i <= number; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(100))

//q12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEvens = (number) => {
    let sum = 0;
    for (i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEvens(100))

//q14 Write a function which takes any number of arguments and return the sum of the arguments
const multipleArgs = (...args) => {
    let sum = 0
    for (const number of args) {
      sum += number;
    }
    return sum;
}
console.log(multipleArgs(5, 10, 15, 20, 35, 50))
