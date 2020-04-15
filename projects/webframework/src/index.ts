import { User } from "./models/User";
import axios from "axios";

const user = new User({ name: "Paul", age: 27 });

axios.post("http://localhost:3000/users", {
  name: "myname",
  age: 20,
});

axios
  .get("http://localhost:3000/users")
  .then((result) => console.log(result.data));
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "newname", age: 9999 });
user.set({ name: "Wechuli" });

console.log(user);

user.on("change", () => console.log("change1 was triggered"));
user.on("change", () => console.log("change2 was triggered"));
user.on("blur", () => console.log("blur was triggered"));

console.log(user);

user.trigger("change");
user.trigger("blur");
