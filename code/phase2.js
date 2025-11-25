// Proxy

const obj = {
    name: "Shikhar",
    branch: "aids",
    age: 20
}

const proxyObj = new Proxy(obj, {
    set (target, prop, value) {
        if (!(prop in target)) throw new Error("Invalid Key");
        if (prop === "age" && ( typeof value !== "number" || value <= 0 )) throw new Error("Invalid age");
        Reflect.set(target, prop, value);
        return true;
    }
})

proxyObj.age = 1
console.log(proxyObj)

// Class and Constructor

class Student {
    static count = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Student.count++;
    }

    info() {
        console.log("AKTU student: Name:", this.name, "Age:", this.age)
    }

    collegeInfo() {
        console.log("PSIT")
    }

    static sayHi() {
        console.log("Hello World");
    }
}

const vedant = new Student("Vedant", 20);
// Student.sayHi()
// vedant.info()
// console.log(Student.count);

// Inheritence, extends, super

class Aids extends Student {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age;
        Student.count++;
    }
    
    info() {
        console.log("PSIT student: Name:", this.name, "Age:", this.age)
    }
}

const shikhar = new Aids("Shikhar", 20);
// shikhar.info()




