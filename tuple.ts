type Tuple = [number, number];
interface Tuple2 {
  0: number;
  1: number;
}

const numbers: Tuple = [1, 2];
const numbers2: Tuple2 = [1, 2];

numbers.concat();
// numbers2.concat(); //error: concat does not exist on Type Tuple2

// 둘 다 가능은 한데, 인터페이스로 선언하면 튜플의 메서드를 사용할 수 없다.

type WhatIsThis = [string, ...number[]];

const iDontKnowYet: WhatIsThis = ["string", 1, 2, 3];
