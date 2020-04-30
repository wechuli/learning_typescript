import { User } from "./models/User";
import axios from "axios";

const user = new User({ id: 1, name: "newer name", age: 90 });

// console.log(user.get("name"));

user.on("change", () => {
  console.log(user);
});

user.on("save", () => {
  console.log("user has been saved");
});

user.save();

console.log(user);
//user.fetch();
// user.set({name:"user change"})
