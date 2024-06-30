"use strict";
function makeShirt(size = 'large', text = 'I love typescript') {
    console.log(`you have order a ${size}, shirt that says ${text}`);
}
// makeShirt();
// makeShirt('medium');
//different message
makeShirt('small', 'I need a big shirt to wear');
