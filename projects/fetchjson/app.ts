import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/3";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}


axios.get(url).then(response => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
}
