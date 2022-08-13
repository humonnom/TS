type Fruits = {
  readonly banana: string;
  readonly apple: string;
};

let fruits: Fruits = {
  banana: "is delecious",
  apple: "is my favorite",
};

// fruits.banana = "I hate banana"; // error

class Car {
  readonly police = "🚓";
  normal = "🚗";
}

console.log(new Car().police);

const car = new Car();
car.normal = "🚙";
console.log(car.normal);

type Coffee = {
  latte: string;
};

type RCoffee = Readonly<Coffee>;

let coffee: RCoffee = { latte: "hot" };
// coffee.latte = "ice"; // error
