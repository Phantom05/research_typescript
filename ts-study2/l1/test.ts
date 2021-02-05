const root = document.getElementById("root");

interface Data {
  id: number;
  text: string;
  checked: boolean;
}

const data: Data[] = [
  {
    id: 1,
    text: "test1",
    checked: true,
  },
  {
    id: 2,
    text: "test2",
    checked: false,
  },
];

function makeTotoItem() {}
function makeTotoList(data: Data[]): HTMLDivElement[] {
  return data.map((i, idx) => {
    const wrapper = document.createElement("div");
    const text = document.createElement("p");
    const isChcked = i.checked;
    if (isChcked) {
      text.classList.add("checked");
    }
    wrapper.classList.add("todo__item_box");
    text.innerHTML = i.text;
    wrapper.append(text);
    return wrapper;
  });
}

function insertTotoList(list: HTMLDivElement[]) {
  document.getElementById("root").append(...list);
}

insertTotoList(makeTotoList(data));
