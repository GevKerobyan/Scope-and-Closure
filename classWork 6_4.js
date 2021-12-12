// 4.
// Create a function printAfter that calls its argument after printing hello world

const print = () => console.log("Elon Musk");

function printAfter(str) {
    console.log("hello world")
    return str();
}

printAfter(print);
'hello, world'
'Elon Musk'

// ---------- DONE ---------- \\