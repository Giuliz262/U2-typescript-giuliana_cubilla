class Car {
    private make: string;
    constructor(make: string) {
      this.make = make;
    }
    drive(): void {
      console.log(`Driving a ${this.make}`);
    }
    getMake(): string {
      return this.make;
    }
  }
  class ElectricCar extends Car {
    private batteryLife: number;
  
    constructor(make: string, batteryLife: number) {
      super(make);
      this.batteryLife = batteryLife;
    }
    charge(): void {
      console.log(`The ${this.getMake()} is charging. Battery life: ${this.batteryLife}%`);
    }
  }
  const myElectricCar = new ElectricCar("Tesla", 80);
  myElectricCar.drive();
  myElectricCar.charge();
  