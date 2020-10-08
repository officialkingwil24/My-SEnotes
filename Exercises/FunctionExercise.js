// level 0
    // create a function which returns the value, 'Hello'
    function greet(param){
        return 'Hello'
    }
        // console.log(greet());
    // create a function which returns the value, 'Goodbye!
    function bye(param){
        return 'Goodbye!'
    }
    console.log(bye());

// level 1
    // create a function which has two parameters and returns the product of the two
    function add(num1, num2){
        var answer = num1 * num2
        return answer;
    }
    console.log(add(12, 13));
    // create a function which has one parameter and returns a custom greeting using that param
    var welcome = 'HI!';
    function greeting(param){
        return param;
    }
    console.log(greeting(welcome));
// level 2
    // create a function which takes in a string and removes all dashes and replaces them with spaces. 
function noDash(str){
    return str.replace(/-/g, ' ');
}
    var colors = 'Red-Blue-Purple';
    var cities = 'NYC-LA';

    console.log(noDash(colors))
    console.log(noDash(cities))
    // level 3
    // create a function which takes in an array and removes the last and first items 
    var stars = ['jadakiss', 'Fabolous', 'Lil Wayne', 'Drake']

    function rap(name){
        name.pop();
        name.shift();
        return name
    }
    console.log(rap(stars));

// NEW QUESTIONS

// level 1
    // create a function which returns the opposite of a number
    var num = 40;

    function negNum(n){
        var negSign = -n;
        return negSign;
    }
    console.log(negNum(num));
    // Examples:
        // input: -1, output: 1
        // input: 40, output: -40 

// level 3
    // create a function which takes in a non-integer and returns that number multiplied by 13 and then rounded UP to the next integer
    function calc(n){
        var multiplied = n*13;
        return Math.round(multiplied);
    }
    console.log(calc(2.5));
// level 4
    // create a function which takes in a string and removes the first, last, and middle letters
    var drinks = 'Juice';
    function taste(param){
        console.log(drinks.slice(0,3));
    }

    // create a function which returns a random whole number between 25 & 50



