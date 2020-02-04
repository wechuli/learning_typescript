"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split("");
        _a = [
            characters[rightIndex],
            characters[leftIndex]
        ], characters[leftIndex] = _a[0], characters[rightIndex] = _a[1];
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        _a = [
            this.data[rightIndex],
            this.data[leftIndex]
        ], this.data[leftIndex] = _a[0], this.data[rightIndex] = _a[1];
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
