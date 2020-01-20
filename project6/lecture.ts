
// type은 좀더 다재다능한.
// type으로도 객체 똑같이 할수는 있음
// type Hello = string | number;
type Hello={
  ROCK:string
} | string;
const hi:Hello = 'g'// 스트링을 넣어도되고 객체를 넣어도 됨.
// 타입은 보통 또는이랑 같이씀.
// 객체를 쓸때는 인터페이스를 쓰는게 좋음 




let imgCoords = '0';

interface RSP{
  readonly ROCK:'0';
  readonly SCISSORS:'-142px';
  readonly PAPER:'-248px';
}
//readonly 값을 바꿀수 없게함

interface Example{
  [key:string]:number;
}
//뭐가 들어올지 모를떄 key값과 value값

const example:Example ={
  a:3,
  b:7
}


const rsp:RSP ={
  ROCK:'0',
  SCISSORS:'-142px',
  PAPER:'-248px',
};
//as const == 값을 바꿀수 없게함
// as const와 interface와 동일하게 하려면 RSP에 readonly를 붙혀줘야함.


const score ={
  ROCK:0,
  SCISSORS:1,
  PAPER : -1,
} as const;

function computerChoice(imgCoords:RSP[keyof RSP]):keyof RSP{
  return (Object.keys(rsp) as ['ROCK','SCISSORS','PAPER']).find((k)=>rsp[k] === imgCoords)
}

document.querySelectorAll('.btn').forEach((btn)=>{
  btn.addEventListener('click',function(){
    const myChoide = this.textContent;
    const myScore = score[myChoide];
    const computerScore = score[computerChoice(imgCoords)];
    const diff = myScore - computerScore;

    if(diff === 0){
      console.log('비겼습니다.');
    }else if([-1,2].indexOf(diff)){
      console.log('이겼습니다!!');
    }else{
      console.log('졌습니다.');
    }
  })
})