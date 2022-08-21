const tuple = ["oasis", 42] as const;

type TupleToObject<T extends readonly any[]> = {};

// [P in K]: T[P];
type result = TupleToObject<typeof tuple>;

const mytuple: result = {
  oasis: "oasis", // string
  42: 42, // number
};

// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const a = "a";
