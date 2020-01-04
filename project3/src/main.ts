import { sayHello } from './greet';

function hello(compiler: string){
  return `Hello from ${compiler}`;
}

function showHello(divName: string, name: string){
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

console.log(
  hello("TypeScript")
);
console.log(
  sayHello("TypeScript")
);

showHello("greeting","TypeScript");


let isDone: boolean = false;
let decimal:number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = "red";

let fullName: string  = `Bob bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1 } years old next month.
my hair color is ${color}`;

console.log(
  sentence
);
let list1: number[] = [1,2,3];
let list2: Array<number> = [ 1,2,3 ];
console.log(list1);
console.log(list2);

// 튜플 타입 선언
let x: [string,number];
// 초기화
x = ["hello",10]; // 좋아요
console.log(x);
// 부정확한 초기화
// x = [10,"hello"];
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // number은 substr을 가지고 있지 않습니다.

// let y: [string | number];
// y[3] = "world";
console.log(x);

console.clear();
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(Color);
console.log(c);

enum Color1 {Red = 1, Green = 2, Blue = 4}
let c1: Color1 = Color1.Green;
console.log(Color1);
console.log(c1);

enum Color2 {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(Color2);
console.log(colorName);

let notSure: any = 4;
notSure = "문자열일수도 있다";
notSure = false;
notSure = 4;

notSure.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed()
let list3: any[] = [1,true,"free"];
console.log(
  list3[1]
);
function warnUser(): void{
  console.log("This is my warning message");
}
warnUser();
let unusable: void = undefined;


let u:undefined = undefined;
let n:null = null;

// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안됩니다.
function error(message: string):never{
  throw new Error(message);
}

// 추론되는 반환 타입은 절대로 없습니다.
function fail(){
  return error("Someting failed");
}

// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안 됩니다.
function infiniteLoop():never{
  while(true){

  }
}

// error("Error!")

let someValue :any = "this is a string";
let strLength :number = (<string>someValue).length;
console.log( strLength );


let someValue1 :any = "this is a string";
let strLength1 : number = (someValue1 as string).length;
console.log( strLength1 );

function f(){
  var a = 10;
  return function g(){
    var b = a+1;
    return b;
  }
}

var g= f();
console.log(
  g()
);
console.clear();






// function sor(arr:Array<number>,type:Array<number>){
//   console.log(type,'type');
//   const idxList = type.map((i:number ,idx:number)=>idx);
//   console.log(idxList);

//   arr.reduce(item=>{

//   },[]);

//   return arr
// }

// const data = new Array(100).fill().map((i:any,idx:number)=>idx)


// console.log(
//   sor(data,[3,1,3])
// );
// console.log(
  
// );