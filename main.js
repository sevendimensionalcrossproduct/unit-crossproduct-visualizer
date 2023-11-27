"use strict";
const leftIds = ['lbtn1', 'lbtn2', 'lbtn3'];
const rightIds = ['rbtn1', 'rbtn2', 'rbtn3'];
const leftBtns = leftIds.map(id => {
    let element = document.getElementById(id);
    if (element) {
        return element;
    }
    else {
        throw new Error('Not found');
    }
});
const rightBtns = rightIds.map(id => {
    let element = document.getElementById(id);
    if (element) {
        return element;
    }
    else {
        throw new Error('Not found');
    }
});
console.log(leftBtns);
console.log(rightBtns);
