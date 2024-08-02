// Day 8: ES6+ Features 
// Task/Activities:
// Activity 1: Template Literals
// Task 1:
let name="Gunja"
let age = 23
console.log(`Person Name ${name} and age ${age}`)
// Task 2: 
let para=`This is my name Pratibha i take 30 Day challenge 
i am 23 year old and also i have 1 year experience`
console.log(para)

// Activity 2: Destructuring
// Task 3:
const array =[10,20,30,40,50]
const [first , second,...rest]=array
console.log(first)
console.log(second)

// Task 4:
const book={
    title:"we will",
    author:"Gunja"
}
const {title,author}=book
console.log(title)
console.log(author)
// Activity 3: Spread and Rest Operators
//Task 5:
const arr1=[1,2,3,4,5]
const arr2=[...arr1,5,6,7]
console.log(arr2)
//Task 6:
function sum(a,b,...rest){
    return a+b+rest.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4,5))

// Activity 5: Enhanced Object Literals 
// Task 8: 
const name1='Gunja';
const age1=23;
const person={
    name1,
    age1,
    greet(){
        return `Hello, my name is ${this.name1}.`
    },
    introduce(){
        return `Hi i am ${this.age1} year old`
    }
}
console.log(person.greet())
console.log(person.introduce())

// Task 9:
const key1 = 'name';
const key2 = 'age';

const person1 = {
  [key1]: 'John Doe', // Computed property name for 'name'
  [key2]: 30          // Computed property name for 'age'
};

console.log(person1[key1]); // Output: John Doe
console.log(person1[key2]); // Output: 30
console.log(person1);      // Output: { name: 'John Doe', age: 30 }
