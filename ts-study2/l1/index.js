"use strict";
console.log("타입스크립트는 거저먹기?");
console.log("타입스크립트가 안정적이라 다시 못돌아감?ㅋ");
console.log("그정도로 좋다 이거즤?");
console.log("개 꿀딲~");
var example = {
    a: 3,
    b: 7,
    아무거나: 1
};
var imgSoords = "0";
var rsp = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
var imgCoords = "0";
// 초기화인데, 객체의 매개변수로 들어갈때 3개로 여러개로 들어가면 이런식으로 잡아줘야함
//타입의 범위를 줄이는게 중요함 => 익숙해지면
function computerChoice(imgCoords) {
    // 타입 범위를 좁게 강제로 바꿔줄수 있음. keys가 단순히 string으로 크게 범위를 잡고 있기 때문
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; });
    // 느낌표는 무조건 값이 있어 라고 해주는것, 타입스크립트에서는 언디파인일수도 있어 라고 경고해준것
}
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // this를 쓸땐 this의 타입을 첫번쨰 매개변수로 넣어줘야한다고함
        var mychoice = this.textContent;
        // keyof를 쓰게되면
        var myScore = score[mychoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다.");
        }
        else if ([-1, 2].indexOf(diff)) {
            console.log("이겼습니다!!");
        }
        else {
            console.log("졌습니다 ㅠㅠ");
        }
    });
});
var arr = [
    {
        hello: "world",
        world: "1"
    },
    {
        hello: "world",
        world: "1"
    },
    {
        hello: "world",
        world: "1"
    },
];
arr[0].zz = "hel";
console.log(arr, "arr");
