// 2.
// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant (str) {
        return innerredundant(str);
}

function innerredundant (innerstr) {
        return innerstr;
}

console.log(redundant ("asdasdasdasd"));

// ---------- DONE ---------- \\