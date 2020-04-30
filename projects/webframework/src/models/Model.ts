import { AxiosPromise } from "axios";

type Callback = () => void;
interface IModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[k];
}
interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface IEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
export class Model {}
