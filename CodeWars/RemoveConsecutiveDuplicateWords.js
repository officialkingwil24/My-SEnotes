// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s =>{
    let removeWord = s.split(' ')
    let acc = []
  
    for (let i = 0; i < removeWord.length; i++ ){
          if (removeWord[i] !== removeWord[i+1]){
            acc.push(removeWord[i])
          }
    }
    return acc.join(" ")
  
 }

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))