const x = {
    name : "Abc",
    age : 20
}
//console.log(x)  // { name: 'Abc', age: 20 }   
x.age = 34;

//console.log(x) //  { name: 'Abc', age: 34 }   here const value changes

Object.freeze(x); // this will not change anythong
x.age = 45;

//console.log(x) // { name: 'Abc', age: 34 }

// Note : - Var is  Global {let , const} is block specific


function block(){

    const  somestring = "Hi Hello Greet to U";
    console.log(somestring);
    if(true){
        let somestring = "go to hell"; // this is different than in function both are different
        console.log(somestring);
    }
    somestring = 2; // TypeError: Assignment to constant variable.
    console.log(somestring);

}
block();
// console.log(somestring); // ReferenceError: somestring is not defined


