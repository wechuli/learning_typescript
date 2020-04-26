import axios, { AxiosResponse } from "axios";

interface IUser {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: IUser): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  async trigger(eventName: string): Promise<void> {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
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
