// before 2022 

class OldUser {
    constructor(name) {
        this._name = name;
    }
}

// let a = new OldUser("Shikhar");
// console.log(a._name)

// after 2022

class NewUser {
    #name;
    #password;

    constructor(name, password = "12345678") {
        this.#name = name;
        this.#password = password;
    }

    getName() {
        return this.#name;
    }

    #validatePassword(password) {
        return password.trim().length > 8 ? true : false

    }

    setPassword(password) {
        if (!this.#validatePassword(password)) throw new Error("Password must contain 8 digits");
        return this.#password = password.trim();
    }
    getPassword() {
       return this.#password;
    }
}

// const a = new NewUser("Shikhar")
// a.setPassword("abhafdasdlfni")
// console.log(a.setPassword("abhafdasdlfni"))
// console.log(a.getPassword())


class Temperature {
    #celsius;

    constructor(c) {
        this.#celsius = c;
    }

    get celsius() {
        return this.#celsius;
    }

    get fahrenheit() {
        return this.#celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        return this.#celsius = (value - 32) / 1.8;
    }
}

// let temp = new Temperature(1);
// console.log(temp.fahrenheit)

