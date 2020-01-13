interface IVehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface IReportable {
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

const mydrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

function printVehicle(vehicle: IVehicle): void {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
}

const printSummary = (item: IReportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(mydrink);
