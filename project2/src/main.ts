import {sayHello} from './greet';
import {helloTs} from './hello';

// function hello(compiler:string){
//   return `Hello from ${compiler}`;
// }

function showHello(divName: string, name: string){
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello("greeting","TypeScript");
console.log(
  helloTs("TypeScript")
);