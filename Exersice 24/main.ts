//Define Veriables:
let accord = "accord";
let uppercaseAccord = "ACCORD";
let fifty = 50;
let thirty = 30;
let brands = ["sony","lg","clavino","lenovo","haier","haveal"];

//Test for the equality and inequality with string:
//.,.,.,.,.,.,.,.,.,.,,,.,.,.,.,..,.,.,.,..,.,.,.,.//
console.log("\n is accord is equal to accord?");
console.log(accord == "accord");

console.log("\nis accord is not equal to accord?");
console.log(accord != "accord");

//Test lowercase function:
//<><><><><<>.,.,.,.,<<><><><<>><.,.,.,><><<><>//
console.log("\n is ACCORD is equal to accord after conveting Lowercase?");
console.log(uppercaseAccord.toLowerCase() == "accord");

console.log("\n is ACCOED is not equal to accord after converting Lowercase?");
console.log(uppercaseAccord.toLowerCase() != "accord");

//Numerical test:
//Equal to:
console.log("\n is fifty is equal to thirty?");
console.log(fifty == thirty);

//Note equal to:
console.log("\n is fifty is not equal to thirty?");
console.log(fifty != thirty);

//Greater than:
console.log("\n is fifty in greater than thirty?");
console.log(fifty > thirty);

// Less than:
console.log("\n is fifty is less than 30?");
console.log(fifty < thirty);

// Greater than equal to:
console.log("\n is fifty is greater then and equal to thirty?");
console.log(fifty >= thirty);

//Less than equal to:
console.log("\n is fifty in less than equal to thirt?");
console.log(fifty <= thirty);

//Test using "and" & "or" operators:
//Using && (and):
console.log("\n fifty is not equal to 30 and thirty is greater than 30?");
console.log(thirty != 50 && fifty > 30);

console.log("\n fifty is not equal to 30 and thirty is greater than 30?");
console.log(fifty != 30 && thirty > 50);

//Using || (OR):
console.log("\n 30 is greater tha 50 or 30 is equal to 30");
console.log(30 > 50 || 30 == 30);

console.log("\n 30 is greater tha 50 or 30 is not equal to 30");
console.log(30 > 50 || 30 != 30);

// Test teather an item is include in array
console.log("\n is haier includes in my brands array");
console.log(brands.includes("haier"));

// Not include
console.log("\n is haier is not includes in my brands array");
console.log(!brands.includes("haier"));