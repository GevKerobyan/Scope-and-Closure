// 3.
// Write a function that returns an anonymous function, which transforms its input by adding a
// particular suffix at the end.

"use strickt"

let add_ly = add_suffix("ly");
console.log(add_ly("hopeless")); // "hopelessly"
console.log(add_ly("total")); // "totally"
let add_less = add_suffix("less");
console.log(add_less("fear")); // "fearless"
console.log(add_less("ruth")); // "ruthless"

function add_suffix (str) {
    return function (suffix) {
        return suffix + str ;
    }
}


// ---------- DONE ---------- \\