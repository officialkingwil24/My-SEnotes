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





