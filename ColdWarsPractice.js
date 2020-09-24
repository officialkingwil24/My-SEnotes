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