"use strict";
//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Define an array contaning magican name
let magicians_names = ["CRISS ANGEL", "DAVID BLAINE", "LANCE BURTON"];
//Call the function to print each magician name
show_magicians(magicians_names);
