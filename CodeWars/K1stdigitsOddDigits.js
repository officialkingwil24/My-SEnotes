// You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.
// The output should also be an integer.
// In the following cases a function should return 0:
// there are no odd digits in a number n;
// k is bigger than a number of digits in n;
// k = 0;
// k is bigger than a number of odd digits in n.
// BTW, is 0 an odd number or an even one?
function findOddDigits(n, k){
    const odds = String(n) // convert number to string
      .split("") // split into numbers
      .filter(num => (num % 2)); // filter odd ones
    if(k === 0 || k > n || !odds.length || k > odds.length) return 0; // there are no odd digits in a number n; k is bigger than a number of odd digits in n. k = 0; k is bigger than a number of digits in n;
    return Number(odds.join("").slice(0, k)); // join them, slice k numbers then convert number to string and return
}

console.log(findOddDigits(123456789111, 5));
console.log(findOddDigits(7459274655920285, 8));
console.log(findOddDigits(0, 100));
console.log(findOddDigits(103756254800023, 2));
console.log(findOddDigits(20406886, 6));
console.log(findOddDigits(11111333333307, 13));
console.log(findOddDigits(30982, 3));

// Solution 2
// function findOddDigits(n, k) {
//     const odd = (""+n).replace(/[02468]/g,'');
//     return k > odd.length ? 0 : +odd.substr(0,k);
// }