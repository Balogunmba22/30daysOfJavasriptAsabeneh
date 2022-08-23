// LEVEL 1

//Q1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

//Q2: Print the string on the browser console using console.log()
console.log(challenge);

//Q3: Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Q4: Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Q5: Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Q6: Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));

//Q7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
console.log(challenge.substr(3, 18));

//Q8: Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//Q9: Split the string into an array using split() method
console.log(challenge.split(''));

//Q10:Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

//Q11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

//Q12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

//Q13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

//Q14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'));

//Q15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//Q16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//Q17: Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

//Q18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

//Q19: Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.search('because'));

//Q20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim());

//Q21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith(30));

//Q22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t'));

//Q23: Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

//Q24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Days of '.concat('JavaScript'));

//Q25: Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// LEVEL 2

/*Q1: Using console.log() print out the following statement: 
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one */

let exercise = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(exercise);

/*Q2: Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love  */

let love = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(love);
 
//Q3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === typeof 10);  //false
console.log(typeof parseInt('10') === typeof 10); //true

//Q4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(typeof '9.8' === typeof 10) //false

 let floatString = parseFloat('9.8');
 console.log(typeof Math.round(floatString) === typeof 10 ); //true

 //Q5: Check if 'on' is found in both python and jargon
 console.log('python'.includes('on') && 'jargon'.includes('on')); //true

 //Q6: I hope this course is not full of jargon. Check if jargon is in the sentence.
 let course = 'I hope this course is not full of jargon.';
 console.log(course.includes('jargon')); //true
 
 //Q7: Generate a random number between 0 and 100 inclusively. 
 // formular = Math.floor(Math.random() * (max - min + 1) ) + min
 let converter = Math.random();
 let randomNum = Math.floor(converter * 101) + 0;
 console.log(randomNum);

 //Q8: Generate a random number between 50 and 100 inclusively.
 // formular = Math.floor(Math.random() * (max - min + 1) ) + min
let number = Math.random();
let numBtwFiftyAndHund = Math.floor(number *  51) + 50;
console.log(numBtwFiftyAndHund);

//Q9: Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 251 ) + 0);

//Q10: Access the 'JavaScript' string characters using a random number.
let n = Math.floor(Math.random() * 10);
console.log('javasripct'.charAt(n));

/*Q11: Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
let numbers = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125';
console.log(numbers);

//Q12: Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr(31, 23));

// LEVEL 3

//Q1: 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(quote.match(/love/gi));

//Q2: Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let count = 'You cannot end a sentence with because because because is a conjunction';

console.log(count.match(/because/gi));

//Q3: Clean the following text and find the most frequent word (hint, use replace and regular expressions). 

let statement = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let regEx = statement.replace(/[^a-z 0-9]/gi, '');
console.log(regEx);  // NOT SURE IF THIS IS THE END OF THE SOLUTION

//Q4: Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let textReg =  text.match(/\d+/g); //this extracts the numbers in the string and return an array of: ['5000', '10000', '15000']
let salary = parseInt(textReg[0]) * 12;
let bonus = parseInt(textReg[1]);
let onlineCourses = parseInt(textReg[2]) * 12;

const annualIncome = salary + bonus + onlineCourses;
console.log(annualIncome);

