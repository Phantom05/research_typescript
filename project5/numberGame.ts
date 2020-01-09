const {body} = document;
let candidate: number[];
let array:number[] = [];

interface hello{
  a:string,
  b?:number;
}
interface helloChild extends hello{
  c?:boolean;
}

type hello2 ={
  a:string,
  b?:number;
}

type stringOrNumber = string | number;

const hi: hello ={a:'b',b:34};
const hi2: hello ={a:'b',b:34};
const hi3 : helloChild ={a:'2',c:false};

function chooseNumber():void{
  candidate = [1,2,3,4,5,6,7,8,9];
  array = [];
  for(let i:number = 0; i < 4; i+=1){
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
}

const result = document.createElement('h1');
body.append(result);
const form = document.createElement('form');
body.append(form);
const input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
const button = document.createElement('button');
button.textContent = '입력!';

form.append(button);

let wrongCount = 0;
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const answer = input.value;
  chooseNumber()
  console.log(
    array.join('')
  );
});


function world(a:string,b?:number):string{
  return b ? a + '1': a + '2';
}
console.log(
  world('a',5)
);


function world1(a?:string):string{
  return a ? a + '1': a + '2';
}
console.log(
  world1()
);

// as const 확실하게 써보기



// function add(a:number,b:number):(c:string)=>(d:string)=>boolean{
//   return (c:string) =>{
//     return (d:string)=>{
//       return false;
//     }
//   }
// }



function add(a:number):(b:number)=>(c:number)=>number{
  return (b:number)=> (c:number)=> a + b + c
}

console.log(
  add(10)(50)(100)
);