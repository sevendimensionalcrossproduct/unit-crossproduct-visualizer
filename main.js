"use strict";
const leftIds = ['lbtn1', 'lbtn2', 'lbtn3'];
const rightIds = ['rbtn1', 'rbtn2', 'rbtn3'];
let isClicked = false;
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
leftBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (!isClicked) {
            button.classList.remove('button');
            button.classList.add('clickedStyles');
            button.removeAttribute('id');
        }
        else {
            button.classList.remove('clickedStyles');
            button.classList.add('button');
            button.setAttribute('id', leftIds[leftBtns.indexOf(button)]);
        }
        isClicked = !isClicked;
    });
});
console.log(leftBtns);
console.log(rightBtns);
