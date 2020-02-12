```
/*
Spread Operator and Rest Parameters
*/

//SPREAD OPERATOR
let mehmet = function(){
    console.log(arguments);//You could not use methods like reduce and map that is not an exact array object
}

mehmet("mehmet", namiduru);

//

let mehmet = function(...args){
    console.log(args);//That is array
}

mehmet("mehmet", namiduru);

//

//Example

let multiplyArgumentsByGivenNumberAndReturnArray = function(multiplyer, ...args){
    return args.map((element) => element * multiplier);
};

/******************************************************** */
/******************************************************** */

/*
REST PARAMETERS
*/

let numbers = [1, 2, 3, 4, 5];
//let max = Match.max(numbers); Will not work Because Math.max accepts arguments like Max.max(1, 2, 3, 4)
let max = Math.max(...numbers);

console.log(max);

//Works like converting array [1, 2, 3, 4] to 1, 2, 3, 4

let one = [1, 1 ,1];
let two = [2, 2, 2, ...one];

console.log(two); // output: 2, 2, 2, 1, 1, 1
```
