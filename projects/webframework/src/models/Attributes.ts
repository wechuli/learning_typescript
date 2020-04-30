import { IUser } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}

const attrs = new Attributes<IUser>({ id: 5, age: 27, name: "Paul" });

const name = attrs.get("name");
