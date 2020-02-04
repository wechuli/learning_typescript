export interface ISortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  private collection: ISortable;
  constructor(collection: ISortable) {
    this.collection = collection;
  }
  bubbleSort(): void {
    const arraylength = this.collection.length;
    for (let i = 0; i < arraylength; i++) {
      for (let j = 0; j < arraylength - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
    console.log(this.collection);
  }
}
