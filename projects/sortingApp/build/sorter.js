"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.bubbleSort = function () {
        var arraylength = this.collection.length;
        for (var i = 0; i < arraylength; i++) {
            for (var j = 0; j < arraylength - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        console.log(this.collection);
    };
    return Sorter;
}());
exports.Sorter = Sorter;
