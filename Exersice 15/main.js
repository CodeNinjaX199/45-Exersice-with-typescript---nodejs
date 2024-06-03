var Guestlist = ["Nasir", "Hammad", "Muzammil", "Faiq", "Rafay", "Sir Hanif", "uzair"];
var dontCome = Guestlist[5];
console.log(dontCome, "Sorry i am not comming");
Guestlist.splice(5, 1, "Adil");
Guestlist.forEach(function (Guest) { return console.log("Salam ".concat(Guest, ",   would you like to Dinner with me?")); });
