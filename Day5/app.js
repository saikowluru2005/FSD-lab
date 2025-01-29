async function data(){
let api=await fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=a274d83dea4433bca415019dc8da10dc")
.then(response => response.json())
}

// console.log(api)