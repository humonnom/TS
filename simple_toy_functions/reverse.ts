function myReverse<T>(input: T[]): T[] {
  let output = [];
  for (let i = input.length - 1; i >= 0; i--) {
    output.push(input[i]);
  }
  return output;
}

let sample = [1, 2, 3];
let reversed = myReverse(sample);
console.log(reversed); // 3,2,1

// Safety!
// reversed[0] = "1"; // Error!
// reversed = ["1", "2"]; // Error!

reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay
