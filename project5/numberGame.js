var body = document.body;
var candidate;
var array = [];
var hi = { a: 'b', b: 34 };
var hi2 = { a: 'b', b: 34 };
var hi3 = { a: '2', c: false };
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i += 1) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var answer = input.value;
    chooseNumber();
    console.log(array.join(''));
});
function world(a, b) {
    return b ? a + '1' : a + '2';
}
console.log(world('a', 5));
function world1(a) {
    return a ? a + '1' : a + '2';
}
console.log(world1());
// as const 확실하게 써보기
