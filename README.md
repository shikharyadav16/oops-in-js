# OOPS in JS

## 🧭 Roadmap: OOP in JavaScript (Basic → Advanced)

| Level                            | Topic                              | Description                                         |
| :------------------------------- | :--------------------------------- | :-------------------------------------------------- |
| 🧱 **Level 1: Foundations**      | 1. Objects in JS                   | Object literals, property access, methods           |
|                                  | 2. `this` keyword                  | Context, implicit/explicit binding, arrow functions |
|                                  | 3. Factory functions               | Functions returning objects                         |
|                                  | 4. Constructor functions           | Using `new`, `this`, instance vs prototype          |
| ⚙️ **Level 2: ES6 Class System** | 5. `class` syntax                  | Class declarations, constructors, methods           |
|                                  | 6. Inheritance                     | `extends`, `super`, method overriding               |
|                                  | 7. Static methods & properties     | Class-level utilities                               |
|                                  | 8. Getters & setters               | Encapsulation and computed properties               |
| 🔐 **Level 3: Advanced OOP**     | 9. Private fields & methods        | `#` syntax (ES2022), true encapsulation             |
|                                  | 10. Polymorphism                   | Overriding, runtime behavior                        |
|                                  | 11. Abstraction                    | Hiding implementation, exposing interface           |
|                                  | 12. Composition vs Inheritance     | Modern design approaches                            |
| 🚀 **Level 4: Real Projects**    | 13. Apply OOP concepts in projects | Mini projects using ES6 Classes                     |

## 🧱 Phase 1: Core Object Fundamentals

> Goal: Understand how JavaScript handles objects, prototypes, and the this context.

| Step | Topic                                       | Focus                                               |
| :--- | :------------------------------------------ | :-------------------------------------------------- |
| 1️⃣  | **Objects & Methods**                       | Object literals, property access, method definition |
| 2️⃣  | **The `this` keyword**                      | Global, function, arrow, and class contexts         |
| 3️⃣  | **Factory Functions**                       | Create multiple objects without `class`             |
| 4️⃣  | **Constructor Functions**                   | The old OOP pattern using `new`                     |
| 5️⃣  | **Prototype & Prototype Chain**             | Shared methods and inheritance mechanism            |
| 6️⃣  | **`Object.create()` and `Object.assign()`** | Manual prototype control and composition            |

### 🧩 Mini Practice:

- Create User and Admin using both factory and constructor methods.
- Implement a manual prototype chain using Object.create().

## ⚙️ Phase 2: Modern ES6 Classes

> Goal: Write cleaner, readable OOP code using ES6 syntax.

| Step | Topic                                      | Focus                                 |
| :--- | :----------------------------------------- | :------------------------------------ |
| 7️⃣  | **`class` and `constructor`**              | Core OOP syntax                       |
| 8️⃣  | **Instance methods**                       | Shared behaviors via prototype        |
| 9️⃣  | **Inheritance with `extends` and `super`** | Create hierarchies easily             |
| 🔟   | **Static methods/properties**              | Utilities not tied to instances       |
| 11️⃣ | **Getters & Setters**                      | Encapsulation and computed properties |
| 12️⃣ | **Overriding Methods**                     | Polymorphism in action                |

### 🧩 Mini Practice:

- Build a Shape → Circle, Rectangle hierarchy with area calculations.
- Add a static `Shape.compareAreas(shape1, shape2)` utility.

## 🔐 Phase 3: Advanced OOP Patterns

> Goal: Learn how large systems manage encapsulation, abstraction, and polymorphism.

| Step | Topic                            | Focus                                                 |
| :--- | :------------------------------- | :---------------------------------------------------- |
| 13️⃣ | **Encapsulation**                | Private data using `#fields`                          |
| 14️⃣ | **Abstraction**                  | Hide internal logic, expose public interface          |
| 15️⃣ | **Polymorphism**                 | Redefine behavior dynamically                         |
| 16️⃣ | **Composition over Inheritance** | Modular, reusable behaviors                           |
| 17️⃣ | **Mixins**                       | Combine behaviors from multiple sources               |
| 18️⃣ | **Design Patterns**              | OOP solutions: Singleton, Factory, Observer, Strategy |
| 19️⃣ | **OOP with Modules**             | Using `export/import` to organize OOP code            |
| 20️⃣ | **Error Handling in OOP**        | Custom `Error` classes and safe patterns              |


### 🧩 Mini Practice:

- Implement a BankAccount with private balance.
- Create a Logger mixin for reusable logging.
- Apply the Observer Pattern (subscribe/notify).

### 🧠 Phase 4: Design-Oriented Thinking

> Goal: Move from syntax mastery → OOP architecture & design decisions.

| Step | Concept                        | Description                         |
| :--- | :----------------------------- | :---------------------------------- |
| 21️⃣ | **SOLID Principles (in JS)**   | Writing scalable, maintainable code |
| 22️⃣ | **UML & Class Diagram Basics** | Visualize class relationships       |
| 23️⃣ | **Dependency Injection**       | Flexible, testable OOP design       |
| 24️⃣ | **Event-driven Architecture**  | Decoupled systems via events        |
| 25️⃣ | **Testing Class Logic**        | Using Jest or Mocha for OOP units   |

### 🧩 Mini Practice:

- Refactor a project using Single Responsibility Principle.
- Create UML diagrams for your class relationships.

## 🧩 Phase 5: Project Implementation (Progressive Difficulty)

| Project                                    | Concepts                                 | Outcome                                     |
| :----------------------------------------- | :--------------------------------------- | :------------------------------------------ |
| 🏦 **1. Bank System**                      | Encapsulation, Getters/Setters           | Withdraw/Deposit system with private fields |
| 🎮 **2. Tic-Tac-Toe Game**                 | Class-based design, Polymorphism         | Player vs Player game with win detection    |
| ✅ **3. Todo App (Browser + localStorage)** | Classes, DOM Manipulation, Persistence   | Persistent task manager                     |
| 💬 **4. Chatroom Model**                   | Composition, EventEmitter pattern        | Backend class structure for real-time chat  |
| 🧩 **5. E-commerce Cart System**           | Inheritance, Abstraction, Error handling | Product, Cart, and Checkout simulation      |
| 🧠 **6. Custom Component Library**         | Composition, Polymorphism                | Mini React-like UI system using OOP         |
| 🕹️ **7. Game Engine Base (Bonus)**        | Composition, Game Loop classes           | Build base engine for simple 2D games       |

## ⚡ Phase 6: OOP + Real World Integration

> Combine OOP with modern JavaScript environments.

| Area                | Integration                                                |
| :------------------ | :--------------------------------------------------------- |
| 🖥️ Frontend        | Use OOP for state management in Vanilla JS apps            |
| ⚙️ Backend          | Express.js controllers & service classes                   |
| 🗄️ Database Models | Mongoose Schema classes (OOP structure)                    |
| 🧩 API Wrappers     | OOP API design (class-based API clients)                   |
| 🧠 AI/Utility       | Build reusable AI Service classes (OpenAI API integration) |

## 🔄 Phase 7: Mastery Practice

| Type                  | Example                                                |
| :-------------------- | :----------------------------------------------------- |
| 💡 **Code Challenge** | Build custom EventEmitter from scratch                 |
| 🔍 **Refactor Task**  | Convert procedural code → class-based architecture     |
| 🧱 **Design Task**    | Design UML + class model before coding                 |
| 📈 **Scaling Task**   | Split one large class into multiple composable modules |
