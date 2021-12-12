// 9.
// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function evenQuads (arr) {

    let outcome = 0;

    for (let i in arr) {
        if (typeof(arr[i]) === "number" && arr[i] % 2 === 0) {
            outcome +=  arr[i]*arr[i];
        }       
    }
    return outcome
}

console.log (evenQuads ([1,4,2,6,5,8,9,3]));

// ---------- DONE ---------- \\