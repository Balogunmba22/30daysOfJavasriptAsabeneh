const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',  'Hungary',  'Ireland',  'Japan',  'Kenya' ]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// LEVEL 1

//q1 Declare an empty array;
let arr = [];

//q2 Declare an array with more than 5 number of elements
let newArr = ['appple', 'beans', 'mango', 'joy', 'happiness', 6];

//q3 Find the length of your array
console.log(newArr.length) // 6

//q4 Get the first item, the middle item and the last item of the array
console.log(newArr[0]); // apple
console.log(newArr[2]); // mango
console.log(newArr[5]); // 6

//q5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['boy', 7, 'girl', 5, {food: 'rice'}, true, ['yam','egg']];
console.log(mixedDataTypes.length); // 7

//q6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log() 
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
console.log(itCompanies[0]); 
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
//Print out each company

//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[itCompanies.length - 1].toUpperCase());

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
/*itCompanies[6] = 'and Amazon are big IT companies.'
let sentence = itCompanies.join(', ');
console.log(sentence); */

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Apple')) {
    console.log('Apple');
} else {
    console.log('company is not found');
}
//Filter out companies which have more than one 'o' without the filter method

//Sort the array using sort() method
console.log(itCompanies.sort());
//Reverse the array using reverse() method
console.log(itCompanies.reverse());
//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
//Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

//Remove the first IT company from the array
/*itCompanies.shift(); 
console.log(itCompanies); */

//Remove the middle IT company or companies from the array
itCompanies.splice(3, 1);
console.log(itCompanies);
//Remove the last IT company from the array
itCompanies.pop(); 
console.log(itCompanies)

//Remove all IT companies*/
itCompanies.splice(0);
console.log(itCompanies);

//LEVEL 2

/*q2 First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)*/
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textRegex = text.split(/[,\s]+|[\s]/);
console.log(textRegex);
console.log(textRegex.length); // TO BE REVIEWED

/* q3 add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart);

//q4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('Ethiopia'.toUpperCase()); //ETHIOPIA
} else {
    countries.push('Ethiopia');
}

//q5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocessor");
 } else {
    webTechs.push("Sass");
}
 console.log(webTechs);

 //q6 Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack); 
//['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']

//LEVEL 3
//q1 The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Sort the array and find the min and max age
ages.sort();
let min = ages[0]; // 19
let max = ages[ages.length - 1]; //26

//Find the median age(one middle item or two middle items divided by two)

//Find the average age(all items divided by number of items)
let length = ages.length;
let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / length;
console.log(average); //22.8

//Find the range of the ages(max minus min)
const range = max - min;
console.log(range); // 7

//Compare the value of (min - average) and (max - average), using abs method */
console.log(Math.abs(min - average) ==  Math.abs(max - average));

//q2 Find the middle country(ies) in the countries array
let midCountry = countries[5];
console.log(midCountry); // Finland

//q3 Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.