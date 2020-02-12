```
/*Arrow Function

Inspiration Comes From CofeeScript (transpiler)

*/

let multiplyByTwo = (a) => a * 2; // Single Line
let multiplyByFour = (a) => {a = a * 4; return a;} // Multi Line

/*
Arrow Function has lexical scope () => {
    () = {
        () => {object itself(this) would be accessible outside, becase function passed this to inner functions}
    }
}
We may think as parent scope
*/

//scope means variables access
//context means this

var mehmet = "mehmet";

function sayMyName(){
    var mehmet = "MEHMET";
    console.log(mehmet);
}

function sayMyNameSecondTime(){
    mehmet = "MEMO";
    console.log(mehmet);
}

sayMyName(); // output: MEHMET
sayMyNameSecondTime(); // output: MEMO
console.log(mehmet); // output: MEMO
```
