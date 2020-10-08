  // using console log to check the file is working
      // console.log('Hello World!')  
 
// comparing the differences between defined, null, & not defined
     // var thing = 'Some text'; // string
    // var other = undefined; // undefined
    // var nothing = null; // null
    // console.log(something); // not defined

// Boolean examples
    var something = true;

    if(something){
        // do something
        console.log('true');
} else {
    // do something else
    console.log('false');
  }

// Primitive Data Types:
    // Definition: Primitive Data Types ARE NOT mutable, cannot be changed
  // Strings: a string is a sequence of characters used to represent text surrounded by quotes.
  // Numbers: Hold numberic values, can be integers, decimals, negatives, positives, and so on...
  // Boolean: a logical data type that can have only the values true or false
// Null: represents a reference that points to a nonexistent value
// Undefined: is a primitive value automatically assigned to variables that have just been declared

// Non-Primitive Data Types:
    // Definition: Primitive Data Types ARE mutable, they can be changed
  // Objects: You define (and create) a JavaScript object with an object with an objectliteral. color red,age
   // Arrays: An array is a special variable, which can hold more than one value at a time.
   // Functions: defined with the function keyword, folowed by a name, folowed by parentheses ().


// CLI COMMANDS
    // Change directory: cd <folder name>
    // List: Is
    // List all: Is -a
    // Remove: rm <filename>
    // Print working directory: pwd
    // Make file : touch <filename>
    // Remove forcefully: rm -rf <filename or folder name>
    // Move: mv <file or foldername to be moved> <location to receive file or folder
    // Clear the CLI: clear
    // show previous commands: history
    // (Not a command) `.` means current, `..` means back
    // Kill a process or infinite process: control-c
    // Go to first character: control-a
    // Go to last character:







    // a function to find boolean values
        // Boolean()
        // console.log(Boolean(true));// logs true to the console because what is inbtween the parenthesis is equal to true
        // console.log(Boolean(2>1)); // logs boolean true to the console
        // console.log(Boolean('Hello')); // Any string with a length greater than zero holds a boolean value of true
        // console.log(Boolean('')); // Any string with a length equal to zero holds a boolean value of false
        // console.log(Boolean(0)); // zero is the only number that holds a boolean of false
        // console.log(Boolean(10)); logs true
        // console.log(Boolean(-10)); logs true
        // console.log(Boolean(.123)); logs true
        // console.log(Boolean(12.54)); logs true
        // console.log(Boolean('0')); // is a string with a length greater than 0, therefore true
        //console.log(Boolean(null)); // holds a boolean value of false
        //console.log(Boolean(10/'h')); // Not a number, or NaN, holds a boolean value of false
        //console.log(Boolean(10/'10')) // Math coerces string numbers to become number data types, therefore 10/10 = 1, 1 holds a

        // In summary
             // False scenarios:
             // 0, -0, null, false, NaN, undefined, or the empty string ("")
             
    // Comparisons:
          // Comparison operators are used in logical statements to determine equality or difference between variable or value.

         // comparison examples:
              // Is equal?
              console.log(Boolean(4 == 2)) // false 4 does not equal 2
              console.log(Boolean(4 == '4')) // True 4 is equal to '4'
              // Is equal value and type?
              console.log(Boolean(4 == '4')) // false, although 4 is equal to '4' the type 'number' is
              // Is not equal?
              console.log(Boolean(4 != '4')) // false
              // Is not equal value or type?\
            // console.log(Boolean(null)) // holds a boolean value of false
            // console.log(Boolean(0));
            