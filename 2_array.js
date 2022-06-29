// initializing array

let arr = []

// array is indexed based data structure 
// it starts  with 0 --> n-1
let fruits = ["Mango","Apple", "Orange"]
console.log(fruits)
let appleElem = fruits[1]
console.log(appleElem)

// array methods
// adding element in array  
// push method add element at last of array
fruits.push("Watermelon")

console.log(fruits)
// pop method remove element at last of array
fruits.pop()
console.log(fruits)

// unshift method add element at starting of array
fruits.unshift("Banana")
console.log(fruits)

// shift method remove element at starting of array
fruits.shift()
console.log(fruits)
