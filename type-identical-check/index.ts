type MyEqual<X, Y> = 
(<T>() => T extends X ? 1 : 2) extends
(<T>() => T extends Y ? 1 : 2)
  ? true
  : false;

/** 앞의 괄호의 결과가 1혹은 2가 되고
 *  뒤 괄호의 결과가 1혹은 2가 되는데
 * 그게 일치하면 true이고
 * 서로 일치하지 않으면 false이다.
 * 괄호 안의 내용:
 *    '<T>() => T'가 X, Y와 일치하는지 체크하고 있음
 *
 */

type a = {
  name: string;
};

type b = {
  name: string;
};

type someArrowFuncType = <T>() => T; // 함수 타입 지정

const someArrowFunc: someArrowFuncType = () => someArrowFunc();
