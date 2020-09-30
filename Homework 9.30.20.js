// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
// function isDivisible(n, x, y) {
//     if (n % x === 0 && n % y === 0) {
//     return true;
//     } else {
//     return false;
//     }
//     }
//    console.log(isDivisible(12,1,4));

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7,9,5,8,4,3]
  var arr = 987654321

  function digitize(n){
    let array = n.toString().split('')
    let newNumArray = array.map(n => parseInt(n))
    var reversed = []
    for (var i = newNumArray.length - 1; i >=0 ; i--) {
      reversed.push(newNumArray[i])
    }
    return reversed
  }
  console.log(digitize(arr))

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
//   }
//   console.log(abbrevName('Ice Cube'));

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

let haystack = [55,99,34,33,'needle',88]

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
  console.log(findNeedle(haystack))