// Day 5: Function 
// Task/Activities: 
// Activity 1:
// Task 1:
function CheckOddEven(){
    let num=4;
    if(num%2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
CheckOddEven();

// Task 2:
function Square(n){
    return n*n;
}
console.log("Square ",Square(5));

// Activity 2: Function Expression 
// Task 3:
function max(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
console.log("Max ",max(5,6));

// Task 4:
function conca(name,surname){
    return name+" "+surname;
}
console.log("Concatenate ",conca("Pratibha","Yadav"));

// Activity 3: Arrow Function 
//Task 5:
const add = (num1,num2)=> {
    let sum=num1+num2;
    return sum;
}
console.log("Add ",add(5,6));

//Task 6:
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter("hello", "e")); // Output: true
console.log(containsCharacter("world", "a")); // Output: false

// Activity 4: Function Parameters and default values 
// Task 7:
function greet(name1,surname="Yadav" ){
    return "Hello "+name1+" "+surname;
}
console.log("Greet ",greet("Pratibha"));

// Task 8:
function person(name,age){
    return "Name: "+name+" Age: "+age;
}
console.log("Person ",person("Pratibha",20));

// Activity 5: Higher-Order function 
// Task 9:
function higherOrder(callback,num){
   console.log(num)
   callback(num)
}
console.log("Higher Order ",higherOrder(max,5));

//Task 10:
function compose(func1, func2) {
    return function(value) {
      return func2(func1(value));
    };
  }
  
  // Example functions
  function double1(x) {
    return x * 2;
  }
  
  function square1(x) {
    return x * x;
  }
  
 
  const doubleThenSquare = compose(double1, square1);
  
  const result = doubleThenSquare(5); 
  console.log(result); 
  