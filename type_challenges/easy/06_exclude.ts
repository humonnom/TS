type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type ageOnly = Pick<
  {
    name: string;
    age: number;
  },
  Exclude<"name" | "age", "name">
>;

const objExample: ageOnly = {
  age: 23,
};
