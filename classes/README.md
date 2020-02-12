```
/*
    Classes
*/

//Emulating Classes In JS ES5

/*function Person(){
    this.name = 'mehmet';
    this.surname = "namiduru";
    this.speed = 1;
}

Person.prototype.sayMyName = function(){
    return this.name;
}

const mehmet = new Person();
console.log(mehmet.name);
console.log(mehmet.sayMyName());

function SuperPerson(){
    this.speed = 5;
    this.namename = "mehmetmehmet";
}

SuperPerson.prototype = Person;

const mehmetmehmet = new SuperPerson();
console.log(mehmetmehmet.speed);
console.log(mehmet.name);
console.log(mehmetmehmet.namename);
*/

//With Using Class keyword ES6 or After

class Human {
    //Called Whenever Creating Instance of Class
    constructor(name){
        this.name = name;
        this.location = {
            x: 0,
            y: 0
        };
    }

    walk(x, y){
        this.location.x += x;
        this.location.y += y;
    }

    //Static Method
    static sayMemo(){
        return 'Memo!!!';
    }
}

const mehmet = new Human('Mehmet');
console.log(mehmet);
mehmet.walk(7, 7);
console.log(mehmet);
console.log(Human.sayMemo);

//Interited Class Decleration
class Programmer extends Human{
    constructor(){
        super('MehmetTheProgrammer');
        this.knowledge = "Programming";
    }
}

const mehmetP = new Programmer();
console.log(mehmetP);
```
