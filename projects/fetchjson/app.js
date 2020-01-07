"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/3";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n  The todo with ID: " + ID + "\n  Has a title of: " + title + "\n  Is it finished? " + completed + "\n  ");
    logTodo(ID, title, completed);
});
function logTodo(id, title, completed) {
    console.log("\n    The todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n    ");
}
