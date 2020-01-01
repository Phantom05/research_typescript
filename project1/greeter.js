// SECTION:
// function greeter(person:string){
//   return `Hello, ${person}`;
// }
// let user = [0,1,2];
// document.body.innerHTML = greeter(user);
// SECTION:
// interface Person{
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person){
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = {firstName:"Jane", lastName: "User"};
// document.body.innerHTML = getter(user);
// SECTION:
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M", "User");
document.getElementById('root').innerHTML = greeter(user);
