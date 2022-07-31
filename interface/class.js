var PersonA = /** @class */ (function () {
    function PersonA() {
    }
    return PersonA;
}());
var PersonB = /** @class */ (function () {
    function PersonB() {
    }
    return PersonB;
}());
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
// typ정보를 명시적으로 저장하는 방법
