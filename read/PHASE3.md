## 🧩 Encapsulation

Encapsulation = hiding internal details and exposing only what’s necessary.
- It protects internal state (data) from direct external modification.
- You define what the outside world can see and do via methods.
- Prevents accidental or malicious interference.

In JavaScript, true encapsulation became possible only with private fields (`# syntax`).

### ⚙️ 1️⃣ Before ES2022 — Fake Privacy

Before private fields existed, devs used conventions like:
```js
class User {
  constructor(name) {
    this._name = name; // “_” means private by convention only
  }
}
const u = new User("Shikhar");
console.log(u._name); // can still access! ❌ not private
```

✅ Convention only, not enforced.
❌ Anyone can still read or modify `_name`.

## 🧠 2️⃣ ES2022+ — True Private Fields using `#`

Example:
```js
class User {
  #name; // private field declaration
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name; // access inside class ✅
  }

  setAge(age) {
    if (age > 0) this.#age = age; // controlled write
  }
}

const u1 = new User("Shikhar", 21);

console.log(u1.getName()); // ✅ Shikhar
console.log(u1.#name);     // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class
```

✅ True privacy — cannot even accidentally access it from outside.
✅ JS engine enforces this at compile time, not runtime.
✅ Private fields live in the same heap object, but are not enumerable or visible.

### 🔍 3️⃣ Key Rules of Private Fields

| Rule                              | Meaning                                       |
| --------------------------------- | --------------------------------------------- |
| Must start with `#`               | Declared inside the class                     |
| Only accessible inside that class | Not from outside, not from subclasses         |
| Not part of `this`                | Not accessible with `this["#name"]`           |
| Not enumerable                    | Won’t appear in `Object.keys()` or `for...in` |
| Must be declared before use       | Unlike public fields                          |

### ⚙️ 4️⃣ Private Methods and Accessors

You can also make methods or getters/setters private:

```js
class Account {
  #balance = 0;

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
  }

  #validateAmount(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(100);
console.log(acc.getBalance()); // 100
acc.#validateAmount(10); // ❌ SyntaxError
```

✅ `#validateAmount` is a private method, used only inside the class.
✅ Provides secure control over how data changes.

### 🧬 5️⃣ Comparison: Public vs Private

| Feature                    | Public Field | Private Field (`#`)           |
| -------------------------- | ------------ | ----------------------------- |
| Declaration                | `name = "A"` | `#name = "A"`                 |
| Accessible outside         | ✅ Yes        | ❌ No                          |
| Visible in `Object.keys()` | ✅ Yes        | ❌ No                          |
| Inherited by subclasses    | ✅ Yes        | ❌ No                          |
| Purpose                    | Public API   | Hidden implementation details |


### 🧠 6️⃣ Example — Encapsulation in Practice

Let’s build a BankAccount class using encapsulation:

```js
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance; // controlled access
  }
}

const acc = new BankAccount("Shikhar");
acc.deposit(1000);
acc.withdraw(400);
console.log(acc.balance); // ✅ 600
console.log(acc.#balance); // ❌ SyntaxError
```

✅ Data safety guaranteed.
✅ Only controlled access via `deposit`, `withdraw`, and `getter`.

### ⚙️ 7️⃣ Why This Is a Big Deal

- Enforces data integrity at language level.
- Prevents leaking sensitive logic (tokens, configs, passwords).
- Useful in frameworks, SDKs, or security-critical code.
- No need for WeakMaps or Symbols to hide data.
- Memory-efficient — all private fields stored on the same internal object.

### 🧩 8️⃣ Mixing Encapsulation with Inheritance

Private fields are not inherited.

```js
class A {
  #x = 10;
  getX() { return this.#x; }
}

class B extends A {
  print() {
    // console.log(this.#x); ❌ Not accessible
    console.log(this.getX()); // ✅ Works through public method
  }
}

new B().print(); // 10
```

