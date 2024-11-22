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
  const myCar = new Car("BMW");
  myCar.drive();
  console.log(myCar.getMake());
  