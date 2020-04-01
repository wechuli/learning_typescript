"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringTodate = (dateString) => {
    // 28/10/2018
    const dateParts = dateString
        .split("/")
        .map((value) => parseInt(value)); // ['28','10','2018']
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
