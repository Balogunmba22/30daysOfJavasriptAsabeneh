const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  //LEVEL 1

  //q1 Iterate 0 to 10 using for loop, do the same using while and do while loop
  //using for loop:
  for (let i = 0; i <= 10; i++) {
    console.log(i);  // 0 1 2 3 4 5 6 7 8 9 10
  }
  //using while loop:
  let j = 0
  while (j <= 10) {
    console.log(j);
    j++
  }
  //using do while loop:
  let d = 0
do {
  console.log(d);
  d++
} while (d <= 10)


//q2 Iterate 10 to 0 using for loop, do the same using while and do while loop
// using for loop:
for (let i = 10; i >= 0; i--) {
    console.log(i); // 10 9 8 7 6 5 4 3 2 1 0
}
//using while loop:
let i = 10
while (i >= 0) {
  console.log(i);
  i--
}

//q3 Iterate 0 to n using for loop
let n = 5;
for (let i = 0; i <= n; i++) {
   console.log(i);
}

/*q4 Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    ####### */
     let pattern = '#'

     for (let i = 1; i <= 7; i++) {
console.log(pattern.repeat(i))
     }

/*q5 Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
for (let i = 0; i < 11; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

/*q6 Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
 for(let i = 0; i < 11; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`);
 }

 //q7 Use for loop to iterate from 0 to 100 and print only even numbers
 for(let i = 0; i < 101; i+= 2) {
    console.log(i);
 }

 //q8 Use for loop to iterate from 0 to 100 and print only odd numbers
 for(let i = 1; i < 101; i+= 2) {
    console.log(i);
 }

 //q9 Use for loop to iterate from 0 to 100 and print only prime numbers
 for (let i = 2; i <= 100; i++) {
   let prime = false;

   for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) {
         prime = true;
      }
   }
   if (prime === false) {
      console.log(i);
   }
}

 //q10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
 let sum = 0; 
 for(let i = 0; i < 101; i++) {
    sum = sum + i;
 } console.log(sum); // 5050

 //q11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//sum of evens:
let sumOfEvens = 0 ;
for(let i = 0; i < 101; i+= 2) {
    sumOfEvens += i;
 } console.log(sumOfEvens); // 2550

 //sum of odds
 let sumOfOdds = 0 ;
 for(let i = 1; i < 101; i+= 2) {
    sumOfOdds += i;
 } console.log(sumOfOdds); // 2500

 /* ALTERNATIVE METHOD
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < 101; i++) {
    i % 2 !== 1 ? evenSum += i : oddSum += i;
}
console.log(evenSum) // 2550
console.log(oddSum)*/ // 2500

 //q12 Print sum of evens and sum of odds as array
const sumArr = [];
sumArr.push(sumOfEvens, sumOfOdds);
console.log(sumArr); // [2550, 2500]

//q13 Develop a small script which generate array of 5 random numbers
let randomNums = [];
for (let i = 0; i < 5; i++) {
   randomNums.push(Math.floor(Math.random() * 100));
} console.log(randomNums)

//q14 Develop a small script which generate array of 5 random numbers and the numbers must be unique


// 15 Develop a small script which generate a six characters random id:

//LEVEL 2
/*q1: Develop a small script which generate any number of characters random id:
fe3jo1gl124g
xkqci4utda1lmbelpkm03rba*/

/*q2: Write a script which generates a random hexadecimal number.
'#ee33df'*/
let allHexCodes = '123456789abcdef';
let hexChars = [];
for(let i=0; i<6; i++) {
   hexChars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
} console.log('#' + hexChars.join(''));

/*q3: Write a script which generates a random rgb color number.
rgb(240,180,80)*/

//q4 Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newCountry = countries
.join()
.toUpperCase()
.split(',')
console.log(newCountry);
//Alt method using for of loop
let capCountries = [];
for(const country of countries) {
   capCountries.push(country.toUpperCase());
} console.log(capCountries);

//q5 Using the above countries array, create an array for countries length'.
let len = []
for (const country of countries) {
   len.push(country.length)
}console.log(len);

//q6 Use the countries array to create the following array of arrays:
 /*[
   ['Albania', 'ALB', 7],
   ['Bolivia', 'BOL', 7],
   ['Canada', 'CAN', 6],
   ['Denmark', 'DEN', 7],
   ['Ethiopia', 'ETH', 8],
   ['Finland', 'FIN', 7],
   ['Germany', 'GER', 7],
   ['Hungary', 'HUN', 7],
   ['Ireland', 'IRE', 7],
   ['Iceland', 'ICE', 7],
   ['Japan', 'JAP', 5],
   ['Kenya', 'KEN', 5]
 ]*/
let countryData = [];
for(const country of countries) {
   let len = country.length;
   let first3Chars = country.slice(0, 3).toUpperCase();
   countryData.push([country, first3Chars, len]);
} 
for (const arr of countryData) {
   console.log(arr)
} // NOT SURE ABOUT THIS

//q7In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let landCountries = [] ;
for (const country of countries) {
   if (country.includes('land')) {
      landCountries.push(country)
   }

} console.log(landCountries) // [finland, ireland]

//q8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let iaCountries = [] ;
for (const country of countries) {
   if (country.endsWith('ia')) {
      iaCountries.push(country);
   }
} console.log(iaCountries); // ['Albania', 'Bolivia','Ethiopia']

//q9 Using the above countries array, find the country containing the biggest number of characters.
let maxChar = 0;
let maxCharCountry;
for (const country of countries) {
   if(country.length > maxChar) {
      maxChar = country.length;
      maxCharCountry = country;
   }
} console.log(maxCharCountry); // Ethiopia

//q10 Using the above countries array, find the country containing only 5 characters.
let fiveCharCountries = [];
for (const country of countries) {
   if (country.length === 5)
      fiveCharCountries.push(country);
}
console.log(fiveCharCountries); // ['Japan', 'Kenya']

// q11 Find the longest word in the webTechs array
let word = 0;
let longestWord;
for (const tech of webTechs) {
   if(tech.length > word) {
      word = tech.length;
      longestWord = tech;
   } 
} console.log(longestWord);

//q12 Use the webTechs array to create the following array of arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

//q13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = [];
for (const stack of mern) {
  acronym.push(stack[0])
} console.log(acronym.join(''))

//q14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
//using for loop
let stackArray = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let i = 0; i < stackArray.length; i++) {
   console.log(stackArray[i], '(for loop)')
}
// using for of loop
for (const stack of stackArray) {
   console.log(stack);
}

//q15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon'] ;
let reverseArr = []
for (let i = fruit.length - 1; i >= 0; i--) {
   reverseArr.push(fruit[i]);
} console.log(reverseArr);

//q16 Print all the elements of array as shown below.
const fullStack = [
   ['HTML', 'CSS', 'JS', 'React'],
   ['Node', 'Express', 'MongoDB'] //['lemon', 'mango', 'orange', 'banana']
 ]

let stackP = fullStack[0].concat(fullStack[1]);
 console.log(stackP.join(' ').toUpperCase());