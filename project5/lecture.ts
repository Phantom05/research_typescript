let num : number;
num = 3;
let str: string = 'hello';
let arr: (string | number | boolean)[] = [true,2,'3'];
let arr1: [boolean,number,string] = [true,2,'3'];
arr1[1] = 10;

const obj:{a:string,b?:number} = {a:'b'};
obj.b = 10;


console.log(
  obj,num
);

enum Color {Red, Green, Blue};
let c:Color;
console.log(Color.Green);

const a = true? 'b' : 'c';
// const a = obj?.name

// 리턴값을 :number로 적음
function f(a:number,b:number):number{
  return a + b;
}


function f1(a:number,b:number):(number | string){
  return a + b;
}

console.log(
  f1(10,52)
);

// 함수에 리턴을 안적어주면 void다
function f2(a?:number):void{
  console.log('hello world');
}
console.log(
  f2()
);

// function add(a:number,b:number):(c:string)=>(d:string)=>boolean{
//   return (c:string) =>{
//     return (d:string)=>{
//       return false;
//     }
//   }
// }

// 오버로딩
const obj2:{a:(b?:number, c?:string)=>string} = {
  a(b?: number, c?:string){
    return 'hello'
  }
}
console.log(
  obj2.a(),obj2.a(10)
);

//타입을 빈배열로 만들어서 push를하면 에러가남
const arr2:[] = [];
// arr2.push(3);

const arr3: (any)[] = [];
arr3.push(56);
console.log(arr3);

const hello: number = 3;
// (hello as unknown as string).substr(1,2);
// (<string><unknown>hello)

console.clear();


