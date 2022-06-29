//  In JS object are basically collection of data in 
//form of key value pair

let person = {

        name : "Govind",
        Age : 23,
        phone : 8369072464

}

// value in object is called properties 

// accessing properties

console.log(person)
// dot notation to access objects 
console.log(person.name)

// bracket notation to access objects 
console.log(person["phone"]) //passing as key 

// 
// object of captain america

let captainAmerica = {
    firstName : "Steve",
    lastName : "Rogers",

    isAvengers : true,
    friends : [ "Thor", "Toney Stark" , "Bucky Barners"],

    age : 102,

    address : {
        state : "New York",
        city : "Brooklyn"
    }
   
}

console.log(captainAmerica.friends[2])
// add property
captainAmerica.movies = ["Age of Ultron", "Civil War" , "EndGame"]

console.log(captainAmerica)

// delete property
delete captainAmerica.age
console.log(captainAmerica)

// update property
captainAmerica.isAvengers = false
console.log(captainAmerica)