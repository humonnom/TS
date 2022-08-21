type Concat<T extends any[], U extends any[]> = [...T, ...U];
type ConcatResult = Concat<[1], [2]>; // expected to be [1, 2]

const result: ConcatResult = [1, 2];
