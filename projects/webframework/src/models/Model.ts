import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;
interface IModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}
interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface IEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
interface IHasId {
  id?: number;
}
export class Model<T extends IHasId> {
  constructor(
    private attributes: IModelAttributes<T>,
    private events: IEvents,
    private sync: ISync<T>
  ) {}

  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }
  fetch(): void {
    const id = this.attributes.get("id");
    if (!id) {
      throw new Error("Cannot fetch without an id");
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
