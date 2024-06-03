var userName = ["Ahmed", "Kizaar", "Hassan", "Hamza", "Admin"]; //////////////\\\\\\\\\\\\\\
userName = [];
if (userName.length === 0) {
    console.log("Your Array in Empty We need to find some users!");
}
else {
    //Using Foreach Loop on Array
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a ststus report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ". thank you for loggin in again"));
        }
    });
}
////\\\\   ><><>><><><><><><><><   ////\\\\ 
