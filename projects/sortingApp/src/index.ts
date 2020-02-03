class Sorter {
  private collection: number[] | string;
  constructor(collection: number[] | string) {
    this.collection = collection;
  }
  bubbleSort(): void {
    const arraylength = this.collection.length;
    for (let i = 0; i < arraylength; i++) {
      for (let j = 0; j < arraylength - i - 1; j++) {
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            [this.collection[j], this.collection[j + 1]] = [
              this.collection[j + 1],
              this.collection[j]
            ];
          }
        }

        // when this.collection is a string
        if(typeof this.collection === 'string'){
          
        }
      }
    }
    console.log(this.collection);
  }
}

let sorter = new Sorter([1, 2, 3, 4, -7, 0, 56, 7, 4, 33, 2]);
sorter.bubbleSort();
