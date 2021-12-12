// 11.
// Given an array of integers, find the pair of adjacent elements that has the largest product and return
// that product.

function adjProds (nums) {
    let i,
        end = nums.length-1,
        sum = nums[0] + nums [1];
        
    for (i = 1; i < end; i++) {
        
        if (typeof nums[i] === "number" && typeof nums[i+1] === "number"  && nums[i] + nums [i+1] > sum) {
            sum = nums[i] + nums [i+1];
        }
    }
    return sum;
}

console.log(adjProds([1,4,2,6,5,123,8,9,3]));


// ---------- DONE ---------- \\