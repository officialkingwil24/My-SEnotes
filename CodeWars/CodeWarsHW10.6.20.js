// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// using System;
// using System.Collections.Generic;
// using System.Linq;

// public class Kata
// {
//     public static int[] CountPositivesSumNegatives(int[] input)
//     {
//         return null; //return an array with count of positives and sum of negatives
//     }
// }

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// function XO(str) {
//     let lowerStr = str.toLowerCase(); // 'AbCd' -> 'abcd'
//     let arrOfLetters = lowerStr.split(''); // 'abcd' -> ['a', 'b', 'c', 'd']
    
//     let allXs = arrOfLetters.filter(l => l === 'x'); // if our current value is 'x' then we add that x to the variable allXs
//     let allOs = arrOfLetters.filter(l => l === 'o'); // if our current value is 'o' then we add that o to the variable allOs
    
//     return allXs.length === allOs.length;
//   }