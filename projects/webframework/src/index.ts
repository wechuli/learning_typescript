import { User } from "./models/User";
import axios from "axios";

const user = new User({ id: 1 });

// console.log(user.get("name"));

user.on("change", () => {
  console.log(user);
});

user.on("save", () => {
  console.log("user has been saved");
});

user.on("error", () => {
  console.log("There was an error doing that operation");
});

user.set({ name: "user change" });
user.save();

console.log(user);
//user.fetch();

user.fetch();

console.log(user);
