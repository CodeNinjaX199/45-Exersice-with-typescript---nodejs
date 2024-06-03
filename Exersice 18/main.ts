//Making a array of countries and print its orignal order
let countriesTovisit: string[] = ["Colombia","Dubai","Belgium","Afghanistan"];
console.log("Orignal order:",countriesTovisit);

//Print the array in Alphabetical order without modifying the actual array list
console.log("Alphabetical order:",[...countriesTovisit].sort());

//Show the array is stillin its orignal order
console.log("Still in orignal order:",countriesTovisit);

//Print the array in reverse order without modifying the actual array list
console.log("reverse order:",[countriesTovisit].reverse());

//Show the array is still its orignal list
console.log("still in orignal order:",countriesTovisit);

//We have changed the orignal array order now
console.log("Orignal array reverse:",countriesTovisit.reverse());

//Print array to show that its back to its orignal order
console.log("Back to the orignal order:",countriesTovisit.reverse());

//print the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabrtical order:",countriesTovisit.sort());

//We have changed again the orignal array order now in reverse order again
console.log("Orignal array reverse Again:",countriesTovisit.reverse());