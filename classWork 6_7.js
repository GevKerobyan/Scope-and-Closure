// 7.
// Given an array. Determine whether it consists only from uniques or not.

function unique (arr) {
    
    let check = true,
        cut;
        
    for (let i = 0; i < arr.length; i++) {
        
        cut = arr.slice(i+1);
    
        if (cut.includes(arr[i])) {
            check = false;
        }

        if (!check) {
            return "There are duplicates"
            break;
        }

    }   if (check) {
            return "All uniques";
        }
}

console.log(unique ([1, 4, "asg", "home", "asg", 5, "inasd"]));

// ---------- DONE ---------- \\