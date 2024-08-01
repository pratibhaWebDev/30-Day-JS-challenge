// Day 7:Objects
// Task/Activities 
// Activity 1: Object Creation and Access
// Task 1:
let book={
    title:"The Alchemist",
    author:"Gunja",
    year:2024
}
console.log("Object =>",book)

// Task 2:
console.log("Title of Book",book.title,"\nAuthor Name ",book.author)

// Activity 2: Object Methods 
// TAsk 3: 
let book1={
    title:"The Alchemist",
    author:"Gunja",
    year:2024,
    methods:function(){
        return this.title,this.author
    }
}
const result=book1.methods()
console.log(result)

// Task 4:
let book2={
    title:"The Alchemist",
    author:"Gunja",
    year:2024,
    methods:function(year){
       
        console.log("update year =>",year)
    }
}

book2.methods(2025)

// Activity 3: Nested object 
// Task 5:
let library={
    book:[
        {
            title:"The Hobbit",
            author:"J.R.R. Tolkien",
            year:1937
        },
        {
            title:"Gunja",
            author:"Gunja",
            year:2025
        }
    ]
}
console.log(library)
console.log(library.book[0])
console.log(library.book[1].title)

// Task 6:
console.log(library.book[1].title)

//Task 7:
const person={
    name:"Gunja",
    greet:function(){
        console.log(this.name)
    }
}
person.greet()

// Activity 5: Object Iteration 
// Task 8:
for(const key in book2){
    console.log(key,book2[key])
}
// Task 9:
const keys=Object.keys(library.book)
console.log(keys)
const keys2=Object.keys(book2)
console.log(keys2)