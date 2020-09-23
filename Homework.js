// Q1: Create a loop that greets us 5 times!
//      - The console should similar to the following:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
  //function stat(){
    //for(var i = 0; i < 4; i++){
      //console.log('Hello There!');
  //}
    //return 'Hello There!'
//}
  //console.log(stat())

// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter
  var num = [1,2,3];
  function times(arr){
    for(var i = 0; i < arr.length; i++){
        var output = arr.indexOf(arr[i]);
        console.log(output);
       console.log(`Loop Count: ${output}`);
    }
    return
}
console.log(times(num))
// Q3: Loop over the following array and console.log the current index value
//      - ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//      - The console should similar to the following:
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon
  //var Power = ['Zeus', 'Hades', 'Hermies', 'Poseidon'];
    //    function names(arr){
      //      for(var i = 0; i < arr.length; i++){
        //        console.log(arr[i]);
          //  }
            //return ''
        //}

        //console.log(names(Power));

// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As' 'Possible']
    // Output: ['A','S','A','P']
    var words = ['As', 'Soon', 'As', 'Possible'];
        function names(arr){
          var input = arr[i];
          for(var i = 0; i < words.length;i++){
            var input = words[i];
            var mid = input.charAt(0)
            output.push(mid);
        }

        console.log(names(words));

// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
   // var arrOfStr = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    //function capscndLst(arr){
      //  var capWords = [];
        //for(var i = 0; i < arr.length; i++){
          //  var ele = arr[i]
            //var one = elle.slice(0, 2).toUpperCase();
            //var two = ele.slice(1, -2);
            //var three = elle.slice(-2).toUpperCase();
            //var four = elle.slice(-2).toUpperCase();
            //var five = elle.slice(-2).toUpperCase();
            //var six = elle.slice(-2).toUpperCase();
            //var capitalized = one + two + three + four + five + six;
        
            //console.log(last)

          //  capWords.push(capitalized);
        //}

      //  return capWords;
    //}

   // console.log(capfrstLst(arrOfStr));

// Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ]
    var names = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis'];
    function initial(arr){
      for(var i = 0; i < arr.length; i++){
                console.log(arr[i]);
                var ele = arr[i]
                name1.ele.splice(0,8).remove;
                name2.ele.splice(16,23).remove;
                name3.ele.splice(31,38,45).remove;
                name4.ele.splice(53,60,67).remove;
                var remover = name1 + name2 + name3 + name4;
            }
            return remover;
        }

        console.log(initial(names));
