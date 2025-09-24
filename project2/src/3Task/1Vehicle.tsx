// Создайте базовый класс Vehicle со свойствами: make: string (марка), model: string, year:
//  number и методом getInfo(): string, который возвращает строку с информацией о
//  транспортном средстве.
class Vehicle{
    public make : string;
    public model : string;
    public year : number;

    constructor(make : string, model : string, year : number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getInfo(): string{
        return(`make : ${this.make}
            model : ${this.model}
            year : ${this.year}`)
    }
}
//  Затем создайте два класса-наследника: Car добавляет свойство doors: number и переопределяет
//  getInfo(), включая информацию о количестве дверей;Motorcycle добавляет свойство hasSideCar:
//  boolean и переопределяет getInfo() соответствующим образом.

class Car extends Vehicle{
    private door : number;

    constructor(make : string, model : string, year : number, door : number){
        super(make, model, year)
        this.door = door;
    }

    public getInfo(): string {
        return(super.getInfo() + `door : ${this.door}`);
    }
    public checkDoors(): string {
        return `Checking ${this.door} doors of ${this.make} ${this.model}`;
    }
}

class Motorcycle extends Vehicle{
    private hasSideCar : boolean;

    constructor(make : string, model : string, year : number, hasSideCar : boolean){
        super(make, model, year)
        this.hasSideCar = hasSideCar;
    }

    public getInfo(): string {
        return(super.getInfo() + `hasSideCar : ${this.hasSideCar}`);
    }
      public checkSideCar(): string {
        return this.hasSideCar ? 
            `${this.make} ${this.model} has a side car` : 
            `${this.make} ${this.model} has no side car`;
    }
}
function isCar(vehicle: Vehicle): vehicle is Car {
    return vehicle instanceof Car;
}

function isMotorcycle(vehicle: Vehicle): vehicle is Motorcycle {
    return vehicle instanceof Motorcycle;
}

function processVehicles(vehicles: Vehicle[]): void {
    vehicles.forEach(vehicle => {
        console.log(vehicle.getInfo());
        
        if (isCar(vehicle)) {
            console.log(vehicle.checkDoors());
        } else if (isMotorcycle(vehicle)) {
            console.log(vehicle.checkSideCar());
        }
        console.log('---');
    });
}

const vehicles: Vehicle[] = [
    new Car("Toyota", "Camry", 2022, 4),
    new Motorcycle("Harley-Davidson", "Sportster", 2021, true),
    new Car("Honda", "Civic", 2023, 2),
    new Motorcycle("Yamaha", "MT-07", 2022, false)
];

processVehicles(vehicles);