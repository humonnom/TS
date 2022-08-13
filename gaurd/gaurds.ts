class ClassA {
  name = "a";
}

class ClassB {
  name = "b";
}

const a = new ClassA();
const b = new ClassB();

if (a instanceof ClassA) console.log("yes");
if (b instanceof ClassB) console.log("yes");

if ("name" in a) console.log("yes");
if ("name" in b) console.log("yes");
