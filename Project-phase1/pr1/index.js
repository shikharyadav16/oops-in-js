// - Create User and Admin using constructor methods.

function User(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
}

const admin = { accessPrivate(){ console.log("Accessing all private info") } }
const user = { accessPublic(){ console.log("Accessing all public info") } };

let users = [new User("Shikhar", "123@gmail.com", "user"), new User("Ritesh", "456@gmail.com", "admin")];

users.forEach((u) => {
    if (u.role === "admin"){ Object.setPrototypeOf(u, admin); }
    else { Object.setPrototypeOf(u, user); }
});

users[0].accessPublic()

// - Create User and Admin using factory methods.

function UserFactory(name, email, role) {

    const user = { name, email, role }

    if (role === "admin") {
        user.accessPrivate = function() {
            console.log("Accessing Private")
        }
    } else {
        user. accessPublic = function () {
            console.log("Accessing Public")
        }
    }

    return user;
}

const publicUser = UserFactory("Shikhar", "123@gmail.com", "user")
const privateUser = UserFactory("Ritesh", "456@gmail.com", "admin")
// publicUser.accessPublic();

