// Creating a guest list array
let Guestlist = ["Nasir","Hammad","Muzammil","Faiq","Rafay","Sir Hanif","uzair"];

// Making variable for whose guest who cant come
let dontCome = Guestlist[5];

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
let middleindex: number = Math.floor(Guestlist.length /2);

// Adding a new guest to middle index of array
Guestlist.splice(middleindex, 0, "Talha");

//Print message of updated list
console.log("updated list of our Guests");

//Sending a invitation message to our guest one by one with thier names
Guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me`));