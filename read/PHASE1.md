## 🧠 JavaScript Object Methods — Complete Reference

| #      | Method                                         | Use Case / Description                                                           | Arguments                            | Level                |
| ------ | ---------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| **1**  | `Object.create(proto, [propertiesObject])`     | Creates a new object with the given prototype and optional property descriptors. | `proto`, optional `propertiesObject` | 🔹 Advanced          |
| **2**  | `Object.assign(target, ...sources)`            | Shallow copies properties from one or more source objects to a target.           | `target`, `...sources`               | 🔹 Common            |
| **3**  | `Object.keys(obj)`                             | Returns an array of **own enumerable property names**.                           | `obj`                                | 🔹 Basic             |
| **4**  | `Object.values(obj)`                           | Returns an array of **own enumerable property values**.                          | `obj`                                | 🔹 Basic             |
| **5**  | `Object.entries(obj)`                          | Returns `[key, value]` pairs for iteration (used in loops, maps).                | `obj`                                | 🔹 Basic             |
| **6**  | `Object.fromEntries(iterable)`                 | Converts an iterable (like `Map` or array of pairs) to an object.                | `iterable`                           | 🔹 Intermediate      |
| **7**  | `Object.freeze(obj)`                           | Makes an object **immutable** — no adding, removing, or changing props.          | `obj`                                | 🔹 Advanced          |
| **8**  | `Object.seal(obj)`                             | Prevents adding/removing props but allows modifying existing values.             | `obj`                                | 🔹 Intermediate      |
| **9**  | `Object.preventExtensions(obj)`                | Prevents adding new properties (but can still modify/delete existing ones).      | `obj`                                | 🔹 Intermediate      |
| **10** | `Object.isFrozen(obj)`                         | Checks if object is frozen.                                                      | `obj`                                | 🔹 Intermediate      |
| **11** | `Object.isSealed(obj)`                         | Checks if object is sealed.                                                      | `obj`                                | 🔹 Intermediate      |
| **12** | `Object.isExtensible(obj)`                     | Checks if new properties can be added.                                           | `obj`                                | 🔹 Intermediate      |
| **13** | `Object.defineProperty(obj, prop, descriptor)` | Defines or modifies a **property’s behavior** (getter/setter, writable, etc.).   | `obj`, `prop`, `descriptor`          | 🔹 Advanced          |
| **14** | `Object.defineProperties(obj, descriptors)`    | Define multiple properties at once using property descriptors.                   | `obj`, `descriptors`                 | 🔹 Advanced          |
| **15** | `Object.getOwnPropertyDescriptor(obj, prop)`   | Gets descriptor (metadata) of a single property.                                 | `obj`, `prop`                        | 🔹 Advanced          |
| **16** | `Object.getOwnPropertyDescriptors(obj)`        | Gets all property descriptors for cloning with accessors.                        | `obj`                                | 🔹 Advanced          |
| **17** | `Object.getPrototypeOf(obj)`                   | Returns the prototype of the object.                                             | `obj`                                | 🔹 Advanced          |
| **18** | `Object.setPrototypeOf(obj, prototype)`        | Sets (changes) the prototype of an object.                                       | `obj`, `prototype`                   | 🔹 Advanced          |
| **19** | `Object.hasOwn(obj, prop)` *(ES2022)*          | Checks if the property exists directly on the object (not in prototype).         | `obj`, `prop`                        | 🔹 Intermediate      |
| **20** | `Object.is(value1, value2)`                    | Safer version of `===` — handles `NaN` and `-0` correctly.                       | `value1`, `value2`                   | 🔹 Intermediate      |
| **21** | `Object.prototype.hasOwnProperty(prop)`        | Checks if property exists directly (inherited from `Object.prototype`).          | `prop`                               | 🔹 Basic             |
| **22** | `Object.prototype.toString()`                  | Returns internal class name like `[object Array]`.                               | none                                 | 🔹 Intermediate      |
| **23** | `Object.prototype.valueOf()`                   | Returns primitive value of an object (rarely used directly).                     | none                                 | 🔹 Low               |
| **24** | `Object.prototype.isPrototypeOf(obj)`          | Checks if one object exists in another’s prototype chain.                        | `obj`                                | 🔹 Advanced          |
| **25** | `Object.groupBy(items, callback)` *(ES2024)*   | Groups iterable items into an object of arrays by a key function.                | `items`, `callback(item, index)`     | 🔹 Modern / Useful   |
| **26** | `structuredClone(value)`                       | Deep clones an object/array/Map/Set (handles circular refs too).                 | `value`                              | 🔹 Modern / Advanced |

## ⚡ Bonus: Related Prototype/Inheritance Operations

| # | Concept/Method                          | Description                                                          | Example                                 |
| - | --------------------------------------- | -------------------------------------------------------------------- | --------------------------------------- |
| 1 | `Class.prototype.methodName`            | Adds method to all class instances (shared).                         | `User.prototype.sayHi = function() {};` |
| 2 | `obj.__proto__` *(deprecated but seen)* | Returns internal prototype reference (like `getPrototypeOf`).        | `obj.__proto__ === Object.prototype`    |
| 3 | `Object.prototype.constructor`          | Refers back to the class/function that created it.                   | `user.constructor === User`             |
| 4 | `instanceof`                            | Checks if an object is derived from a specific class or constructor. | `user instanceof User`                  |

## 🧭 Recommended Learning Flow

> If you want to master Object internals deeply, study them in this order:

- Object.create, Object.assign, Object.keys/values/entries
- Object.getPrototypeOf, setPrototypeOf
- Property descriptors: defineProperty, getOwnPropertyDescriptor
- Object integrity: freeze, seal, preventExtensions
- Advanced: is, fromEntries, groupBy, structuredClone