const emp={
    name:"John",
    role:"developer",
    age:28,
    loaction:"IN"
}

function update(emp){
    return{...emp,
    role:'Senior developer'
    }
}
console.log(update(emp))
// console.log(emp.role)