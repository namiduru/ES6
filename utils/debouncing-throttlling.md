```
const printMe = (name, surname) => {
    console.log(`${name}  ${surname}`);
};

function debounce(fn, time) {
    let timeoutID;

    return function() {
        if(timeoutID) {
            clearTimeout(timeoutID);
            // return; 
            // If you want to make it throttling, 
            // I mean if Timeout has not finished still continue to the operation and don't care for the another call if the same type of execution still continues
        }

        timeoutID = setTimeout(() => {
            fn.call(this, ...arguments);
            timeoutID = null;
        }, time);
    }
};

const deconcedPrintMe = debounce(printMe, 100);

deconcedPrintMe('Mehmet', 'Namiduru');
deconcedPrintMe('Joe', 'Bilboa');
deconcedPrintMe('Mike', 'Tail');
```