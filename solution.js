// Problem 1: The Strict Type Checker
function checkVariable(input) {
    switch (typeof input) {
        case 'string':
        case 'number':
        case 'boolean':
        case 'bigint':
        case 'undefined':
            return typeof input;
        default:
            return 'object';
    }
}

// Problem 2: Secure ID Generator
function generateIDs(count) {
    const ids = [];
    for (let i = 0; i < count; i++) {
        if (i === 5) {
            continue;
        }
        ids.push(`ID-${i}`);
    }
    return ids;
}

// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
    if (!numbers.every(num => typeof num === 'number')) {
        throw new TypeError('Invalid input: All arguments must be numbers');
    }
    return numbers.reduce((sum, current) => sum + current, 0);
}

// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
    // Expand the array to include up to 10 players (as per instruction)
    const expandedList = [...playerList];
    while (expandedList.length < 10) {
        expandedList.push({ name: `Player${expandedList.length}`, score: Math.floor(Math.random() * 20) });
    }
    
    return expandedList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(', ');
}

// Problem 5: The Private Inventory
class Item {
    #discount = 0.1; // 10% discount

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get finalPrice() {
        return this.price * (1 - this.#discount);
    }
}

// Problem 6: Robust Division
function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    } catch (error) {
        return error.message;
    } finally {
        console.log('Operation attempted');
    }
}

// Test all functions
console.log('=== Testing Problem 1: Strict Type Checker ===');
console.log(checkVariable('hello')); // 'string'
console.log(checkVariable(42)); // 'number'
console.log(checkVariable(true)); // 'boolean'
console.log(checkVariable(undefined)); // 'undefined'
console.log(checkVariable(null)); // 'object'
console.log(checkVariable({})); // 'object'
console.log(checkVariable([])); // 'object'

console.log('\n=== Testing Problem 2: Secure ID Generator ===');
console.log(generateIDs(7)); // ['ID-0', 'ID-1', 'ID-2', 'ID-3', 'ID-4', 'ID-6']
console.log(generateIDs(10)); // IDs 0-9 except 5

console.log('\n=== Testing Problem 3: Functional Sum ===');
console.log(calculateTotal(1, 2, 3, 4, 5)); // 15
console.log(calculateTotal(10, 20, 30)); // 60
try {
    console.log(calculateTotal(1, '2', 3)); // Should throw error
} catch (error) {
    console.log('Error caught:', error.message);
}

console.log('\n=== Testing Problem 4: Leaderboard Filter ===');
const players = [
    { name: 'Alice', score: 10 },
    { name: 'Bob', score: 5 },
    { name: 'Charlie', score: 9 },
    { name: 'David', score: 3 }
];
console.log(getTopScorers(players)); // Names with score > 8

console.log('\n=== Testing Problem 5: Private Inventory ===');
const item1 = new Item('Laptop', 1000);
const item2 = new Item('Mouse', 50);
console.log(`${item1.name}: $${item1.finalPrice}`); // Laptop: $900
console.log(`${item2.name}: $${item2.finalPrice}`); // Mouse: $45

console.log('\n=== Testing Problem 6: Robust Division ===');
console.log(safeDivide(10, 2)); // 5, then logs "Operation attempted"
console.log(safeDivide(10, 0)); // "Cannot divide by zero", then logs "Operation attempted"
console.log(safeDivide(15, 3)); // 5, then logs "Operation attempted"