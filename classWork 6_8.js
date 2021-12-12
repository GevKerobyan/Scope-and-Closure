// 8.
// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
// word or phrase without a repeating letter.

function iso (str) {
    let check = true,
        cut;
    if(typeof(str) === "string") {
        for (let i = 0; i < str.length; i++) {
                    cut = str.slice(i+1);
                
                    if (cut.includes(str[i]) && str[i] !== " ") {
                        check = false;
                    }
                    if (!check) {
                        return "Is not an Isogram"
                        break;
                    }
                } if (check) {
                    return "Is an Isogram";
                }
    }
}

console.log(iso("Determine whether it's an isogram"));

// It's almost the same as in excercise 7, with slight modifications regarding spaces;


// ---------- DONE ---------- \\