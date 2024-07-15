// Day 3: Control Structures
// Tasks/Activities
// Activity 1: If-Else Statements
// Task 1:

var x=0;
if(x>0){
    console.log("x is positive");
}else if(x===0){
    console.log("x is zero");
}else{
    console.log("x is negative");
}

//Task 2:
var age=23
if(age>=18){
    console.log("You're eligible to vote")
}else{
    console.log("You're not eligible to vote")
}

// Activity 2: 
// Task 3:
var one=50;
var two=20
var three=40
if(one>two || two>three ){
    console.log("one is greater than two and two is greater than three")
}if(three>two && three>one){
    console.log("three is greater than two and three is greater than one")
}

// Activity 3: Switch Case 
// Task 4:
var day=2
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}

// Task 5:
var grade='B'
switch(grade){
    case 'A':
        console.log("Excellent")
        break;
    case 'B':
        console.log("Good")
        break;
    case 'C':
        console.log("Average")
        break;
    case 'D':
        console.log("fail")
        break;
    case 'F':
        console.log("Year back")
        break;
    default:
        console.log("Invalid grade")

}

// Activity 4:
// Task 6
var check=3
const result = check % 2 === 0 ? "even":"odd";
console.log(result);

// Activity 5:
// Task 7
var year = 2004;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("Leap year");
        }else{
            console.log("Not a leap year");
        }
    }else{
        console.log("Leap year");
    }
}else{
    console.log("Not a leap year");
}