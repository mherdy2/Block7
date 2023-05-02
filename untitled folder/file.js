const garageSale = require("./guided_practice_data_starter");

// Prompt 3
// Print an array of all the item names in garagaeSale.
let names = garageSale.map((item) => item.name);
console.log(names);

// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];
let prices = garageSale.map((item) => [item.name, item.price]);
console.log(prices);
// Prompt 5
// Print an array of all the items that are less or equal to $50.
let exItems = garageSale.filter((items) => items.price <= 50);
console.log(exItems);
// Prompt 6
// Print an array of all the items whose condition are "used."
let usedItems = garageSale.sort((items) => items.condition === "used");
console.log(usedItems);

// Prompt 7
// Print all the prices in garageSale array into a new array.
let newPrices = garageSale.map((item) => item.price);
console.log(newPrices);
// Prompt 8
// Print the total cost of the garageSale array.

// Prompt 9
// Print the average price for the garage sale.
