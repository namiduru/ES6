```
/*
"var" Functional scope variable "function(){}"
*/

function sayMyName(){
    var mehmet = "mehmet";
}

sayMyName();
console.log(mehmet);
//Couldn't access mehmet variable because var is used for defining variables in FUNCTION scope

/********************************O**O****************************************/
/********************************====****************************************/

/*
"let" Block scope variable "{}"
!! Function body is also type of Block
   Block means inside the curly brackets

   This is very handy especially for asynchronous calls inside iterations rather than using var
*/

if("mehmet" == "mehmet"){
    let mehmet = "mehmet";
}

console.log(mehmet);
//Couldn't access mehmet variable because let is used for defining variables in BLOCK scope
//Try with var and you will see the difference :)

/********************************O**O****************************************/
/********************************====****************************************/

/*
"const" Block scope variable "{}" && immutable
*/

const MEHMET = "mehmet"; //I JUST declare name with capitals because of regular coding conventions :)))

console.log(MEHMET);

MEHMET = "MEHMET";//NOOOOOOOOOOO STOPPPPP EGZAPTION

/********************************O**O****************************************/
/********************************====****************************************/

/*
Template literals
*/

let mehmet1 = "mehmet";
let mehmet2 = 'mehmet';
let mehmet3 = `mehmet
NAMIDURU`;
/*Hello are they the same??? Sorry, But NOOO Last One is different comes ES6 Feature

//When you need to print another line you need to use escape character like \n
If you decleare string with `` You dont need to add escape(\n) character for inserting new line to variable

*/

console.log(`$(mehmet1) is $(mehmet2)`);//You can also do that With Template Literals(``) by using $ inside ``
```
