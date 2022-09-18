type PersonA = {
  name: string;
  age: number;
};

type PersonB = {
  name: string;
  age: number;
  phone: string;
};

function greeting(person: PersonA | PersonB) {
  if ("phone" in person) {
    console.log("my name is b");
  } else {
    console.log("my name is a");
  }
}

greeting({ name: "a", age: 42 });
greeting({ name: "b", age: 42, phone: "010-0000-0000" });

// type 정보를 명시적으로 저장하는 방법
