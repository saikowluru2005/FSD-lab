function main(name,delay,callback){
    setTimeout(function(){
        callback(name);
    },delay)
    console.log("herry")
}

function print(name){
    console.log(name);
}

main("hello",2000,print)