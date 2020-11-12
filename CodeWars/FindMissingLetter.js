// #Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
function findMissingLetter(array){
    let letter = array.join('');
    for(let i = 0; i < letter.length; i++){
      if(letter.charCodeAt(i + 1) - letter.charCodeAt(i) != 1){
        return String.fromCharCode(letter.charCodeAt(i) + 1);
      }
    }
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));
console.log(findMissingLetter(['g', 'h', 'i', 'k']));
console.log(findMissingLetter(['L', 'M', 'N', 'P']));