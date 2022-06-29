// a piece of code that do certain task

// function prototype
function greet(){
    console.log("Hello from Scaler")
}

greet() // function invocation or function call

function add(a ,b){
    console.log(a+b);
}

add(23,34)

//  in JS function also work as a variable
// this is called as function expression in js

let sub = function(a,b) {
    console.log(a-b)
}
sub(45,23)

// IFFE ( immediately inovke function expression) u will not allowed to
// call at later stage in program

let multiply = (function(a,b){
    console.log(a*b)
})(2,45)

//