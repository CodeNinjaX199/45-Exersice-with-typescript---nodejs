let userName =["Ahmed","Kizaar","Hassan","Hamza","Admin"]; //////////////\\\\\\\\\\\\\\

userName = []

if(userName.length === 0){

     console.log("Your Array in Empty We need to find some users!");
}else{
    
    //Using Foreach Loop on Array

userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a ststus report?`);
    }else{
        console.log(`Hello ${oneuser}. thank you for loggin in again`);
    }
});
}                            
                            ////\\\\   ><><>><><><><><><><><   ////\\\\ 