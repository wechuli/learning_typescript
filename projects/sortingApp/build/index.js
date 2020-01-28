"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        var _a;
        var arraylength = this.collection.length;
        for (var i = 0; i < arraylength; i++) {
            for (var j = 0; j < arraylength - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    _a = [
                        this.collection[j + 1],
                        this.collection[j]
                    ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
var sorter = new Sorter([1, 2, 3, 4, -7, 0, 56, 7, 4, 33, 2]);
sorter.bubbleSort();
