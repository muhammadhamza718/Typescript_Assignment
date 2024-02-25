function createCar(manufacturer: any, model: any, p0: string, p1: string, p2: string, p3: number, p4: string, p5: string[]) {
    let options = [];

    for (let _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    let car = { manufacturer: manufacturer, model: model };
    
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }
    return car;
}

let myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2022, "features", ["GPS", "Bluetooth"]);

console.log(myCar);