interface MakeSimpleString {
  new (): string;
}

declare const Foo: MakeSimpleString;
const bar = new Foo();
