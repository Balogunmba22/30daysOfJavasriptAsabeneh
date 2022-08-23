// LEVEL 1

//Q1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Muhammed'; 
console.log(typeof firstName); //string

let lastName = 'Balogun'; 
console.log(typeof lastName); //string

let country = 'Nigeria';  
console.log(typeof country); // string

let city = 'Lagos';  
console.log(typeof city); //string

let age = 50;  
console.log(typeof age); //number

let isMarried = true;  
console.log(typeof isMarried); //boolean

let year = 2022;  
console.log(typeof year); //number

//Q2: Check if type of '10' is equal to 10
console.log(typeof '10' == typeof 10); //false

//Q3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); //false

//Q4;  Boolean value is either true or false
//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.

let true1 = console.log(5 > 3); //true
let true2 = console.log(7 > 6); //true
let true3 = console.log(4 == 4); //true

let false1 = console.log(5 > 7); //false
let false2 = console.log(5 == 8); //false
let false3 = console.log(3 < 2); //false

/*Q5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

Find the length of python and jargon and make a falsy comparison statement.*/

4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 // false
4 == 4 // true
4 === 4 // true
4 != 4 // false
4 !== 4 // false
4 != '4' // false
4 == '4' // true
4 === '4' // false

let py = 'python'.length;
let jar = 'jargon'.length;
console.log(py !== jar); //false

//Q6; Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 // false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 // true
!(4 > 3)  // false
!(4 < 3) //  true
!(false) // true
!(4 > 3 && 10 < 12) // false 
!(4 > 3 && 10 > 12) // true
!(4 === '4') // true
console.log(!'jargon'.includes('on') && !'python'.includes('on')); //false



//Q7: Use the Date object to do the following activities

// 'What is the year today';
// 'What is the month today as a number?';
//'What is the date today?'
//'What is the day today as a number?';
// 'What is the hours now?'
// 'What is the minutes now?';
// 'Find out the numbers of seconds elapsed from January 1, 1970 to now.';

/*const date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());*/

/*ALTERNATIVE WAY OF GETTING ALL SECONDS
const seconds = Date.now();
console.log(seconds);
*/

// LEVEL 2 

/*no1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
a. Enter base: 20
b. Enter height: 10
c. The area of the triangle is 100
let base = prompt('enter base', ''); height = prompt('enter height', '');
let area = parseInt(base) * parseInt(height) * 0.5;
alert(`the area of the triangle is ${area}`); */

/*no2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
let a = prompt('enter side a');
let b = prompt('enter side b');
let c = prompt('enter side c');
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert(`the perimeter of the triangle is ${perimeter}`);*/

/*no3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))  
let length = prompt('enter length'); width = prompt('enter width');
let areaOfRectangle = parseInt(length) * parseInt(width);
let perimeterOfRectangle = 2 * parseInt(length) * parseInt(width);
alert(`the area of the rectangle is ${areaOfRectangle}`);
alert(`the perimeter of the rectangle is ${perimeterOfRectangle}`);*/

/*no4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/ 
const pi = 3.14;
let radius = prompt('enter radius');
let areaOfCircle = pi * parseInt(radius) * parseInt(radius);
let circumference = 2 * pi * parseInt(radius);
alert(`the area of the circle is ${areaOfCircle}`);
alert(`the circumference of the circle is ${circumference}`); 

//n05 Calculate the slope, x-intercept and y-intercept of y = 2x -2
let n = prompt('enter value for x');
const s = 2 * n - 2;
alert(`sope is ${s}`);

//no6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let m = (10 - 2) / (6 - 2);
alert(m);

//no7 Compare the slope of above two questions.
console.log(s == m);

//no8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. 
let x = prompt("Enter a value for n ");
 let y = x * x + 6 * x + 9;
 console.log(y);

/*no9: Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?*/ 
let hour = prompt('enter hours');
let rate = prompt('enter rate per hour');
let pay = parseInt(hour) * parseInt(rate);
alert(`your weekly earning is ${pay}`);

/*no10: If the length of your name is greater than 7 say, your name is long else say your name is short. */
let name = 'muhammed'.length;
if (name > 7) {
    console.log('your name is long');
} else {
    console.log('your name is short');
}

/*no11: Compare your first name length and your family name length and you should get this output:  Your first name, Asabeneh is longer than your family name, Yetayeh*/
let fName = 'Muhammed'.length; lName = 'Balogun'.length;
if (fName > lName) {
    console.log('Your first name, Muhammed is longer than your family name, Balogun');
}

//no12: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250; yourAge = 25;
if (myAge > yourAge) {
    console.log('I am 225years older than you');
}

//no13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let user = prompt('enter your dob', '');
if (user <= 2004 ) {
    alert('you are old enough, you can drive');
} else {
    alert('you are too young to drive, wait few more years');
}

//no14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numberOfYears = prompt('enter number of years you have lived');
let seconds = parseInt(numberOfYears) * 24 * 60 * 60 * 365;
alert(`you live ${seconds} seconds`);

/*no15: Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */
const date = new Date();
console.log(date);

let thisYear = date.getFullYear();
let month = date.getMonth() + 1;
let todaysDate = date.getDate();
//console.log(date.getDay());
let hours = date.getHours();
let mins = date.getMinutes();
//console.log(date.getTime());


// Format 1
console.log(`${thisYear}-${month}-${todaysDate} ${hours}:${mins}`);
// Format 2
console.log(`${todaysDate}-${month}-${thisYear} ${hours}:${mins}`);
// Format 3
console.log(`${todaysDate}/${month}/${thisYear} ${hours}:${mins}`);

// LEVEL 3
/*Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05*/ 

/*const todaysDate = new Date();
console.log(todaysDate);
let year = todaysDate.getFullYear();
let month = todaysDate.getMonth() + 1;
month = `${month}`;
month = month.length < 2 ? `0${month}` : month;
let day = todaysDate.getDate();
day = `${day}`;
day = day.length < 2 ? `0${day}` : day;
let hr = todaysDate.getHours();
hr = `${hr}`;
hr = hr.length < 2 ? `0${hr}` : hr;
let min = todaysDate.getMinutes();
min = `${min}`;
min = min.length < 2 ? `0${min}` : min;
console.log(`${year}-${month}-${day} ${hr}:${min}`);*/






