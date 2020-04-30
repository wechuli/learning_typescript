import axios, { AxiosResponse, AxiosPromise } from "axios";
import { IUser } from "./User";

interface IHasId {
  id: number;
}

export class Sync<T extends IHasId> {
  constructor(public rootUrl: string) {}
  async fetch(id: number): Promise<AxiosResponse> {
    const response = axios.get(`${this.rootUrl}/${id}`);
    return response;
  }

  async save(data: T): Promise<AxiosResponse> {
    const { id } = data;
    let response: AxiosPromise;
    if (id) {
      // put
      response = axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post

      response = axios.post(`${this.rootUrl}`, data);
    }
    return response;
  }
}
