"use strict";
// class Card implements ICard{
var Card = /** @class */ (function () {
    function Card(hero, mine) {
        if (hero) {
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
        if (mine) {
            this.mine = true;
        }
    }
    return Card;
}());
var card = new Card(true, false);
var a = {
    add: function (a, b) { return a + b; }
};
var b = {
    add: function (a, b) { return a + b; }
};
a.add(1, 2);
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach([1, 2, 3], function (item) {
    console.log(item);
});
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.clear();
var darr = Array(10)
    .fill(40000000)
    .reduce(function (acc, i) { return (acc += i + acc * 0.2); }, 0);
console.log(numberWithCommas(Math.ceil(darr)) + "\uC6D0");
// NOTE: 비구조화할당 타입은 동일하게 써주면됨
// 매개변수 바로 뒤에 써주는게 아니고 객체로 똑같이 열어서 써주면됨
function createDeck(_a) {
    var mine = _a.mine, count = _a.count;
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
