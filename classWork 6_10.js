// 10.
// Check whether string is palindrome, or not.

// ----- option 1;

function palindrome (str) {
        str = str.toLowerCase();
    
        let splitStr = str.split (''),
            revStr = splitStr.reverse(),
            jStr = revStr.join('');

        if (str === jStr) {
            return "The string is a Palindrome"
        } else return "The string is not a Palindrome"
}

console.log(palindrome("Anasda"))

// ----- option 2

// function palindrome (str) { 
//     let count = true,
//         backCount = -1;
//         // b = str.lenght-backCount;

//     for (let i = 0; i < str.lenght; i++, backCount--) {
//         if (str[i] === str[backCount]) {
//             count = false;
//             return "The string is not a Palindrome"; 
//         }
//         console.log(count);
//     } if (count) {

//         return "The string is a Palindrome"
//     } 
    
// }


// console.log(palindrome("Anaana"));


// ---------- DONE ---------- \\