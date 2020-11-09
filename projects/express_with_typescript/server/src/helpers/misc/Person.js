function Person() {
  this.name = "Paul";
}
Person.prototype.sayHello = function () {
  console.log(this.name);
};

const person = new Person();

person.sayHello();

Person.prototype.another = function () {
  console.log("dsds");
};

person.another();
