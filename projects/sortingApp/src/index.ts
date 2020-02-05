import { NumbersCollection, CharactersCollection } from "./collections";
import { LinkedList } from "./linkedList";

// sorting numbers collection
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

numberCollection.bubbleSort();
console.log(numberCollection.data);

// sorting a character collection
let characterCollection = new CharactersCollection(
  "kfkfdlksoewewemeawemABcCCc"
);
characterCollection.bubbleSort();
console.log(characterCollection.data);

// sorting a linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(23);
linkedList.add(0);
linkedList.add(-443);
linkedList.add(3);

linkedList.bubbleSort();

linkedList.print();
