console.log("es5");

const getGreeting = async () => {
  let greeting = "";
  await setTimeout(() => {
    greeting = "hello~";
  }, 3000);
  return greeting;
};

const helloWorld = async () => {
  const greeting = await getGreeting();
  console.log(greeting);
};

helloWorld();

// tsc --target es5 es5.ts => es5로 컴파일하면 library를 요구함(ES2015)
// tsc --target es6 es5.ts => es6로 컴파일하면 군말 없이 컴파일 해줌
