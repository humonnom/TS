type TupleToUnion<T extends any[]> = T["length"] extends 1
  ? T[0]
  : T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
