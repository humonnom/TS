function greeting(person) {
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
