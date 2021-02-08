function sum(...items: number[]) {
  return items.reduce((acc, i) => acc + i, 0);
}
console.log(sum(1, 2, 3, 4, 5));

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

console.log(add.apply(null, [10, 20]));
add.call(null, 10, 20);
add.bind(null, 10, 20)();

// let x = {
//   a(){
//     return this;
//   }
// }

// x.a()

// NOTE:
// 타입스크립트에서 this를 쓸땐 첫번째 인자에 this를 처리해준다
function fencyDate(this: Date) {
  return `${this.getDate()} / ${this.getMonth()} / ${this.getFullYear()}`;
}

console.log(fencyDate.call(new Date()));

function* createFibonaccGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibonacciGenerator = createFibonaccGenerator();

console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());

let numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

for (let a of numbers) {
  console.log(a);
}
console.log([...numbers]);

function area(radius: number): number | null {
  if (radius < 0) {
    return null;
  }
  return Math.PI * radius ** 2;
}

let r: number = 3;
let a = area(r);
if (a !== null) {
  console.log("result:", a);
}

// greet(name:string)
type Greet = (name: string) => string;

type Log = (message: string, userId?: string) => void;
let log: Log = (message, userId = "Not signed in") => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

function f(n: number) {
  console.log(n);
}

times(f, 5);

// type Log = {
//   (message:string,userId?:string): void
// }
// NOTE: 오버로딩 => 호출 시그니처가 여러 개인 함수

// type Reserve = {
//   (from:Date,to:Date,destination:string) : Reservation
// }

// let reserve: Reverse = (from,to,destination) =>{

// }

function getMonth(date: Date): number {
  return date.getMonth();
}

type CreateElement = {
  (tag: "a"): HTMLAnchorElement;
  (tag: "div"): HTMLDivElement;
  (tag: "table"): HTMLTableElement;
  (tag: string): HTMLElement;
};

// let createElement: CreateElement = (tag: string): HTMLElement => {
//   return document.createElement(tag);
// };
console.clear();

function iter(fn: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
}

// iter((_) => {
//   let item = array[_];
//   if (f(item)) {
//     result.push(item);
//   }
// }, array.length);

type Filter = {
  (array: number[], f: (item: number) => boolean): number[];
  (array: string[], f: (item: string) => boolean): string[];
  (array: object[], f: (item: object) => boolean): object[];
};

let names = [
  { firstName: "beth" },
  { firstName: "caitlyn" },
  { firstName: "xin" },
];

// function filter(array: (string | number)[], f) {
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// let result = filter(names, (_) => _.firstName.startWith("b"));
// console.log(result);
// // console.log(filter([1, 2, 3, 4], (_) => _ < 3));

// NOTE:
// 오버로드 된 함수?
// type Tog = {
//   (message: string, userId?: string): void;
//   (message: number, userId?: number): void;
//   // (message?:string,userId?:string):void;
// };
// // type Tog = (message:string,userId?:string) => void;
// let tog: Tog = (message, userId) => {
//   console.log(message, "hello");
// };
// tog(1, 2);

// NOTE: 함수 오버로드
// 함수 선언
function test2(n: number): void;
function test2(s: string): void;
function test2(s: string, n: number): void;
function test2(n: number, s: string): void;

// 함수 정의
function test2(n: any, s?: any): void {
  console.log(n, s);
}

console.log(test2(100), test2("홍길동"), test2(20, "a"), test2("a", 20));

// function tog(message,userId):Tog{
//   return
// }

// type 가드
function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    return (val as number).toFixed(2);
  } else {
    return (val as string).toUpperCase();
  }
}
