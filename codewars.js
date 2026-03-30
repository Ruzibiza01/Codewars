// How good are you really?
// There was a test in your class and you passed it. 
// Congratulations!

// But you're an ambitious person.
//  You want to know if you're better than
//  the average student
//  in your class.

// You receive an array with your peers'
//  test scores. Now calculate the average and
//  compare your score!

// Return true if you're better, else false!
function average(arr){
    let sum=0;
    for(let num of arr){
    sum +=num
    }
    return sum/arr.length
}
function Comparing(arr, myMarks){
    if (average(arr) < myMarks){
        return true
    } else {
        return false
    }
}
console.log(Comparing([2, 3], 5))
