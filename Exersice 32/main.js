//ARRAY OF CURRENT USERS
var current_user = ["AHMED", "KIZZAR", "hassan", "HAMZA", "SHOBEE"];
//ARRAY OF NEW USERS
var new_user = ["HAMZA", "BISMA", "HASSAN", "AHMED", "AYESHA"];
//LOOP THROUGH NEW _USER FOR USERNAMES AVAIBILITY
new_user.forEach(function (new_one_user) {
    //MAKING A CONDITION FOR USERNAME ALREADY EXIETS AND SAVE IN OUR_CONDITION VERIABLE
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //PRINT DIFFERENT MASSAGES USING IF-ELSE STATEMENT
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is avaibale"));
    }
});
