"use strict";
let str1 = 'Safa';
let str2 = 'Sheikh';
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
//Test for equality and inequality with strings
console.log("Test for equality and inequality with strings:");
console.log(str1 === 'Safa');
console.log(str1 === str2);
//Test using the lower case function
console.log("\nTest using the lower case function:");
console.log(str1.toLowerCase() === 'safa');
console.log(str2.toLowerCase() !== 'sheikh');
//Numerical tests
console.log("\nNumerical tests:");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//Tests whether an item is in an array
console.log("\nTests whether an item is in an array:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//Tests whether an item is not in an array
console.log("\n//Tests whether an item is not in an array");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
