// level 0
    // Declare an object called person. 
    // Give the person several properties, including full name, height, and more

    let person = { //declaring an object called person
        fullName: 'Jack Black',//give the person several properties
        height: `5'00"`,
        profession: 'Actor',
        hairColor: 'Brown', 
        age: '51',
        broke: false,
    }

    // You'll be using this object for the remaining questions.
    // Q0.1
        // Add an email key value pair to the object called person
        // Creating an email property and setting it equal to Jack's email address.
        person.email = 'JackBlack@yahoo.com'; // Creating an email property for person and giving it a string value.
        
// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
            // example 
                // input: 
                // person = { //creating person to give properties with fullname and email
                //     fullName = 'Nic Leask',
                //     email = 'nic@gmail.com',
                // }
                // // output:
                // '@gmail.com'
                
                let endOfEmail = person.email.split('@')[1];
                // console.log('@' + endOfEmail);
                // declaring a variable called endOfEmail,

       // setting that to the person object's email's characters after the @
       // by splitting on the @ into an array and taking the second

// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        // If the person is the same log, "Same height as Beckham"
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
            function heightConverter(str){ //creating a function for height
                let feet = Number(str.split("'")[0]);//split the number of feet
                let inches = Number(str.split("'")[1].slice(0, -1));//slice the number height by split and slice
                person.heightInInches = inches + (feet*12);//creating person height that is equal to the inches and add feet
                console.log(person.heightInInches)//console.log it to get the person height
            }

            heightConverter(person.height);
            console.log(person.heightInInches);

            if(person.heightInInches > 71){//making a if to person height
                console.log("Taller than Beckham");//console.log to make a if that is taller than beckham
            } else if (person.heightInInches === 71) {//making a if to person height
                console.log("Same height as Beckham");//console.log to make a if that is equal to the same height with beckham
            } else if (person.heightInInches < 71) {//making a if to person height
                console.log("Shorter than Beckham");//console.log to make a if that person is shorter than beckham
            }

    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
        function hasValue(obj, str){//creating an function to give it value for obj and str
            if(obj[str] !== undefined){//creating an if for obj and str for undefined
                return `${person.fullName}, ${str}: ${obj[str]}`;//return for person fullnsme and str and obj str
            } else {// placing else
                return `${person.fullName}, ${str}: no such value.`;//return for person fullname, str that have no such value
            }
        }

        console.log(hasValue(person, 'Nationality'))//console.log to value and get person and nationality in return

// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"

        function initialCreator(obj){//creating an function that initial for obj
            let arrOfNames = obj.fullName.split(' ');//creating arrofnames to equal to obj fullname and split it
            obj.initials = '';//obj initials to equal to quotes
            for(let i = 0; i < arrOfNames.length; i++){//making a for to get the arrofnames to get the length
                obj.initials = obj.initials + arrOfNames[i][0];//creating an obj initials to equal to obj intials and add arrofnames
            }
            return obj.initials;//return the obj initials            
        }

        console.log(initialCreator(person));// console.log it for initial to get the person name in return

        function initial(person){//creating an function for initial that is same with person
            var nameSplt = person['fullName'].split(' ');//creating an variable for namesplt and equal to person for string fullname and split it
            var initials2 = '';//creating an variable for initials2 to equal to quotes
            for(var j = 0; j < nameSplt.length; j++){//creating for to get namesplt length
              var name = nameSplt[j];//creating an variable for name and equal to namesplt
              var initial = name[0];//creating an variable for initial to equal to name
              initials2 = initials2 + initial;//making initials2 to equal to initials2 and add initial
            }
            return initials2;//return the initials2 only
        }
        console.log(initial(person));//console.log it for initial to return person initial

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//For example,
//[true,  true,  true,  false,
  //true,  true,  true,  true ,
  //true,  false, true,  false,
  //true,  false, false, true ,
  //true,  true,  true,  true ,
  //false, false, true,  true]
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  console.log(countSheeps.length)

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
  var summation = function (num) {
    return (num *(num+1))/2;
  }

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples
//basicOp('+', 4, 7)         // Output: 11
//basicOp('-', 15, 18)       // Output: -3
//basicOp('*', 5, 5)         // Output: 25
//basicOp('/', 49, 7)        // Output: 7
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//For example:
//time = 3 ----> litres = 1
//time = 6.7---> litres = 3
//time = 11.8--> litres = 5
function litres(time){
     return 0; 
    }

//The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
//Task :
//  Given a year, return the century it is in.
    //  Input , Output Examples ::
    //centuryFromYear(1705)  returns (18)
    //centuryFromYear(1900)  returns (19)
    //centuryFromYear(1601)  returns (17)
    //centuryFromYear(2000)  returns (20)
    function century(year){
        return; 
    }