"use strict";
let car = 'subaru';
console.log("\n----> 5 tests evaluate to True");
// Test 1
console.log("Is car == 'subaru'? I predict True");
console.log(car === 'subaru');
// Test 2
console.log("Is car != 'toyota'? I predict True");
console.log(car != 'toyota');
// Test 3
console.log("Is the length of car >4? I predict True");
console.log(car.length > 4);
// Test 4
console.log("Is the length of car <= 6? I predict True");
console.log(car.length <= 6);
// Test 5
console.log("Does car start with 's'? I predict True");
console.log(car.startsWith('s'));
console.log("\n----> 5 tests evaluate to False:");
// Test 1
console.log("Is car == 'honda'? I predict False");
console.log(car === 'honda');
// Test 2
console.log("Is car in uppercase? I predict False");
console.log(car.toUpperCase() === car);
// Test 3
console.log("Is car == 'subaru'? I predict False");
console.log(car === 'Subaru');
// Test 4
console.log("Is car == 'Audi'? I predict False");
console.log(car === 'Audi');
// Test 5
console.log("Is the length of car === 7 ? I predict False");
console.log(car.length === 7);
