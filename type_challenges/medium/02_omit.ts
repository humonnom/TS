/** solution 01 */
// type MyPick<T, K> = {
//   [Property in keyof T & K]: T[Property];
// };

type MyExclude<T, U> = T extends U ? never : T;

//type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>;

/** solution 02 */

type MyOmit<T, K> = {
  [P in MyExclude<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
