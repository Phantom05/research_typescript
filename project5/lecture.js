var num;
num = 3;
var str = 'hello';
var arr = [true, 2, '3'];
var arr1 = [true, 2, '3'];
arr1[1] = 10;
var obj = { a: 'b' };
obj.b = 10;
console.log(obj, num);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c;
console.log(Color.Green);
var a = true ? 'b' : 'c';
// const a = obj?.name
// 리턴값을 :number로 적음
function f(a, b) {
    return a + b;
}
function f1(a, b) {
    return a + b;
}
console.log(f1(10, 52));
// 함수에 리턴을 안적어주면 void다
function f2(a) {
    console.log('hello world');
}
console.log(f2());
function add(a, b) {
    return function (c) {
        return function (d) {
            return false;
        };
    };
}
// 오버로딩
var obj2 = {
    a: function (b, c) {
        return 'hello';
    }
};
console.log(obj2.a(), obj2.a(10));
//타입을 빈배열로 만들어서 push를하면 에러가남
var arr2 = [];
// arr2.push(3);
var arr3 = [];
arr3.push(56);
console.log(arr3);
var hello = 3;
// (hello as unknown as string).substr(1,2);
// (<string><unknown>hello)
console.clear();
