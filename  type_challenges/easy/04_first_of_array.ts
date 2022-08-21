type First<T extends any[]> = T[0];

type a = First<["a", "b"]>;
type b = First<["b", "a"]>;
type empty = First<[]>;

const valueA: a = "a";
const valueB: b = "b";
const valueEmpty: empty = undefined;
