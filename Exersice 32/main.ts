//ARRAY OF CURRENT USERS
let current_user = ["AHMED","KIZZAR","hassan","HAMZA","SHOBEE"];

//ARRAY OF NEW USERS
let new_user = ["HAMZA","BISMA","HASSAN","AHMED","AYESHA"];

//LOOP THROUGH NEW _USER FOR USERNAMES AVAIBILITY
new_user.forEach(new_one_user => {
   
    //MAKING A CONDITION FOR USERNAME ALREADY EXIETS AND SAVE IN OUR_CONDITION VERIABLE
    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
   
    //PRINT DIFFERENT MASSAGES USING IF-ELSE STATEMENT
    if(our_condition ){

        console.log(`sorry ${new_one_user} is already taken`);

    }else{
        console.log(`This username ${new_one_user} is avaibale`);
    }
});


                            
                              /////\\\\\     ,.,.,.,.,.,   ><><><><><><><><><><><   ,.,.,.,.,.,     /////\\\\\