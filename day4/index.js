// LEVEL 1
/*q1:Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.
Enter your age:15
You are left with 3 years to drive.*/
let user = prompt('enter your age');
let drivingAge = 18;
let tooYoung = drivingAge - user;
if (user >= drivingAge) {
    alert('You are old enough to drive');
} else alert(`wait for ${tooYoung} more years`);

//q2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 40;
let yourAge = prompt('enter your age');

let ageDiff = yourAge - myAge;
myAge > yourAge ? alert('i am older than you') : alert(`you are ${ageDiff} years older than me`);

/*q3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.
  let a = 4
  let b = 3  */

let a = 4;
let b = 3;
// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("a is less than b");
// }

a > b ? console.log("a is greater than b") : console.log("a is less than b");

/*q4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.  */

let n = prompt("Enter a number");
 if (n % 2 == 1) {
   alert(`${n} is an odd number`);
 } else {
   alert(`${n} is an even number`);
 }
//LEVEL 2
/* q1: Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

let score = prompt('enter your score');

if (score > 79 && score < 101) {
   alert("your grade is A");
}
else if (score > 69 && score < 80) {
   alert("your grade is B");
}
else if (score > 59 && score < 70) {
   alert("your grade is C");
}
else if (score > 49 && score < 60) {
   alert("your grade is D");
}
else alert("you failed your grade is F");


/*q2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let month = prompt("Enter month: ");

switch(month) {
   case "September":
   case "October":
   case "November":
    alert('the season is Autumn');
      break;
   
   case "December":
   case "January":
   case "February":
    alert('the season is Winter');
      break;
   
   case "March":
   case "April":
   case "May":
    alert('the season is Spring');
    
   case "June":
   case "July":
   case "August":
      alert('the season is Summer');
      break;
}

/*q3 Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */
let day = prompt("What is the day today?")
if (day == "saturday" || day == "sunday") {
   console.log(`${day} is a weekend!`);
}
else console.log(`${day} is a working day`);

//LEVEL 3 Write a program which tells the number of days in a month.
 month = prompt("Enter a month: ").toLowerCase();
let daysCount;

// check if it is leap year 
let d = new Date();
let year = d.getFullYear();

if (month == "february") {
   if ((year % 4 == 0 && year % 100 != 0) ||    (year % 400 == 0)) { daysCount = 29; }
   else daysCount = 28;
} else { 
switch(month){
   case "january":
   case "march":
   case "may":
   case "july":
   case "august":
   case "october":
   case "december":
      daysCount = 31;
      break;
      
   case "april":
   case "june":
   case "september":
   case "november":
      daysCount = 30;
      break;
}
}
console.log(month, " has ", daysCount, " days");