✅ Use public/protected methods to expose what subclasses should access.

### 🧠 9️⃣ Internal Mechanics (Memory Level)

When you instantiate:

```js
const u1 = new User("Shikhar");
```

The JS engine creates:
- A normal object in the heap for public fields (`this.name`, etc.)
- A hidden internal slot for private fields (`#name`, `#age`)
- These slots are not accessible by property name, only through class context.

So:

```lua
u1
 ├─ name: "Shikhar"
 └─ [[PrivateFields]]:
       #age: 21
       #name: "Shikhar"
```

Only methods *inside* the class can access those hidden slots.

### ✅ TL;DR Summary

| Concept           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `#field`          | Declares a truly private variable inside a class     |
| Access            | Only within class body                               |
| Visibility        | Hidden from outside & tools like `Object.keys()`     |
| Benefit           | Strong encapsulation & data protection               |
| Alternative (old) | WeakMap / closures / underscore `_` naming           |
| Version           | ES2022+ (supported in Node 12+, all modern browsers) |


## ⚙️ Abstraction 

### 🧩 Concept

Abstraction means:

> Hiding internal complexity and exposing only the essential functionality through a clear public interface.

It allows you to simplify usage, reduce coupling, and protect logic from being directly accessed or misused.

Think of it like this:

> You drive a car without knowing how the engine, fuel injection, or sensors work — you just use the steering, brakes, and accelerator.

In JavaScript, we achieve abstraction primarily through:

- Public and private class fields (`#`)
- Closures (factory functions)
- Getter/Setter methods
- Modules (ES6 import/export)

### 🧱 Example 1 — Using #privateFields for Abstraction

```js
class BankAccount {
  #balance; // private field

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
    console.log(`Deposited ₹${amount}.`);
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    console.log(`Withdrew ₹${amount}.`);
  }

  getBalance() {
    // controlled access — abstraction point
    return `Current balance: ₹${this.#balance}`;
  }
}

const acc = new BankAccount("Shikhar", 1000);
acc.deposit(500);
console.log(acc.getBalance());
acc.withdraw(200);
console.log(acc.getBalance());

