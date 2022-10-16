var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("es5");
const getGreeting = () => __awaiter(this, void 0, void 0, function* () {
    let greeting = "";
    yield setTimeout(() => {
        greeting = "hello~";
    }, 3000);
    return greeting;
});
const helloWorld = () => __awaiter(this, void 0, void 0, function* () {
    const greeting = yield getGreeting();
    console.log(greeting);
});
helloWorld();
// tsc --target es5 es5.ts => es5로 컴파일하면 library를 요구함(ES2015)
// tsc --target es6 es5.ts => es6로 컴파일하면 군말 없이 컴파일 해줌
