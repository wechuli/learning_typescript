"use strict";
var Grades;
(function (Grades) {
    Grades["firstClass"] = "A";
    Grades["secondClassUpper"] = "B";
    Grades["secondClassLower"] = "C";
    Grades["pass"] = "D";
})(Grades || (Grades = {}));
console.log(Grades.firstClass);
