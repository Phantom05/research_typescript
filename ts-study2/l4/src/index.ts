// console.log("he llo");

// let a = 1 + 2;
// let b = a + 3;
// let c = {
//   apple: a,
//   banana: b,
// };

// let d = c.apple * 4;

// function squareOf(n: number) {
//   return n * n;
// }

// console.log(squareOf(2));
// // console.log(squareOf("z"));

// let a: unknown = 30;
// let b = a ===123;
// let c = a +10;
// if(typeof a === 'number'){
//   let d = a + 10;
// }

// let e: string = "zoom";
// let f: "john" = "john";
// let g: "john" = "zoe";

// console.log(e, f, g);

// let a = Symbol("a"); // symbol;
// let b: symbol = Symbol("b");
// var c = a === b;
// console.log(c);
// // let d = a + "x";

interface A {
  b: string;
}
let a: A = {
  b: "x",
};

console.log(a.b);
console.log(a);

let aa: { b: string } = {
  b: "x",
};

console.log(aa.b);
console.clear();
let c: {
  firstName: string;
  lastName: string;
} = {
  firstName: "Jonh",
  lastName: "barrowman",
};

class Person {
  // public firstName: string;
  // public lastName: string;
  constructor(
    public firstName: string, // NOTE: public은 this.firstName = firstName을 단축한것
    public lastName: string // firstName: string, // lastName: string
  ) {
    // this.firstName = firstName;
    // this.lastName = lastName;
  }
}

c = new Person("matt", "smith");
console.log(c);

let a1: { b: number };
// a1 = {}; // NOTE: {} 타입에는 타입에 필요한 b 프로퍼티가 없음

a1 = {
  b: 1,
  // c:2 NOTE: 에러, 타입에 b 밖에 없음으로 c에는 에러가 발생함
};

let i1: number;
// let j = i1 * 3; NOTE: 변수가 할당되기전에 연산을 했음으로 에러

let a2: {
  b: number;
  c?: string;
  [key: number]: boolean;
};
/**
 * a2는 number 타입의 프로퍼티 b 를 포함한다
 * a2는 number 타입의 프로퍼티 c 를 포함 할 수도 있다
 * a2는 boolean 타입을 값을 갖는 number타입의 프로퍼티를 여러게 포함 할 수 있따.
 */

a2 = { b: 1 };
a2 = { b: 1, c: undefined };
a2 = { b: 1, c: "d" };
a2 = { b: 1, 10: true };
a2 = { b: 1, 10: true, 20: false };
// a2 = {10:true} ERROR: error, 10:true 타입에는 b프로퍼티가 없음
// a2 = {b:1,33:"red"}
a2 = { b: 1, 10: true, 20: false, 30: false };
// 키값이 boolen으로 잡히고 c는 스트링으로 잡혀 있기에 불가능
console.log(a2);

let airplaneSeatingAssigments: {
  [seatNumber: string]: string;
} = {
  "34D": "Boris Cherny",
  "34E": "Bill Gate",
};

let user: {
  readonly firstName: string;
} = {
  firstName: "abby",
};
// user.firstName = "g";
type Age = number;
type Person4 = {
  name: string;
  age: Age;
};

let age: Age = 55;
let driver: Person4 = {
  name: "James May",
  age: age,
};
console.log(driver);

type Color = "red";
// type Color = "blue"
let x = Math.random() < 0.8;
if (x) {
  type Color = "blue";
  let b: Color = "blue";
} else {
  let c: Color = "red";
}

function trueOrNull(isTrue: boolean) {
  if (isTrue) {
    return "true";
  }
  return null;
}

type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

type Returns = string | null;

function ta1(a: string, b: number) {
  return a || b;
}

let ab2 = [1, 2, 3];
var bb2 = ["a", "b"];
let cb2: string[] = ["a"];
let dd2 = [a, "a"];
const ed2 = [2, "b"];

let fd2: (string | boolean)[] = ["red"];
fd2.push("bluie");
fd2.push(true);

let dv1 = [1, "a"];
let rdv1 = dv1.map((_) => {
  if (typeof _ === "number") {
    return _ * 3;
  }
  return _.toUpperCase();
});
console.log(rdv1, "rdv1");
