// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
    

// filter questions
// Level 0
    // given an array of numbers filter out any that are larger than 10
    //let numbers = [8, 5, 4, 14, 29, 20];
    //let largerNums = numbers.filter(function(n){return n > 10})
    //console.log(largerNums);

// Level 1
    // given an array of numbers filter out any that are divisible by 3
    //let numbers = ['2', '4', '12', '28', '32', '42'];
    //let divisibleNums = numbers.filter(function(n){return n %3 ! == 0})
    //console.log(divisibleNums);

    // given an array of numbers filter out any that are even
    // let numbers = ['2', '3', '4', '5', '6', '7'];
    // let evenNums = numbers.filter(function(n){return n %2 === 1})
    // console.log(evenNums);

// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
//let fruit = ['apple', 'pear', 'mango', 'kiwi', 'peach'];
//longFruit = fruit.filter(function(n){
  //  return n.length < 5
//})
//console.log(longFruit)

    // given an array of arrays, filter out any that are shorter than 10 elements
let plants = [['tree'], ['bush', 'grass'], [1,2,3,4,5,6,7,8,9,10,11]]
longPlants = plants.filter(function(n){
    return n.length >= 10
})
console.log(longPlants)

// Level 3
    // given an array of objects, filter out any that dont have a key called 'firstName'


// reduce questions 
// level 0:
    // given an array of numbers add them all together


// level 1:
    // given an array of numbers, multiply them all together


// level 2:
    // given an array of strings, concatiante them together 


// level 3: 
    // given an array of arrays make them all into one array 


// level 5:
    // given an array of strings, remove any vowels and concatenate them toegher 


// map questions
// level 0:
    // given an array of numbers, return a new array with all numbers multiplied by 2


// level 1:
    // given an array of numbers, return a new array with all numbers increased by 1


// level 2:
    // given an array of strings, return a new array with all strings as capitals