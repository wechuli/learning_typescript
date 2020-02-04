import { Sorter } from "./sorter";
import { NumbersCollection, CharactersCollection } from "./collections";

let numberCollection = new NumbersCollection([
  1,
  2,
  3,
  4,
  -7,
  0,
  56,
  7,
  4,
  33,
  2
]);
let numberSorter = new Sorter(numberCollection);
numberSorter.bubbleSort();

let characterCollection = new CharactersCollection(
  "kfkfdlksoewewemeawemABcCCc"
);
let charSorter = new Sorter(characterCollection);
charSorter.bubbleSort();
