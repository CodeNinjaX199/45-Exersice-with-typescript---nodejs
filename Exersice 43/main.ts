//Define a function to print each magician name of array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Function to make magician great through .map() it will modify array 
function make_great(magicain: string []){
  return magicians_names.map(name => `The Great ${name}`);
}

//Define an array of magician names

 let magicians_names = ["CRISS ANGEL","DAVID BLAINE","LANCE BURTON"];

//Making a copy of orignal array through .slice() function

let copy_magicians_name = magicians_names.slice()

//Modify the copied array to include "the great" with thier name

let copy_great_magicians = make_great(copy_magicians_name);

//Show both array orignal and copied

//Orignal
console.log("Orignal Array\n")

show_magicians(magicians_names);
                        
//Copied
console.log("\nCopied Array\n")

show_magicians(copy_great_magicians);






                                  ////////\\\\\\\ ><><><><><><><><>><><><><><><><><><><><><><>< ///////\\\\\\\