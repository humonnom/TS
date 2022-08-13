type convert2string = {
  (a: number): string;
};

type convert2number = (a: string) => number;

const convert2number = (a: string) => {
  return Number(a);
};
