var hi = 'g'; // 스트링을 넣어도되고 객체를 넣어도 됨.
// 타입은 보통 또는이랑 같이씀.
// 객체를 쓸때는 인터페이스를 쓰는게 좋음 
var imgCoords = '0';
//뭐가 들어올지 모를떄 key값과 value값
var example = {
    a: 3,
    b: 7
};
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-248px'
};
//as const == 값을 바꿀수 없게함
// as const와 interface와 동일하게 하려면 RSP에 readonly를 붙혀줘야함.
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
}
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var myChoide = this.textContent;
        var myScore = score[myChoide];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log('비겼습니다.');
        }
        else if ([-1, 2].indexOf(diff)) {
            console.log('이겼습니다!!');
        }
        else {
            console.log('졌습니다.');
        }
    });
});
