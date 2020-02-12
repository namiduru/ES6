```
//Promises

/*  States Of Promisses

pending
fulfilled
rejected

*/

// First Promise Example
let mehmet1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yes");
    }, 3000);

    setTimeout(() => {
        reject('No')
    }, 1000);

});

//Ex 1
mehmet1.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err)
});

//Ex 2
mehmet1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


// Second Promise Example
let mehmet2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('mehmet 2 Promise');
    }, 1100);
});


let mehmet3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('mehmet 3 Promise');
    }, 1000);
});

Promise.all([mehmet2, mehmet3]) //It will wait until mehmet2 and mehmet3 promises finished their tasks
.then((data) => {
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

// Third Promise Example
fetch('')
    .then((res)=>{
        res.json().then((data)=>{
            console.log(data);
        });
    })
    .catch((err)=>{
        console.log(err);
    });

/*

//Promises without arrow function syntax

let promise = fetch("REST API");

promise.then(fulfilled); //Fullfilled
promise.catch(rejected); //Rejected

// Or Your May Use Chaninig
// promise.then(fulfilled).catch(rejected);

//Or You May Call Like This
//promise.then(fulfilled(data){
//    console.log("Nays Here is your Data");
//    console.log(data);
//}).catch(rejected(data){
//    console.log("No data is not coming :(:(");
//});

//Cleaning Up With Arrow Syntax
//fetch("urlExample") || promise (first or second one)
//    .then((data) => {console.log(data)})
//    .catch((err) => {console.log(err)});

//Taking Object
fetch("urlExample")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));


function fulfilled(data){
    console.log("Nays Here is your Data");
    console.log(data);
}

fuction rejected(data){
    console.log("No data is not coming :(:(");
}

*/
```
