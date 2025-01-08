const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}

function  getUserDetails() {
    return{
        ...userDetails,
        ...userAddress,
        ...userPreferences,
        name
    }
}

console.log(getUserDetails())