function change(){
// let btn=
let s1=document.getElementById("s1");
let s2=document.getElementById("s2");
let s3=document.getElementById("s3");
let s4=document.getElementById("s4");

// console.log(s1.innerHTML)
// console.log(btn.value)
document.querySelector(".capbtn").addEventListener("click",function(){
    s1.innerHTML=Math.floor(Math.random() * 101);
    s4.innerHTML=Math.floor(Math.random() * 101);
    s2.innerHTML=Math.floor(Math.random() * 101);
})}