"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`); //1st
    }
    else if (number === 2) {
        console.log(`${number}nd`); //2nd
    }
    else if (number === 3) {
        console.log(`${number}rd`); //3rd
    }
    else {
        console.log(`${number}th`); // 5th , 6th , 7th and so on
    }
}
