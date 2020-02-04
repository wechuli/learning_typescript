"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var collections_1 = require("./collections");
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
var numberSorter = new sorter_1.Sorter(numberCollection);
numberSorter.bubbleSort();
var characterCollection = new collections_1.CharactersCollection("kfkfdlksoewewemeawemABcCCc");
var charSorter = new sorter_1.Sorter(characterCollection);
charSorter.bubbleSort();
