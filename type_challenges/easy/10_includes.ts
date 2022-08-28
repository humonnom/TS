type Equal<T, U> = T extends U ? (U extends T ? true : false) : false;

type MyEqual<X, Y> = 
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2)
  ? true
  : false;

type Includes<T extends readonly any[], U> = T extends [infer R, ...infer Rest]
  ? MyEqual<U, R> extends true
    ? true
    : Includes<Rest, U>
  : false;

type isPillarMen = Includes<[{}], { a: "A" }>;

const includesResult: isPillarMen = false;
