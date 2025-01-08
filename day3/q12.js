
const details={
    name:"John",
    age:30,
    email:"john@gmail.com",
}
function createProfile({name,email}){
    return {name,email};
    }
    console.log(createProfile(details));
