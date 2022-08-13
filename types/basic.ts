// compile: npx ts-node basic.ts

/** basic */

let num: number = 123;

function num2String(num: number): string {
  return num.toString();
}

console.log(num2String(num));

/** array */
const names: string[] = ["jueun park", "chulsu kim", "younghui jeoung"];

/** interface */
interface Name {
  first: string;
  last: string;
}

let jueun: Name; // set type

jueun = {
  first: "jueun",
  last: "park",
};

/** inline type annotation */

let chulsu: {
  // set type
  first: string;
  last: string;
};

chulsu = {
  first: "chulsu",
  last: "kim",
};

/** void */

function doNothing(): void {}
