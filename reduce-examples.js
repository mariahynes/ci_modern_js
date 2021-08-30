const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "accumulator:", acc,
        "current value:", curr,
        "total:", acc + curr
    );
    return acc + curr;
},0);
console.log(sum);