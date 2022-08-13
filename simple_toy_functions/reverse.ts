const myReverse = (list: number[]): number[] => {
  return list.reduce((prev: number[], curr: number) => {
    console.log(prev, curr);
    return [curr, ...prev];
  }, []);
};

let sample = [1, 2, 3];
let reversed = myReverse(sample);
console.log(reversed);

reversed[0] = 1;
reversed = [1, 2];
