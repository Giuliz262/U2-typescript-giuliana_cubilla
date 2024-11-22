class Car {
    make: string;
    constructor(make: string) {
      this.make = make;
    }
    drive(): void {
      console.log(`Driving a ${this.make}`);
    }
  }
  const myCar = new Car("Toyota");
  myCar.drive();
  