let temperatureConverter = {
    toCelsius(f) {
        return (f - 32) * 5 / 9;
    },
    toFahrenheit(c) {
        return (c * 9 / 5) + 32;
    }
};

console.log(temperatureConverter.toCelsius(100));  
console.log(temperatureConverter.toFahrenheit(37.5));
