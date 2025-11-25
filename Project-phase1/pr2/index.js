// Implement a manual prototype chain using Object.create().

const vehicle = { wheels: 4, start() { console.log("Starting...") }, stop() { console.log("Stopping..."); } };
// const tata = { color: "red", seats: 4 };

const tata = Object.create(vehicle, { color: { value: "red" }, seats: { value: 4 } });

// Object.setPrototypeOf(tata, vehicle);

tata.start()
console.log(tata.__proto__)