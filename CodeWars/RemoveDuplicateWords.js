// Your task is to remove all consecutive duplicate words from string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"
// Solution 1
const removeConsecutiveDuplicates = s => {
    const arr = s.split(' ');
    const output = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            output.push(arr[i]);
        }
    }
    return output.join(" ");
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))

// Solution 2
const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

// Solution 3
const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')