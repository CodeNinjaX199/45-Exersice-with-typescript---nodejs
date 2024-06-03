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

 //Call make_great function to modify maigicians
let great_magicians = make_great(magicians_names)
 
//Call show _magician that show modified list of magicians
  show_magicians(great_magicians);




                        



                                ////////\\\\\\\ ><><><><><><><><>><><><><><><><><><><><><><>< ///////\\\\\\\