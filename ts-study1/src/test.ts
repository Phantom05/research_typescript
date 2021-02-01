interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

// let user = "Jaun User";
// let user = [0, 1, 2];
// let user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user);

class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleIntial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleIntial + " " + lastName;
  }
}

let user = new Student("Jane", "M", "User");

console.log(user);
