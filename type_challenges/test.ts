interface Optimizer {
  optimize: () => {};
}

class SomeOptimizer implements Optimizer {
  optimize: () => {};
}

function test<T extends new (...args: boolean[]) => {}>(
  arg1?: T,
  arg2?: boolean
) {}

test(SomeOptimizer, true);
