// Directions:
// Create a breakfast object to represent the following menu item:

// The Lumberjack - $9.95
// eggs, sausage, toast, hashbrowns, pancakes
// The object should contain properties for the name, price, and ingredients.

/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here

let breakfast = {
    name: 'The Lumberjack',
    price: 9.95,
    ingredients: [
        'eggs',
        'sausage',
        'toast',
        'hashbrowns',
        'pancakes'
    ]
}

console.log(breakfast);
console.log("The ingredients are: " + breakfast.ingredients);
console.log("The price for " + breakfast.name + " is: " + breakfast.price);

// Time: 07:06
// Grade: 3