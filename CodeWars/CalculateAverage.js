// Write function avg which calculates average of numbers in given list.
function find_average(array) {
    let arrayLength = array.length;
    let arrayAV = array.reduce((total, amount) => total + amount);
    let finalOutput = arrayAV/arrayLength;
    return finalOutput
}
console.log(find_average([1, 2, 3]));
console.log(find_average([100, 200, 300, 400, 500, 600, 1]));