"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + '  the great';
    }
}
const magicians2 = ["huba", "warda", "saima"];
make_great(magicians2);
show_magicians(magicians2);
