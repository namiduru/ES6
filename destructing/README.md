```
// DESTRUCTURING

let mehmet = {
    name: "mehmet",
    age: "25",
    location: "Istanbul"
};

mehmet.name; // output: mehmet
mehmet.age; // output: 25
mehmet["age"]; // output: 25

// Destructuring Example
let { age : mehmetsAge } = mehmet;
console.log(mehmetsAge); // output 25

// Another Destructuring Example
let {age} = person;
console.log(age);

//Another Destructuring Example
let { age, location:myLocation} = mehmet;
console.log(age, myLocation);

//Another Destructuring Example
let key = "name";
let { [key] : myName} = person;
console.log(myName);

//Another Destructuring Example With ARRAYS
let ordinaryNumberArrays = [1, 2, 3, 4, 5];
let [first, second,, forth] = ordinaryNumberArrays; 
//let [first, second, third, ...rest] = ordinaryNumberArray
console.log(first, second, forth);
```
