class PersonA {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class PersonB {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

function greeting(person) {
  if (person instanceof PersonA) {
    console.log("my name is a");
  } else if (person instanceof PersonB) {
    console.log("my name is b");
  }
}

greeting(new PersonA("a"));
greeting(new PersonB("b"));

// type 정보를 명시적으로 저장하는 방법
