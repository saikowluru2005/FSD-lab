// let reg=document.getElementById("register")
// let login=document.getElementById("login")
function register(callback){
    let rname=document.getElementById("rname").value
    let rpassword=document.getElementById("rpassword").value
    let remail=document.getElementById("remail").value
    callback(rname,rpassword,remail,payment)

}
amt=23500

function login(rname,rpassword,remail){
// let lname=document.getElementById("lname").value
// let lpassword=document.getElementById("lpassword").value
if(remail=="admin@gmail.com" && rpassword=="admin"){
    alert(`login success, welcome ${rname}`)
    let bal=document.getElementById("bal")
    // let amt=23500
    bal.innerHTML=amt
    console.log(rname)
}
else{
    alert("Invalid username or password")
}
// callback(amt,remail)
}

function payment(){
    console.log(amt)
    console.log(remail)
    let card=document.getElementById("card").value
    let cvv=document.getElementById("cvv").value
    amount=0
    amount=document.getElementById("amount").value
    amount1=0
    amount1=document.getElementById("amount1").value
    let vpa=document.getElementById("vpa").value



if(amt>=0){

    
    if(amount!=0){
        amt=amt-amount
        console.log(amt)

    }
    else{
        amt=amt-amount1
        console.log(amt)

    }
    console.log(amt)


    if(amt>0){
    setTimeout(function(){
        alert("Payment Successful")
        let bal=document.getElementById("bal")
    bal.innerHTML=amt
    },2000)
}
else{
    setTimeout(function(){
        alert("Insufficient Balance")
    },2000)
}
}

else{
    setTimeout(function(){
        alert("Insufficient Balance")
    },2000)
    
}
//  callback(remail)

}

// function send(remail){
//     setTimeout(function(){
//         document.write(`Balance sent to ${remail.value}`)
//     },3000)
//     // console.log(remail.value)
// }

