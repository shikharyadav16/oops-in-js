## 🧩 1️⃣ What a Class Really Is

In JavaScript, a class is just syntactic sugar over the old constructor function + prototype model. So:

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
```

is internally equivalent to:

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};
```

The class syntax just:

- Makes the code cleaner and easier to read,
- Enforces strict mode automatically, and
- Makes methods non-enumerable (so they don’t show up in for...in loops).

## ⚙️ 2️⃣ What Happens When You Do new User("Shikhar")

Let’s break it step-by-step — this is what V8 (the JS engine) literally does under the hood:

```js
const u1 = new User("Shikhar");
```

| Step | What Happens                                                                                       | Internally                          |
| ---- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 1️⃣  | A **new empty object** is created in the Heap                                                      | `{}`                                |
| 2️⃣  | The object’s internal `[[Prototype]]` is set to `User.prototype`                                   | So the object can inherit `greet()` |
| 3️⃣  | The `User` function (constructor) is executed with `this` bound to that new object                 | `this = {}`                         |
| 4️⃣  | The constructor assigns properties (`this.name = name`)                                            | `{ name: "Shikhar" }`               |
| 5️⃣  | Unless the constructor explicitly returns another object, the new object is returned automatically | ✅                                   |

### 🔍 So Memory-wise

```lua
Stack                              Heap
-----                              ---------------------
u1 ───────────────────────────────▶ { name: "Shikhar" }
                                   ↑
                                   │ [[Prototype]]
                                   │
                                   └──────────────→ User.prototype
                                                       └── greet()

```

This is why `u1.greet()` works —
JS doesn’t find `greet` on `u1`, so it walks up the prototype chain to `User.prototype`.

## 🧠 3️⃣ Class Structure Internally

When you define a class:

```js
class User {
  constructor(name) {}
  greet() {}
  static info() {}
}
```

It’s internally like:

```js
function User(name) { /* constructor body */ }

User.prototype.greet = function() {};     // instance method
User.info = function() {};                // static method
```

So:

- Instance methods live on `User.prototype`
- Static methods live directly on User (the constructor function itself)

## 🧩 4️⃣ Class Fields and Methods

### Instance Fields

You can define instance properties outside the constructor (ES2022+):

```js
class User {
  name = "Anonymous"; // each instance gets its own property
  greet() {
    console.log(this.name);
  }
}
```
Equivalent to setting inside the constructor.

### Static Fields

Static fields belong to the class itself, not to instances.

```js
class Counter {
  static count = 0;
  constructor() {
    Counter.count++;
  }
}
```

Usage:

```js
new Counter();
new Counter();
console.log(Counter.count); // 2 ✅
```

## 🧩 5️⃣ Inheritance with extends and super

When you use inheritance:

```js
class Admin extends User {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
}
```

Here’s what happens:

- `Admin.prototype` is linked to `User.prototype`
- Inside the constructor, you must call `super()` first before using this
- `super()` calls the parent’s constructor
- Initializes inherited fields

So the prototype chain looks like:

```javascript
adminInstance
  └── Admin.prototype
        └── User.prototype
              └── Object.prototype
                    └── null
```

## 🧠 6️⃣ Prototype vs Instance vs Static — at a glance

| Type                   | Defined As                         | Accessible On          | Example              |
| ---------------------- | ---------------------------------- | ---------------------- | -------------------- |
| Instance property      | Inside `constructor` or as `field` | Instance only          | `this.name = ...`    |
| Prototype method       | Defined normally in class body     | All instances (shared) | `greet()`            |
| Static method/property | With `static` keyword              | Class only             | `User.createAdmin()` |


## 🧬 7️⃣ Advanced Internals — Class Memory & Execution Context

When a class is declared:

- It’s hoisted, but not initialized — unlike functions, it’s in the temporal dead zone (TDZ).
- It’s stored in Heap memory as a constructor function object.
- Its methods (on prototype) are non-enumerable and shared (one copy for all instances).
- When you new an instance, the engine:
    - Allocates heap memory for it
    - Binds the prototype
    - Executes the constructor in its execution context with this bound to that instance
    - Pushes that execution context on the call stack
    - Pops it after execution — leaving only the object reference in memory

## 💡 8️⃣ Why Classes Are Cleaner (Yet Same Mechanically)

- Hide prototype manipulation details
- Provide extends + super cleanly
- Automatically use strict mode
- Methods are non-enumerable
- Better static & field support

But still:

> ✅ Under the hood, classes = functions + prototypes.

### 🧠 Example — Full Breakdown

```js
class User {
  constructor(name) { this.name = name; }
  greet() { console.log("Hello", this.name); }
}

const u1 = new User("Shikhar");
```

Behind the scenes:

```js
function User(name) { this.name = name; }
User.prototype.greet = function() { console.log("Hello", this.name); };

const u1 = new User("Shikhar");
```

Prototype Chain:

```javascript
u1 → User.prototype → Object.prototype → null
```