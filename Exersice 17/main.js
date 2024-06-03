// Creating a guest list array
var Guestlist = ["Nasir", "Hammad", "Muzammil", "Faiq", "Rafay", "Sir Hanif", "uzair"];
// Making variable for whose guest who cant come
var dontCome = Guestlist[5];
// Print the guest who cant come  
console.log(dontCome, "Sorry i am not comming");
// Add or remove guest from guset list array
Guestlist.splice(5, 1, "Adil");
// Message print for bigger Table
console.log("Good news ! We Have Found a Bigger Table For Dinner.");
// Adding a new guest at satrting index of array
Guestlist.unshift("Hammid");
// Adding a new guest at ending index of array
Guestlist.push("Ammar");
// Get a middle index of our guest list array
var middleindex = Math.floor(Guestlist.length / 2);
// Adding a new guest to middle index of array
Guestlist.splice(middleindex, 0, "Talha");
//Print message of updated list
console.log("updated list of our Guests");
//Sending a invitation message to our guest one by one with thier names
Guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me")); });
// Inform that only tow guest can be invite for Dinner
console.log("Unfortunately, The new Table wont arrive on time, so i can only invite tow guest to Dinner with me");
// Using while-loop to remove guests from the array until only tow names remain
while (Guestlist.length > 2) {
    var removeGuest = Guestlist.pop();
    console.log("sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
//Sending a invitation to last tow guest on the list
console.log("Invitation to the last 2 Guest");
Guestlist.forEach(function (lasttow) { return console.log("Luckly ".concat(lasttow, " , you are still invited to Dinner")); });
//Removing last tow guest from the list
Guestlist.pop();
Guestlist.pop();
console.log("Empty list:", Guestlist);
