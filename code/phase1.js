const os = require('os')

const nano = {
  color: "red",
  brand: "tata",
  start(pass) {
    if (pass === "123") return console.log("Car is starting");
    console.log("Wrong password");
  },
  stop() {
    console.log("Car is stopped");
  },
  run: () => {
    console.log("Car is running");
  },
};

// console.log(nano)
const factoryFunc = (name, age, ...anything) => {
  return {
    name,
    age,
    anything: {...anything},
    greet(message) {
        console.log(message);
        return `${message} World`
    },
  };
};

// console.log(factoryFunc("Shikhar", 32, 1, 2, 4))


const obj = {
    name: "Shikhar",
    age: 21,
    normal() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name)
    }
}

// obj.normal();
// obj.arrow();

const test = (a, b) => {
  return {
    a,b, greet() {
      console.log("Hello World!");
    },
    save() {
      return this;
    }
  }
}

let a = test(1, 2);
a.a = 2;

// console.log(a.save())

const objProto = {
  run() {
    console.log("Running")
  }
}


// Constructor funcions

// const createObj = Object.create(objProto);
// createObj.a = "a"
// console.log(createObj.run());

function ProtoObj(a, b) {
  this.a = a;
  this.b = b
};

ProtoObj.prototype.call = function() {
  console.log("Say Hi");
}

const p = new ProtoObj("a", 1);
// p.call();


// __proto__ use

const animal = {
  eat() {
    console.log("Eating")
  }
}
const dog = {
  bark() {
    console.log("barking");
  }
}
const lion = {
  roar() {
    console.log("Roaring");
  }
}
dog.__proto__ = animal;
// dog.eat()

//  PROTO CHAINING
// Get protoType

// const car = { wheels: 4 };
const vehicle = { start() { console.log("Starting"); } }
const car = Object.create(vehicle, { wheels: { value: 4 },  speed: { value: 120 } });

// console.log(car.__proto__, vehicle)
// console.log(Object.getPrototypeOf(car));

// Set ProtoType

const newVehicle = { wheels: 3 }
Object.setPrototypeOf(car, newVehicle);
// console.log(car.wheels)

// Object create, assign

// let newObj = Object.create()
a = { a: 1, b: 2 };
let b = { a: 3, c: 4 };

// let c = {};
// c.__proto__ = a;
// c.__proto__ = b;
// console.log(c.__proto__.b)

let c = Object.assign({} , b, a);
console.log(c)
