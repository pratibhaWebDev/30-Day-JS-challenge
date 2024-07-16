// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop
// Task 1:
for(let num=1;num<=10;num++){
    console.log(`Number ${num}`);
}

// Task 2:
for(let i=1;i<=10;i++){
    console.log(`Table of ${i*5}`);
}

// Activity 2:
// Task 3:
var num=1;
let sum=0
while(num<=10){  
    sum=sum+num;    
    num++;
}
console.log(`Number ${sum}`);

//Task 4:
var num1=10
while(num1>0){
    console.log(`Number ${num1}`);
    num1--;
}

//Activity 3: Do While loop
//Task 5:
var i=1;
do{
    console.log("Num print 1 to 10",i)
    i++;
}while(i<=10)

//Task 6:
var fact=5;
let j=1
let result=1
do{
    result*=j
    j++;
}while(j<=fact)
    console.log("fact",result)

// Activity 4: Nested loops
// Task 7:
for(let i=0;i<5;i++){
    let row=''
    for(let j=0;j<=i;j++){
        row+='* '
    }
    console.log(row)
    
}

// Activity 5: Loop Control Statements
//Task 8:

for(let con=1;con<=10;con++){
    if(con===5){
        continue;
    }
    console.log("Continue statement",con)
}

//Task 9:

for(let con=1;con<=10;con++){
    if(con===7){
        break;
    }
    console.log("Continue statement",con)
}