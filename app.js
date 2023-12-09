"use strict";
const num1element = document.getElementById('num1');
const num2element = document.getElementById('num2');
const buttonelement = document.querySelector('button');
const numresults = [];
const textresults = [];
function adds(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printresult(resultobj) {
    console.log(resultobj.val);
}
buttonelement.addEventListener('click', () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = adds(+num1, +num2);
    numresults.push(result);
    const stringresult = adds(num1, num2);
    textresults.push(stringresult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numresults, textresults);
});
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
mypromise.then((result) => {
    console.log(result.split('w'));
});
