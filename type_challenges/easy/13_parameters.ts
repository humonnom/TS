type MyParameters<T> = T extends (...args: [...infer R]) => any ? R : never;

const foo = (arg1: string, arg2: number): void => {};
type FunctionParamsType = MyParameters<typeof foo>;

const params: FunctionParamsType = ["string", 42];
