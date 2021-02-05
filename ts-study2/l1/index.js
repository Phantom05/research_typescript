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
// NOTE:
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
var interval;
var point = 0;
document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        // this를 쓸땐 this의 타입을 첫번쨰 매개변수로 넣어줘야한다고함
        clearInterval(interval);
        setTimeout(function () {
            intervalMaker();
        }, 2000);
        var mychoice = this.textContent;
        // keyof를 쓰게되면
        var myScore = score[mychoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다.");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다!!");
            point++;
        }
        else {
            console.log("졌습니다 ㅠㅠ");
            point--;
        }
        document.querySelector("#point").textContent = String(point);
    });
});
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        // computer가 반드시 잇기 때문에 개발자는 아는데 타입스크립트는 html을 인지하지 못하기 때문에 에러가남 그래서 앞에 computer가 널일수 있기 때문에 에러가 나고, 이것을 확신을 주기위해 느낌표를 써준다
        // 제네릭을 써써 할거면 변수에 넣어줘야한다
        var computer = document.querySelector("#computer");
        // console.log(computer);
        if (computer) {
            computer.style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0";
            // (document.querySelector('#computer') as HTMLDivElement).style.background = "url(https://)"
            // 그냥 Element에는 style이 없고 HTMLDivElement에는 style이 있음
        }
    }, 100);
}
// intervalMaker();
// querySelector를 쓰면 타입스트크립트는 에러가난다 그래서 항상 제네릭이나 as HTMLDivElement로 풀어줘야함
// 항상 (document.querySelector('#computer') as HTMLDivElement)
function buildName(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.first, first = _c === void 0 ? "Bob" : _c, _d = _b.last, last = _d === void 0 ? "Smith" : _d;
    return first + " " + last;
}
console.log(buildName());
var obj34 = {
    test: 1,
    test1: 4
};
// 타입스크립트의 경우 document를 인식 하지 못함으로 null HTML 타입일떄 null 이뜨면 as HTMLDivElement 이런식으로 타입의 범위롤 좁혀줘야함
var me = {
    hero: document.getElementById("my-hero"),
    // deck:document.getElementById('me-deck')
    deck: document.getElementById("me-deck"),
    field: document.getElementById("me-field"),
    cost: document.getElementById("me-cost"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    shosenCardData: null
};
