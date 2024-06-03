//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItems => console.log("-" + singleItems));

    console.log("\nNow Enjoy Sandwich");

}


//Call the function 3 times with 3 different number of arguments

makeSandwich("CHICKEN","CHEEZ","MASH PATATO","MAYO","BUTTER","EGG");

makeSandwich("TOSTED BREAD","BUTTER");

makeSandwich("TOSTED BREAD","MAYONNAISE","CHICKEN BREAST","BACON","TAMATOES","LETTUCE","EGG","MASH PATATOS");





                                      ///////\\\\\\ ><><><><<><><><<><> ///////\\\\\\