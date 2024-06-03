let Guestlist = [
  "Nasir",
  "Hammad",
  "Muzammil",
  "Faiq",
  "Rafay",
  "Sir Hanif",
  "uzair",
];

let dontCome = Guestlist[5];

console.log(dontCome, "Sorry i am not comming");

Guestlist.splice(5, 1, "Adil");

Guestlist.forEach((Guest) =>
  console.log(`Salam ${Guest},   would you like to Dinner with me?`)
);
