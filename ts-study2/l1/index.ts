console.log("타입스크립트는 거저먹기?");
console.log("타입스크립트가 안정적이라 다시 못돌아감?ㅋ");
console.log("그정도로 좋다 이거즤?");
console.log("개 꿀딲~");

interface Example {
  a: number;
  b: number;
  [key: string]: number;
}

const example: Example = {
  a: 3,
  b: 7,
  아무거나: 1,
};

interface Todo {
  id: number;
  text: string;
  due: Date;
}

// TodoKeys의 타입 = "id" | "text" | "due"
type TodoKeys = keyof Todo;

interface arrProps {
  hello: string;
  world: string;
  zz?: string;
}

var arr: arrProps[] = [
  {
    hello: "world",
    world: "1",
  },
  {
    hello: "world",
    world: "1",
  },
  {
    hello: "world",
    world: "1",
  },
];
arr[0].zz = "hel";
console.log(arr, "arr");

// NOTE:
let imgSoords = "0";

interface RSP {
  readonly ROCK: "0";
  readonly SCISSORS: "-142px";
  readonly PAPER: "-284px";
}
const rsp: RSP = {
  ROCK: "0",
  SCISSORS: "-142px",
  PAPER: "-284px",
};

const score = {
  ROCK: 0,
  SCISSORS: 1,
  PAPER: -1,
} as const;

let imgCoords: RSP[keyof RSP] = "0";
// 초기화인데, 객체의 매개변수로 들어갈때 3개로 여러개로 들어가면 이런식으로 잡아줘야함
//타입의 범위를 줄이는게 중요함 => 익숙해지면

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  // 타입 범위를 좁게 강제로 바꿔줄수 있음. keys가 단순히 string으로 크게 범위를 잡고 있기 때문
  return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
    (k) => rsp[k] === imgCoords
  )!;
  // 느낌표는 무조건 값이 있어 라고 해주는것, 타입스크립트에서는 언디파인일수도 있어 라고 경고해준것
}

let interval: number;
let point = 0;
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
    // this를 쓸땐 this의 타입을 첫번쨰 매개변수로 넣어줘야한다고함

    clearInterval(interval);
    setTimeout(function () {
      intervalMaker();
    }, 2000);
    const mychoice = this.textContent as keyof RSP;
    // keyof를 쓰게되면
    const myScore = score[mychoice];
    const computerScore = score[computerChoice(imgCoords)];
    const diff = myScore - computerScore;

    if (diff === 0) {
      console.log("비겼습니다.");
    } else if ([-1, 2].includes(diff)) {
      console.log("이겼습니다!!");
      point++;
    } else {
      console.log("졌습니다 ㅠㅠ");
      point--;
    }

    (document.querySelector("#point") as HTMLDivElement).textContent = String(
      point
    );
  });
});

function intervalMaker() {
  interval = setInterval(function () {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS;
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER;
    } else {
      imgCoords = rsp.ROCK;
    }

    // computer가 반드시 잇기 때문에 개발자는 아는데 타입스크립트는 html을 인지하지 못하기 때문에 에러가남 그래서 앞에 computer가 널일수 있기 때문에 에러가 나고, 이것을 확신을 주기위해 느낌표를 써준다

    // 제네릭을 써써 할거면 변수에 넣어줘야한다
    const computer = document.querySelector<HTMLDivElement>("#computer");
    // console.log(computer);
    if (computer) {
      computer.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
      // (document.querySelector('#computer') as HTMLDivElement).style.background = "url(https://)"
      // 그냥 Element에는 style이 없고 HTMLDivElement에는 style이 있음
    }
  }, 100);
}
// intervalMaker();

// querySelector를 쓰면 타입스트크립트는 에러가난다 그래서 항상 제네릭이나 as HTMLDivElement로 풀어줘야함
// 항상 (document.querySelector('#computer') as HTMLDivElement)

function buildName({
  first = "Bob",
  last = "Smith",
}: { first?: string; last?: string } = {}): string {
  return first + " " + last;
}

console.log(buildName());

interface TTT {
  test: number;
}

interface Exaample extends TTT {
  test1: number;
}

const obj34: Exaample = {
  test: 1,
  test1: 4,
};

//제로초는 객체는 보통 인터페이스로하고, 유니언쓸떄는 타입을 쓴다고함
// 인터페이스는 보통 대문자로 짓는다고함

interface Player {
  hero: HTMLDivElement;
  deck: HTMLDivElement;
  field: HTMLDivElement;
  cost: HTMLDivElement;
  deckData: Card[];
  heroData?: Card;
  fieldData?: Card[];
  chosenCard?: HTMLDivElement;
  shosenCardData?: Card;
}

// 타입스크립트의 경우 document를 인식 하지 못함으로 null HTML 타입일떄 null 이뜨면 as HTMLDivElement 이런식으로 타입의 범위롤 좁혀줘야함
const me: Player = {
  hero: document.getElementById("my-hero") as HTMLDivElement,
  // deck:document.getElementById('me-deck')
  deck: document.getElementById("me-deck") as HTMLDivElement,
  field: document.getElementById("me-field") as HTMLDivElement,
  cost: document.getElementById("me-cost") as HTMLDivElement,
  deckData: [],
  heroData: null,
  fieldData: [],
  chosenCard: null,
  shosenCardData: null,
};
