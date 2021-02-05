// 클래스의 임플리먼츠 인터페이스가 더 높은 집합을 가지고 있어야함
interface ICard {
  att: number;
}
// class Card implements ICard{
class Card {
  public att?: number;
  protected hp: number;
  private cost: number;
  private mine: boolean;
  constructor(hero: boolean, mine: boolean) {
    if (hero) {
    } else {
      this.att = Math.ceil(Math.random() * 5);
      this.hp = Math.ceil(Math.random() * 5);
      this.cost = Math.floor((this.att + this.hp) / 2);
    }

    if (mine) {
      this.mine = true;
    }
  }
}

const card = new Card(true, false);

// interface Example {
//   add: (a: number, b: number) => number;
// }

// const ex: Example = {
//   add: (a, b) => a + b,
// };
// 인터페이스는 함수할떄 잘 안쓴다고함

// type T = string | number;
// function add<T>(a: T, b: T): T {
//   return a + b;
// }

// add(1, "abc");
// //NOTE: 숫자끼리 더하거나 문자끼리 가능하게, 숫자와 문자는 안되게, 이럴떄 보통 제네릭을 씀
// add(1, 2);
// add("a", "b");

// NOTE: 제네릭
interface obj66<T> {
  add: (a: T, b: T) => T;
}

const a: obj66<number> = {
  add: (a, b) => a + b,
};
const b: obj66<string> = {
  add: (a, b) => a + b,
};

a.add(1, 2);

function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i: number = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach<number>([1, 2, 3], (item) => {
  console.log(item);
});

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.clear();

const darr = Array(10)
  .fill(40000000)
  .reduce((acc, i) => (acc += i + acc * 0.2), 0);

console.log(`${numberWithCommas(Math.ceil(darr))}원`);

// NOTE: 비구조화할당 타입은 동일하게 써주면됨
// 매개변수 바로 뒤에 써주는게 아니고 객체로 똑같이 열어서 써주면됨
function createDeck({ mine, count }: { mine: boolean; count: number }) {
  console.log(mine);
}

// function createHero({ming}:{ming:boolean}){
//   const player = mine ? me : opponent;
//   player.heroData = new createHero(mine);
//   connectCardDom({data:player.heroData,DOM:player.hero,hero:true});
// }
// NOTE: 느낌표를 붙이는 경우는 html을 인지하지 못하기 때문에 잇다고 확신을 주는 키워드
// function connectCardDOM({data,DOM,hero = false}:{data:Card,DOM:HTMLDivElement,hero?:boolean}){
//   const cardEl = document.querySelector('.card hidden .card')!.cloneNode(true);
//   cardEl.querySelector('.card-att')!.textContent = String(data.att);
//   cardEl.querySelector('.card-hp')!.textContent = String(data.hp);
//   if(hero){
//     cardEl.querySelector
//   }
// }

// connectCardDOM({data:target.heroData!}) // 이렇게 e.target의 경우 ts에서 인식을 못함으로 !로 강제로 있다고 인식시킬수있음
