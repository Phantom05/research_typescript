type TreeNode = {
  value: string;
};
type LeafNode = TreeNode & {
  isLeaf: true;
};
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};
let a: TreeNode = { value: "a" };
let b: LeafNode = { value: "b", isLeaf: true };
let c: InnerNode = { value: "c", children: [b] };

let a1 = mapNode(a, (_) => _.toUpperCase()); //TreeNode;
let b1 = mapNode(b, (_) => _.toUpperCase()); //LeafNode;
let c1 = mapNode(c, (_) => _.toUpperCase()); // InnerNode

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}

type HasSides = { numberOfSides: number };
type SideHaveLength = { sideLength: number };

type Square = HasSides & SideHaveLength;
let square: Square = { numberOfSides: 4, sideLength: 3 };

function logPerimeter<Shape extends HasSides & SideHaveLength>(
  s: Shape
): Shape {
  console.log(s.numberOfSides * s.sideLength);
  return s;
}

logPerimeter(square);

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
//   return f(...args);
// }

function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

let t_a = call(fill, 10, "a");
// let t_b = call(fill,10); //ERROR: 3개의 인구수가 필요한대 2개가 전달됨
// let t_c = call(fill,10,'a','z') //ERROR: 3개의 인구수가 필요한대 4개가 전달됨

// NOTE: 제내릭에도 기본값을 넣어 줄 수 있음
type MyEvent2<T = HTMLElement> = {
  target: T;
  type: string;
};

type MyEvent3<T extends HTMLElement = HTMLElement> = {
  target: T;
  type: string;
};

// NOTE: 기본 타입을 갖는 제네릭은 반드시 기본 타입을 갖지 않는 제네릭의 뒤에 위치해야한다. 그래야 값이 없을 때 기본값으로 들어가는것을 방지할 수 있음.
