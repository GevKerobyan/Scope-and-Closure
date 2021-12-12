// 5.
// Write a function that implements filtering in array

function filterFalsyValues (arr) {
    let truthy = [];
    for (i in arr) {
        if (arr[i]) {
            truthy.push (arr[i]);
        }
    }
return truthy;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];

console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []]

// ---------- DONE ---------- \\