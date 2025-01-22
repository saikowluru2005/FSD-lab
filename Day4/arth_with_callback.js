function main(num1,num2,callback){
    callback(num1,num2)
}

function add(num1,num2){
    console.log(num1 + num2)
}

function sub(num1,num2){
    console.log(num1 - num2)
}

function mul(num1,num2){
    console.log(num1 * num2)
}

main(5,2,add)
main(5,2,sub)
main(5,2,mul)