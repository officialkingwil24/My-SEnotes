//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//function even_or_odd(number) {
    //if(number %2 === 0){
      //  return "Even"
    //} else {
    //    return "Odd"
  //  }
//}
//console.log(even_or_odd(2));

//Very simple, given a number, find its opposite.
//Examples:
//1: -1
//14: -14
//-34: 34
//solution 1
// function opposite(number) {
//    var number2 = -number;
//     return number2
//   }
//   console.log(opposite(10));
//solution 2
  //function opposite(number) {
    //return(-number);
  //}
  //
  //console.log(opposite(5))

 // It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//solution 1
   //var show = 'Spongebob'
   //function removeChar(str){
       //var removeLast = str.slice(0, -1)
       //console.log(removeLast)
       //var finalOutput = removeLast.slice(1)
     //  return finalOutput
  // }
   //console.log(removeChar(show))
//solution 2
//var show = 'Naruto'
  // function removeChar(str) {
   // return str.slice(1, -1);
  //}
 // console.log(removeChar(show))
//solution 3
//var show = 'Berzerk'
  //function removeChar(str){
    //return str.substring(1, str.length-1);
   //};
   //console.log(removeChar(show))
   
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//Example:
//makeNegative(1); // return -1
//makeNegative(-5); // return -5
//makeNegative(0); // return 0
//makeNegative(0.12); // return -0.12
// var ten = 10
// var negTen = -10

// function makeNegative(num){
//     if(num < 0){
//         return num
//      } else {
//         return (num * -1)
//     }
// }
// console.log(makeNegative(10))

//Write a function called repeat_str which repeats the given string src exactly count times.
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
//function repeatStr (n, s) {
  //return ''
//}
//var cash = 'money'
//function repeatStr (n, Money) {
  //return Money.repeat(n);
//}
//console.log(cash.repeat(5))

//We need a function that can transform a number into a string.
//What ways of achieving this do you know?
//Examples:
//numberToString(123); // returns '123';`   
//numberToString(999); // returns '999';`
//solution 1
//function numberToString(n) {
  // return n.toString()
//}
//console.log(numberToString(666999))
//solution 2
// function numberToString(num) {
//   return String(num);
// }
// console.log(numberToString(666999))
//solution 3
// function numberToString(num) {
//   return ''+num;
// }
// console.log(numberToString(666999))

//Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//function solution(str){
  
//}

//function reverseString(str) {
  //for(var i = 0; i < arr.length; i++){

  //}
  //return str
//}
//console.log(reverseString('evil'));

// function reverse(str){
//   let reversed = "evil";    
//   for (var i = str.length - 1; i >= 0; i--){        
//     reversed += str[i];
//   }    
//   return reversed
// }
// console.log(reverse(evil))

var arr = 'evil'
function reverseString(str){
  var reversed = []
  for (var i = str.length - 1; i >=0 ; i--) {
    reversed.push(str[i])
  }
  return reversed.join('')
}
console.log(reverseString(arr))

//Given an array of integers your solution should find the smallest integer.
//For example:
//Given [34, 15, 88, 2] your solution will return 2
//Given [34, -345, -1, 100] your solution will return -345
//class SmallestIntegerFinder {
  //findSmallestInt(args) {
    
  //}
//}
function findSmallestInt(args){
  let min = Math.min.apply(null, args);
  return min;
}

function findSmallestInt(args){
  //create a variable that holds the smallest integer, initially fil it with the first elemnt
  var smallestInt = args[0];
  // loop through all our array elements (starting at 1 for effiency)
  for(var i = 1; i < args.length; i++){
    if(args[i] < smallestInt){
      smallestInt = args[i];
    }
  }
  return smallestInt;
}
console.log(findSmallestInt([1,2,3,4,5,-1,-100]))
console.log(findSmallestInt([1,2,3,4,5,0]))
