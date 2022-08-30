// LEVEL 1

// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

const dog = {};
console.log(dog);
dog.name = 'Bingo';
dog.legs = 4;
dog.color = 'brown';
dog.age = 2;
dog.bark = function() {
    return "woof woof"
};
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
//Bingo 4 brown 2 woof woof
dog.breed = 'German Sheperd';
dog.getDogInfo = function() {
    let info = `I am ${this.name}, I am ${this.color} in complexion, I am a ${this.breed} breed and my age is ${this.age}`;
    return info;
}
console.log(dog.getDogInfo());

// LEVEL 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  //q1 Find the person who has many skills in the users object.

/*const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);
  
  console.log(result); */ //THIS WORKS

//q2 Count logged in users, count users having greater than equal to 50 points from the users object.
let loggedInUsers = 0;
let points50UpUsers = 0;

// turning the object keys into array in order to loop through them
const students = Object.keys(users); 

for(const user of students) {
   if(users[user].isLoggedIn === true) {

      loggedInUsers += 1;
   }

   if(users[user].points >= 50) {
    points50UpUsers += 1
   }
}
console.log(loggedInUsers, points50UpUsers);

//q3 Find people who are MERN stack developer from the users object

//q4 Set your name in the users object without modifying the original users object
let newUser = Object.assign({}, users);
newUser.Muhammed = {email: 'balogunmba.com', skills: ['html', 'css', 'js']};
console.log(newUser);

//q5 Get all keys or properties of users object
let keys = Object.keys(users);
console.log(keys);

//q6 Get all the values of users object
let values = Object.values(users);
console.log(values);

// LEVEL 3
//q1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'John',
    lastName: 'Nash',
    balance: 0,
    
    incomes: {
       courses: 2000,
       salary: 2300,
       tutoring: 1800
    },
    expenses: {
       rent: 1200,
       bill: 400,
       saloon: 150
    },
     
    totalIncome: function(){
       let total = 0;
       for(const each of Object.keys(personAccount.incomes))
          total += personAccount.incomes[each];
       return total;
    },
    
    totalExpense: function() {
       let total = 0;
       for(const each of Object.values(personAccount.expenses)) {
          total += each;
       }   
       return total;
    },

    accountInfo : function() {
        console.log("Name: ", this.firstName + ' ' + this.lastName);
        console.log("Account Balance: ", this.balance);
     },

     accountBalance : function() { 
        return this.balance; 
     },
         
    addIncome : function(type, amount) {
       this.incomes[type] = amount;
    },
    
    addExpense : function(type, amount) {
       this.expenses[type] = amount;
    }
     
 } // TO BE REVIEWED