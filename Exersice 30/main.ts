//CReating a Array
let userName = ["Ahmed","Kizaar","Hassan","Hamza","Admin"];

//Using Foreach loop on Array

userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a ststus report?`)
    }else{
        console.log(`Hello ${oneuser}. thank you for loggin in again`)
    }
});