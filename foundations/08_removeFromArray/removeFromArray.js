

const removeFromArray = function(arr, ...args) {
    for (let i = args.length; i > -1; i--) {
        if (i == args) return TRUE
    }

};



// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
