```
//ES6 Map & Set

//=================Map=================
//=====================================

/*
const person = new Map();

person.set(`name`, `mehmet`);

console.log(person.get(`name`));
*/



/*
const person = new Map([
    [`name`, `mehmet`],
    [`surname`, `namiduru`]
]);

console.log(person.get(`surname`));
*/

/*
const person = new Map([
    [`name`, `mehmet`],
    [`surname`, `namiduru`]
]);
*/

//console.log(person.size);
//person.forEach((v, k) => {
//    console.log(v, k);
//});

/*
for(let key of person.keys()){
    //person.values() to iterate values
    //person.entries() return each full key and elements
    console.log(key);
}
*/

/*
//Destructuring key and value
for(let [key, value] of person.entries()){
    //person.values() to iterate values
    //person.entries() return each full key and elements
    console.log(key);
    console.log(value);
}


person.delete(`name`); // For Deleting name
person.clear(); //For clearing the whole map
*/

//=================Set=================
//=====================================

/*
const numbers = [1, 2, 3, 4, 5];
const numberSet = new Set(numbers);

numberSet.add(6);

console.log(numberSet.has(1));
console.log(numberSet.has(6));
console.log(numberSet.has(7));
*/

const numbers = [1, 2, 3, 4, 5, 1];
const numberSet = new Set(numbers);

//For Iterating Set
  //Only needed
numberSet.forEach((v)=> {
    //console.log(v);
});

numberSet.delete(1);
numberSet.clear();

for(let value of numberSet){
    console.log(value);
}
```
