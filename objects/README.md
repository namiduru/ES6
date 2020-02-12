```
let tree = {
    height: 50,
    color: `green`,
    /*grow: function(){
        this.height += 5;
    }
    */
   //ES6 Implementation
   grow(){
       this.height += 5;
   }
};

tree.grow();
//console.log(tree.height);


//Shorthand Properties
let name = `mehmet`;
let surname = `namiduru`;

let mehmet = {
    /*
    name: name,
    surname: surname
    */
    //ES6 Implementation
    name,
    surname
};

//console.log(mehmet);

//ES6 Merging Object
  //Your dont need to use lodash or underscore js anymore

let red = {
    color: `red`,
    importance: 5
};

let blue = {
    color: `blue`
};

//let mixedColor = Object.assign(red, blue);
let mixedColor = Object.assign({}, red, blue);
//console.log(mixedColor);

//Object assign operator should be used for asiging object to another
let person1 = {
    name: `mehmet`,
    surnam: 'namiduru'
};

let person2 = person1;
//For copying object
  // Object.assign({}, person1);
person2.name = `mert`;

console.log(person1.name);//Would Give mert
```
