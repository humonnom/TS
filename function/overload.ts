function simple(a: number): void;
function simple(a: number, b: number): void;
function simple(a: number, b: number, c: number): void;

function simple(a: number, b?: number, c?: number) {
  console.log("simple");
}

simple(1);
simple(1, 2);
simple(1, 2, 3);

type differentTypeOverload = {
  (a: number): number;
  (a: string): string;
};

function work(a: number): number;
function work(a: string): string;
function work(a: any): any {
  if (typeof a === "number") return 42;
  else if (typeof a === "string") return "42";
}

const overloadedWork: differentTypeOverload = work;
console.log(overloadedWork(42));
console.log(overloadedWork("42"));
