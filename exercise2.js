// Scenario:
// You run a small drink factory. You have an array of bottles filled with different milliliters of Fanta and Sprite.

// Task:

// Write a function that:
// Loops through the array of bottles.
// Counts how many bottles have more than 500ml.
// Returns that count.
function countBottles(bottles){
    let count = 0;
    for (let bottle of bottles){
        if (bottle > 500){
            count++
        }
    }
    return count;
}
console.log(countBottles([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]))