import { IUser, User } from "./User";
import { Eventing } from "./Eventing";
import Axios, { AxiosResponse, AxiosPromise } from "axios";

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  async fetch(): Promise<void> {
    const response = await Axios.get(this.rootUrl);
    response.data.forEach((value: IUser) => {
      const user = User.buildUser(value);
      this.models.push(user);
    });
    this.trigger("change");
  }
}
