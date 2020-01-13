interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date("2000/4/9"),
  broken: true,
  summary(): string {
    return `Name: ${this.name} - from summary`;
  }
};

function printVehicle(vehicle: Vehicle): void {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
}

printVehicle(oldCivic);
