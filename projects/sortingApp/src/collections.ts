import { ISortable, Sorter } from "./sorter";



export class CharactersCollection extends Sorter implements ISortable {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split("");
    [characters[leftIndex], characters[rightIndex]] = [
      characters[rightIndex],
      characters[leftIndex]
    ];
    this.data = characters.join("");
  }
}

export class NumbersCollection extends Sorter implements ISortable {
    data: number[];
    constructor(data: number[]) {
      super();
      this.data = data;
    }
    get length(): number {
      return this.data.length;
    }
    compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex: number, rightIndex: number): void {
      [this.data[leftIndex], this.data[rightIndex]] = [
        this.data[rightIndex],
        this.data[leftIndex]
      ];
    }
  }
  