const nums = [10, 20, 30, 40, 50];
let [n1,,n3]=nums;
[n3,n1]=[n1,n3]
console.log(n1,n3)

let [,n2,,n4]=nums;
[n4,n2]=[n2,n4]

console.log(n2,n4)