//CReating a Array
var userName = ["Ahmed", "Kizaar", "Hassan", "Hamza", "Admin"];
//Using Foreach loop on Array
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a ststus report? "));
    }
    else {
        console.log("Hello ".concat(oneuser, ". thank you for loggin in again"));
    }
});
