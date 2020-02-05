"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("./collections");
var linkedList_1 = require("./linkedList");
// sorting numbers collection
var numberCollection = new collections_1.NumbersCollection([
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
var characterCollection = new collections_1.CharactersCollection("kfkfdlksoewewemeawemABcCCc");
characterCollection.bubbleSort();
console.log(characterCollection.data);
// sorting a linked list
var linkedList = new linkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(23);
linkedList.add(0);
linkedList.add(-443);
linkedList.add(3);
linkedList.bubbleSort();
linkedList.print();
