"use strict";
var root = document.getElementById("root");
var data = [
    {
        id: 1,
        text: "test1",
        checked: true
    },
    {
        id: 2,
        text: "test2",
        checked: false
    },
];
function makeTotoItem() { }
function makeTotoList(data) {
    return data.map(function (i, idx) {
        var wrapper = document.createElement("div");
        var text = document.createElement("p");
        var isChcked = i.checked;
        if (isChcked) {
            text.classList.add("checked");
        }
        wrapper.classList.add("todo__item_box");
        text.innerHTML = i.text;
        wrapper.append(text);
        return wrapper;
    });
}
function insertTotoList(list) {
    var _a;
    (_a = document.getElementById("root")).append.apply(_a, list);
}
insertTotoList(makeTotoList(data));
