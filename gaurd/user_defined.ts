/**
 * User Defined Type Guard!
 */

interface Banana {
  banana: number;
  common: string;
}

function isFoo(arg: any): arg is Banana {
  return arg.banana !== undefined;
}
