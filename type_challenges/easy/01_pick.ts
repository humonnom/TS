type MyPick<T, K> = {
  [Property in keyof T & K]: T[Property];
};

type whole = {
  title: string;
  description: string;
  completed: boolean;
};

/***/

const justTitle: MyPick<whole, "title"> = {
  title: "title",
};

const titleAndDesc: MyPick<whole, "title" | "description"> = {
  title: "title",
  description: "desc",
};

const wholethings: MyPick<whole, "title" | "description" | "completed"> = {
  title: "title",
  description: "desc",
  completed: true,
};
