```
//Iterating Array Easily With ES6
let colors = [`red`, `blue`, `yellow`, `orange`];

//You may use ${} inside ``
for(i=0; i<colors.length; i++){
    //console.log(colors[i]);
    //console.log(`Colors : ${colors[i]}`);
}

//New ways for iterating arrays
for (const color of colors) {
    //console.log(color);
}

colors.forEach(element => {
    //console.log(element);
});

function sum(){
    arguments = Array.from(arguments);
    return arguments.reduce((prev, cur) => prev + cur);
}

//console.log(sum(1, 2, 3));
//console.log(Array.from(`Hello I'm Mehmet`));


//At underscorejs or lodash there is a method called
  //find() and with ES6 that feature is also avaliable

let utensils = [
    {
        name: `fork`,
        price: 1
    },
    {
        name: `refrigerator`,
        price: 1600
    },
    {
        name: `stewpot`,
        price: 20
    }
];

var fork = utensils.find((utensil) => {return utensil.name === `fork`});
//findIndex() for finding index within the first match
//filter() method for searching for the rest
console.log(fork);
```
