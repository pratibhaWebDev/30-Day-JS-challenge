// Day 6: Arrays 
// Tasks/Activities: 
// Activity 1: Array Create and Access 
// Task 1:
var array=[1,2,3,4,5]
console.log("Array create => ",array)

// Task 2:
console.log("access the first and last elements ",array[0],array[4])

// Activity 2: Array Methods 
// Task 3:
// method push 
const Arraypush=[1,2,3,4]
Arraypush.push(5)
console.log("push method => ",Arraypush)

// Task 4:
// method pop
const Arraypop=[1,2,3,4,5]
Arraypop.pop()
console.log("pop method =>",Arraypop)

//Task 5:
// method shift 
const Arrayshift=[1,2,3,4,5]
Arrayshift.shift()
console.log("shift method =>",Arrayshift)

// Task 6:
// method unshift
const Arrayunshift=[1,2,3,4,5]
Arrayunshift.unshift(0)
console.log("Arrayunshift method =>",Arrayunshift)

// Activity 3: Array Methods (Intermediate)
// Task 7:
var ArrayMap=[10,20,30,40,50]
var b=ArrayMap.map((num)=>{
    return num*2
})
console.log("Map Method =>",b)

//Task 8:
var ArrayFilter=[20,45,65,22,13]
var c=ArrayFilter.filter(num=>num%2===0)
console.log("Filter Array =>",c);

//Task 9:
var ArrayReduce=[1,2,3,4,5]
var d=ArrayReduce.reduce((a,b)=>a+b)
console.log("Reduce Array =>",d);

// Activity 4: Array Iteration 
// Task 10:
var ArrayFor=[1,2,3,4,5]
for(i=0;i<ArrayFor.length;i++){
    console.log("For Loop =>",ArrayFor[i])
}
// Task 11: 
var ArrayforEach=[1,2,3,4,5]
ArrayforEach.forEach(num=> console.log("For Each Loop =>",num))

// Activity 5: Multi-dimensional Arrays
// Creating a 2D array
//Task 12
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matrix);

//Task 13
const element = matrix[1][2]; 
console.log(element); 


  




