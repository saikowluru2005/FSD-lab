let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails() {
        return `${this.make} ${this.model} (${this.year})`;
    }
};

let electricCar = Object.create(car);
electricCar.batteryCapacity = "75 kWh";
electricCar.getBatteryInfo = function () {
    return `Battery: ${this.batteryCapacity}`;
};

console.log(electricCar.getDetails());
console.log(electricCar.getBatteryInfo());
