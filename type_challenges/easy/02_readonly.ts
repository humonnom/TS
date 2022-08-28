interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [Property in keyof T]: T[Property];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

const todo2: Readonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

/** my */
todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

/** origin */
// todo2.title = "Hello"; // Error: cannot reassign a readonly property
// todo2.description = "barFoo"; // Error: cannot reassign a readonly property
