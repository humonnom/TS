enum Simple {
  Loading = 3,
  Done = 6,
  Unknown,
}
enum Simple {
  ADD,
}

const enum ConstSimple {
  Loading,
  Done,
}

console.log(Simple.Loading);
console.log(ConstSimple.Loading);
