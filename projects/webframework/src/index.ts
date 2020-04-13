import { User } from "./models/User";

const user = new User({ name: "Paul", age: 27 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "newname", age: 9999 });
user.set({ name: "Wechuli" });

console.log(user);
