import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface IUser {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();

  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: IUser): void {
    Object.assign(this.data, update);
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/users/${this.get("id")}`
    );
    this.set(response.data);
  }

  async save(): Promise<void> {
    const id = this.get("id");
    if (id) {
      // put
      const response = await axios.put(
        `http://localhost:3000/users/${id}`,
        this.data
      );
    } else {
      // post
      const response = await axios.post(
        "http://localhost:3000/users",
        this.data
      );
    }
  }
}
