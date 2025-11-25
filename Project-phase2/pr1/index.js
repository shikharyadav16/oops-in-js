// Build a Shape → Circle, Rectangle hierarchy with area calculations.

class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        throw new Error("Use shapes subclasses to calculate area.")
    }

    static compareAreas(a, b) {
        return (a.area() > b.area() ? 1 : (a.area() < b.area() ? -1 : 0))
    }
}

class Circle extends Shape {
    constructor(r) {
        super("circle");
        this.r = r;
    }

    area() {
        return Math.PI * (this.r)**2;
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        super("rectangle");
        this.a = a;
        this.b = b;
    }

    area() {
        return this.a * this. b;
    }
}

const c = new Circle(3);
const r = new Rectangle(3, 2)
console.log(r.area())
console.log(c.area())

console.log(Shape.compareAreas(c, r))