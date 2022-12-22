class Vehicle {

  /** 
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  */

  constructor(public color: string) {} //This is equivalent to the comments

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car1 = new Car(4, 'red');
car1.startDrivingProcess();

