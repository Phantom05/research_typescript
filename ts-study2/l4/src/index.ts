export {};
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

function buildArray2() {
  let a = []; // any[];
  a.push(1);
  a.push("x");
  return a;
}

let myag4 = buildArray2();
// myag4.push(true)

let aw2: [number] = [1];
// [이름,성씨,생년] 튜플
let bw2: [string, string, number] = ["malcolm", "gladwell", 1963];

let trainFares: [number, number?][] = [[3.375], [8.27, 7.7], [10, 50]];

let moreTrainFares: ([number] | [number, number])[] = [[1], [2.5, 2], [3, 45]];

let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];
console.log(friends, "fre");

let listv4: [number, boolean, ...(number | string)[]] = [
  1,
  false,
  "a",
  "b",
  "c",
  1,
];

interface Te1 {
  name: string;
  age: number;
}
interface Te2 {
  name: string;
  age: number;
  hobby: string;
}

let listvf2: [...(Te2 | Te1)[]] = [
  {
    name: "h",
    age: 5,
    hobby: "computer",
  },
  {
    name: "h",
    age: 5,
  },
];

let as: readonly number[] = [1, 2, 3];
let bs: readonly number[] = as.concat(4);

let three = bs[2];
// as[4] = 5;

type Abh2 = readonly string[]; // readonly string[];
type Bbh2 = ReadonlyArray<string>; // readonly string[];
type Cbh2 = Readonly<string[]>; // readonly string[];
type Dbh2 = readonly [number, string]; // readonly [number,string];
type Ebh2 = Readonly<[number, string]>; // readonly [number, string];

// (a) number 또는 null을 반환하는 함수
function aab(x: number) {
  if (x < 10) {
    return x;
  }
  return null;
}

// (b) undefined를 반환하는 함수
function bab() {
  return undefined;
}

// (c) void를 반환하는 함수
function cab() {
  let a = 2 + 2;
  let b = a * a;
}

// (d) never를 반환하는 함수
function dab() {
  throw TypeError("I always error");
}

// (e) never를 반환하는 또 다른 함수
function eab() {
  while (true) {
    // doSomething();
  }
}

console.clear();
// NOTE: 열거형
// 열거형의 이름은 단수 명사로 쓰고, 첫 문자를 대문자로 하는 것이 관례다, 키도 앞글자를 대문자로 표시한다.
enum Language {
  English,
  Spanish,
  Russian,
}

enum Lanugage {
  English = 0,
  Spanish = 1,
  Russian = 2,
}

enum Language {
  Korean = 100,
  Japanese,
}

let myFirstLanguage = Language.Russian;
let mySecondLanguage = Language["English"];
console.log(myFirstLanguage, mySecondLanguage);
console.log(Language.Japanese);

enum Colora {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050,
  White = 255,
}

let reda = Colora.Red;

console.log(reda, Colora[255]);

const enum Colorb {
  Red = 125,
}

console.log(Colorb.Red, "Colorb");
// console.log(Colorb[125]);NOTE: 역방향 찾기가 안됨 const는
// const enum은 사용하지 말것, 채워넣기 기능을 피해야함,

const enum Flipable {
  Burger = "Burger",
  Chaire = "Chaire",
  Cup = "Cup",
  Skateboard = "Skateboard",
  Table = "Table",
}

function flip(f: Flipable) {
  return "flipped it";
}

flip(Flipable.Chaire);
// flip(12);
// NOTE: 단순히 enum을 키값만쓰면 숫자가 다 들어갈수있지만,
// 위와같이 각각 string으로 이름들을 넣어주면 숫자를 방지할 수 있다.

// enum은 별로임, 책에서 추천하지 않음

let ddddddd = [true, true, false];

let e = {
  type: "ficus",
};

let f = [1, false];
// : [number,boolean]
// (number|boolean)[]
let ggg = null;

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 5));

function greet(name: string) {
  return "hello" + name;
}

let greet2 = function (name: string) {
  return "hello" + name;
};

let greet3 = (name: string) => {
  return "hello" + name;
};

let greet4 = (name: string) => "hello" + name;

function log(message: string, userId = "Not signed in") {
  let time = new Date().toLocaleDateString();
  console.log(time, message, userId);
}
console.log(log("hello", "24"));

console.clear();
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));

function sumVariadic(...numbers: number[]): number {
  console.log(numbers, "numbers");
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumVariadic(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}
