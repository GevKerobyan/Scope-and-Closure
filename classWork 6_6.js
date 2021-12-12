// 6.
// Write a function which remove elements with length <= 3

function filterByLength (arr) {
    let outcome = [];
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > 3) {
                outcome.push(arr[i])
            }
        }
    return outcome;
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla', 'mercedes']


// ---------- DONE ---------- \\