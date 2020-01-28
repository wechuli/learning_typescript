import faker from "faker";
import { IMappable, IFakeInterface } from "./CustomMap";

export class User implements IMappable, IFakeInterface {
  name: string;
  color: string;

  // this is just a definition, we have not yet initialized an object
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
