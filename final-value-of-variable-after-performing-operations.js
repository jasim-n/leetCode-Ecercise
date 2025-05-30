var finalValueAfterOperations = function(operations) {
    let x=0
    for (let i = 0; i < operations.length; i++) {

if(operations[i][1] == "-") {
            x--;
        }
       else 
       x++
    }

    return x
};

finalValueAfterOperations(["--X","X++","X++"])

const finalValueAfterOperations2 = (operations) => {
    return operations.reduce((acc, curr) => curr[1] === '+' ? acc + 1 : acc - 1, 0);
};

console.log("🚀 ~ finalValueAfterOperations2:", finalValueAfterOperations2(["--X", "X++", "X++"]));
const result = finalValueAfterOperations2(["--X", "X++", "X++"]);
console.log("🚀 ~ result:", result);

