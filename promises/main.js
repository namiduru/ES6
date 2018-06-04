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