// ❌ Cannot access internal field directly
console.log(acc.#balance); // SyntaxError
```

#### 🧠 What’s happening:

- The user can only interact via `deposit()`, `withdraw()`, and `getBalance()`.
- They cannot see or modify `#balance` directly.
- The internal logic (like balance validation) is hidden — this is true abstraction.

### 🧱 Example 2 — Abstraction via Closures (Factory Function)

Even before class, JS supported abstraction through closures:

```js
function createCounter() {
  let count = 0; // private variable

  return {
    increment() { count++; },
    decrement() { count--; },
    value() { return count; }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.value()); // 2
console.log(counter.count);   // undefined ❌
```

#### 🔍 Breakdown:

- `count` exists inside the closure.
- The returned object only exposes safe methods.
- You can’t directly change `count`.

### 🧱 Example 3 — Abstraction via Getters/Setters

```js
class Temperature {
  #celsius;
  
  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return this.#celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.#celsius = (value - 32) / 1.8;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77°F
temp.fahrenheit = 50;         // updates celsius internally
console.log(temp.fahrenheit); // 50°F (converted back)
```

🧩 The user only sees a simple interface (`fahrenheit`), while conversion logic is hidden internally

### 🧱 Example 4 — Module-Level Abstraction

File: `mathUtils.js`

```js
// internal logic hidden inside module
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

// only expose selected methods
export { square };
```

File: `app.js`

```js
import { square } from './mathUtils.js';

console.log(square(4)); // ✅ 16
console.log(cube(4));   // ❌ ReferenceError (hidden)
```

✅ Modules hide implementation and expose only what’s needed.

### ⚙️ Why Abstraction Matters (Practical Benefits)

| Benefit        | Explanation                                                       |
| -------------- | ----------------------------------------------------------------- |
| 🔒 Security    | Prevents direct access to internal states                         |
| ⚙️ Simplicity  | Reduces cognitive load — users focus on “what”, not “how”         |
| ♻️ Reusability | Internal logic can change without breaking the external interface |
| 🧱 Scalability | Ideal for large-scale, modular architecture                       |


### 🚀 Modern Abstraction Pattern Example (Enterprise Style)

```js
class APIService {
  #baseUrl = "https://api.example.com";

  async #fetch(endpoint, options) {  // private helper
    const res = await fetch(`${this.#baseUrl}${endpoint}`, options);
    if (!res.ok) throw new Error("Network Error");
    return res.json();
  }

  // public API
  getUser(id) { return this.#fetch(`/users/${id}`); }
  postMessage(data) { return this.#fetch(`/messages`, { method: 'POST', body: JSON.stringify(data) }); }
}

const api = new APIService();
api.getUser(1).then(console.log);
// Can't touch #fetch or #baseUrl directly — abstraction ✅
```

### 🧭 Summary Table

| Mechanism       | Purpose                   | Used For                     |
| --------------- | ------------------------- | ---------------------------- |
| `#privateField` | Encapsulate internal data | Secure, modern OOP design    |
| Closures        | Hide state in functions   | Functional style abstraction |
| Getters/Setters | Control access            | Computed properties          |
| Modules         | Hide file internals       | Scalable project structure   |


## 🧩 Polymorphism

### Concept

Polymorphism means:

> Same method name → different behavior depending on the object that calls it.
The word literally means “many forms.”
This is how different classes can implement the same method but act differently.

### 1️⃣ Method Overriding (Most Important in JS)

This is the most common type in JavaScript because of prototypes & classes.

*Example:*

```js
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const a = new Animal();
const d = new Dog();
const c = new Cat();

a.speak();  // Animal makes a sound
d.speak();  // Dog barks
c.speak();  // Cat meows

```

*🔍 Why this is polymorphism?*

All three objects respond to the same method speak(),
but each gives a different result.

### 2️⃣ Polymorphism Through `super`

Child class can override behavior but still call the parent method:

```js
class User {
  greet() {
    console.log("Hello User");
  }
}

class Admin extends User {
  greet() {
    super.greet(); // call parent version
    console.log("Hello Admin");
  }
}

const a = new Admin();
a.greet();

/*
Hello User
Hello Admin
*/
```

### 3️⃣ Polymorphism Through Duck Typing

JavaScript is dynamically typed, so if two objects have the same method name,
JS will just call it — no matter what class it belongs to.

```js
const obj1 = {
  run() { console.log("Car is running..."); }
};

const obj2 = {
  run() { console.log("Person is running..."); }
};

function start(entity) {
  entity.run(); // Calls run() on whatever object you pass
}

start(obj1); // Car is running
start(obj2); // Person is running
```

🔥 This is JS-style polymorphism:
> “If it walks like a duck and quacks like a duck, JS assumes it's a duck.”

### 4️⃣ Polymorphism with Interfaces (Not Built-in, but Achieved by Convention)

In Java or C#, we use interfaces.
In JS, we do:
- Same method name
- Same intention
- Different classes implementing different versions

Example:

```js
class PayPal {
  pay() {
    console.log("Pay using PayPal");
  }
}

class Razorpay {
  pay() {
    console.log("Pay using Razorpay");
  }
}

function processPayment(gateway) {
  gateway.pay();
}

processPayment(new PayPal());
processPayment(new Razorpay());
```

Same method → different behavior.

### 5️⃣ Polymorphism in Prototype-Based Inheritance

Even without classes:

```js
function Shape() {}
Shape.prototype.draw = function() {
  console.log("Drawing a shape...");
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function() {
  console.log("Drawing a circle...");
};

const s = new Shape();
const c = new Circle();

s.draw(); // Drawing a shape
c.draw(); // Drawing a circle
```