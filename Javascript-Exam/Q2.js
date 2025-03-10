const arr = [1, 2, 3, 4, 5]
const result = arr.map(x => {
    if (x === 3) return;
    return x * 2;
});
console.log(result)
//  It will print a undefined value for '3' as we have not returned anything for 
// if condition and it will multiply all other values with '2'