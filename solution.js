function checkVariable(input) {
    switch (typeof input) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "bigint":
            return "bigint";
        case "undefined":
            return "undefined";
        case "object":
            return "object"; 
        default:
            return "unknown";
    }
}
console.log(checkVariable("hello"))
console.log(checkVariable(10)); 
console.log(checkVariable(true)); 
console.log(checkVariable(null)); 
function generateIDs(count) {
    let ids = [];

    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue;
        }
        ids.push(`ID-${i}`);
    }

    return ids;
}
console.log(generateIDs(7));
function calculateTotal(...numbers) {

    if (!numbers.every(num => typeof num === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }

    return numbers.reduce((total, num) => total + num, 0);
}
function calculateTotal(...numbers) {

    if (!numbers.every(num => typeof num === "number")) {
        throw new TypeError("Invalid input: All arguments must be numbers");
    }

    return numbers.reduce((total, num) => total + num, 0);
}
console.log(calculateTotal(1,2,3,4)); // 10
function getTopScorers(playerList) {
const players = [
    {name: "Alice", score: 10},
    {name: "Bob", score: 5},
    {name: "Charlie", score: 12},
    {name: "David", score: 9},
    {name: "Alma", score: 15},
    {name: "Malou", score: 10},
    {name: "kyle", score: 10},
    {name: "Mary", score: 11},
    {name: "Ana", score: 16}

]
       
    function getTopScorers(playerList) {
    return playerList
        .slice(0, 10)
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}
console.log(getTopScorers(players));
class Item {

    #discount = 0.1;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price - (this.price * this.#discount);
    }
}
const item1 = new Item("Laptop", 1000);
console.log(item1.finalPrice); // 900
function safeDivide(a, b) {
    try {

        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }

        return a / b;

    } catch (error) {

        return error.message;

    } finally {

        console.log("Operation attempted");

    }
}
console.log(safeDivide(10,2)); 
console.log(safeDivide(10,0));
}
