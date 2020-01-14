class Vehicle {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }
  public drive(): void {
    console.log("chugga chugga");
  }
  public honk(): void {
    console.log("beep");
  }
  private secretPrint(): void {
    console.log("Hi");
  }
  protected protectedPrint(): void {
    console.log("I am protected");
  }
}

// inheritence
class Car extends Vehicle {
  public wheels: number;

  constructor(color: string, wheels: number) {
    super(color);
    this.wheels = wheels;
  }
  public drive(): void {
    console.log("vroom");
  }
}
const myVehicle = new Vehicle("black");
myVehicle.drive();
myVehicle.honk();

const myCar = new Car("blue", 5);
myCar.drive();
console.log(myCar.color);
