export function NumberWithComma(number: number | string) {
  return number;
}

export function test(): void {
  console.clear();
  console.log("hello javascript");
  console.log("hello typescript");

  const a: number = 1;
  console.log(a * 6);

  let numberOne = Math.ceil(Math.random() * 9);
  let numberTwo = Math.ceil(Math.random() * 9);

  const word = document.createElement("div");
  word.textContent = `${numberOne} 곱하기 ${numberTwo}`;

  // document.body.append(word);

  const abc = 10;
  const bbb = "10";

  console.log("hello world");

  console.log(abc, bbb);
  console.clear();
  let number: number = 3;
  let str: string = String(number);
  console.log(str, "str !!");

  let arr: [boolean, 5, string] = [true, 5, "true"]; //tuple이라고 불름

  console.log(arr, "arr");

  let aaa = { a: "s" } as const;
  // aaa.a = "hello"; // 객체 콘스트를 못바꾸게 조질수있음. freeze처럼

  console.log(aaa, "aaa");
  const obj: { a: string; b?: number } = { a: "b" };
  console.log(obj, "333");

  // enum Color {
  //   Red,
  //   Green,
  //   Blue,
  // }
  // let c: Color = Color[0];
  // console.log(c);

  function add(a: number, b: number): (c: string) => (d: string) => boolean {
    console.log(a, b, "number a, b");
    return (c: string) => {
      console.log(c, "string a");
      return (d: string) => {
        return false;
      };
    };
  }

  // 반환할때, 고차함수일때 가장 위에만 반환값을 쓰고 함수의 경우 매개변수는 똑같이 써주고 반환하때 반환값만 boolean 으로 써줌

  console.log(add(5, 10)("zzz")("ㅋ"));

  const obj2: { a: (b: number, c?: string) => string } = {
    a(b: number) {
      return " hello";
    },
  };
  console.log(obj2.a(2));
  // console.log(obj2.a());
  // console.log(obj2.a('hello'));
  // console.log(obj2.a(null,'hello'));

  const arr2: number[] = [];
  arr2.push(3);

  const hello: number = 3;
  // NOTE: type 케스팅
  // (hello as unknown as string).substr(1,2);
  // (<string><unknown>hello).substr(1,2);
  console.log(hello);

  //
  //
  //

  //   enum Progress {
  //   NONE,
  //   IN_PROGRESS,
  //   FINISH,
  // }

  // type tObjProp ={
  //   depth:number,
  //   // progress:Progress
  // }
  // const tObj:{id:tObjProp} = {
  //   id:{
  //     depth:5,
  //   },
  //   id1:{
  //     depth:5,
  //   },
  // }
  // console.log(tObj);
  // type VecId = number;

  // class Vec {
  //   id: VecId;
  //   nexts: number[];

  //   constructor(id: number, ...nexts: number[]) {
  //     this.id = id;
  //     this.nexts = nexts;
  //   }
  // }

  // const datas = [new Vec(0, 1), new Vec(1, 2, 3), new Vec(2, 0), new Vec(3, 4)];

  // enum Progress {
  //   NONE,
  //   IN_PROGRESS,
  //   FINISH,
  // }

  // type Hash = {
  //   [key in VecId]: {
  //     depth: number;
  //     progress: Progress;
  //   };
  // };

  // console.log(datas);

  // function scc() {
  //   const IN_PROGRESS = 1;
  //   const FINISH = 2;

  //   const hash: Hash = {};
  //   const stack = [];
  //   return;

  //   return (function recursive() {

  //   })();
  // }

  baseBallgame();
  interfaceStudy();
}

function baseBallgame() {
  const { body } = document;
  let candidate: number[];
  let array: number[] = [];

  function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidate.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array.push(chosen);
    }
  }

  chooseNumber();

  const result = document.createElement("h1");
  body.append(result);
  const form = document.createElement("form");
  body.append(form);
  const input = document.createElement("input");
  form.append(input);
  input.type = "text";
  input.maxLength = 4;
  const button = document.createElement("button");
  button.textContent = "입력!";
  form.append(button);

  let wrongCount: number = 0;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(wrongCount);
    result.textContent = "홈런";
    input.value = "";
  });
}

function interfaceStudy() {
  console.clear();
  interface hello {
    a: string;
    b: number;
  }
  interface helloChild extends hello {
    c: string;
  }

  const obj: helloChild = {
    a: "e",
    b: 4,
    c: "s",
  };
  console.log(obj);
  // 타입 보고싶으면 Definitly lodash 이런식으로 데피니 틀리를 검색하면됨
  const rsp = {
    ROCK: "0",
    SCISSOR: "-142px",
    PAPER: "-284px",
  } as const;

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const myChoice = this.textContent;
    });
  });
}
