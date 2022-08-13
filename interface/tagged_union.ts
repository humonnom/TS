interface PersonA {
  name: "a";
}

interface PersonB {
  name: "b";
}

type Person = PersonA | PersonB;

function greeting(person: Person) {
  switch (person.name) {
    case "a": {
      console.log("my name is a");
      break;
    }
    case "b": {
      console.log("my name is b");
      break;
    }
  }
}

greeting({ name: "a" });
greeting({ name: "b" });

// type정보를 명시적으로 저장하는 방법
