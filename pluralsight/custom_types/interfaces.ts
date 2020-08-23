interface IEmployee {
  name: string;
  title: string;
}
interface IManager extends IEmployee {
  department: string;
  numOfEmployees: number;
  scheduleMeeting(topic: string): void;
}

let developer = {
  name: "Michelle",
  title: "Senior TypeScript Developer",
  editor: "Visual Studio Code",
};

const icon = {
  name: "Pikachu",
  id: 234,
  url: "https://goole.com/img",
  abilities: ["run", "fly", "eat"],
  scan: {
    am: "sds",
    sewe: 345,
  },
};

console.log("Paul Wechuli".split("").reverse().join(""));

let newEmployee: IEmployee = developer;

//JSON.parse("");
