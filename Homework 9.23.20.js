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
  //var num = [8,5,6];
  //function times(arr){
    //for(var i = 0; i < arr.length; i++){

      //  var output = num.indexOf(arr[i]);
       //console.log(Loop Count: ${i});
    //}
    //return
//}
//console.log(times(num))

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
            //return
        //}

        //console.log(names(Power));

// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As' 'Possible']
    // Output: ['A','S','A','P']
  //  var commad = ['As', 'Soon', 'As', 'Possible'];

    //    function word(arr){
      //    var capWords = [];
        //  for(var i = 0; i < words.length;i++){
          //  var ele = arr[i];
            //var first = ele[0]
            // var capitalized = first
            //capWords.push(capitalized)
        //} 
        //return capWords;
    //}
        //console.log(word(commad));

// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
    //var fruittree = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

    //function capsec(arr){
        //var capWords = [];

        //for(var i = 0; i < arr.length; i++){
            //var ele = arr[i]

          //var secondLet = ele[1].toUpperCase();
          //var wordArr = ele.split('');
          //wordArr[1] = secondLet;

          //var capitalized = wordArr.join('');
          //wordArr[1] = secondLet;

          // var capitalized = wordArr.join('');
          //capWords.push(capitalized);
        //}
        //return capWords;
      //}
     // console.log(capsec(fruittree))

// Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL' ]
    //var names = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis'];
    //function initial(arr){
      //var output =[];
      //for(var i = 0; i < arr.length; i++){
          //var nameSplt = arr[i].split(' ');
          //var initials = '';
          //var spltName = nameSplt[0];
          //var middle = spltName[0];
          //var middle = initials;

          //console.log(spltName);
          //console.log(nameSplt);
          //console.log(middle);

          //for(var j = 0; j < nameSplt.length; j++){
            //var currentName = nameSplt[j];
            //var initial = currentName[0];
            //initials = initials + initial;
          //}
          //output.push(initials);
        //}
      //  return output;
    //}
      //  console.log(initial(names));

       // for Q5
      //  var fruits = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
        //function fruitCap(arr){
          //for(var i = 0; i < arr.length; i++){
            //var currentArr = arr[i];
            //var upperCase = arr[i][1].toUpperCase();
            //var endOfSting = currentArr.slice(2);
            //var newString = arr[i][0] + upperCase + endOfSting;
            //arr[i] = newString;
          //}
          //return arr;
        //}
        //console.log(fruitCap(fruits))

  //Q6 Correct & Shorter
  //var names = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis'];
    //function initial(arr){
      //var output = [];
      
      //for(var i = 0; i < arr.length; i++){
        //var nameSplt = arr[i].split(' '); // ['Samuel', 'Pierre', 'Louis']
        //var initials = nameSplt[0][0]; // accumilator, starting with first initial, 'S'

        //for(var j = 1; j < nameSplt.length; j++){
          //var currentName = nameSplt[j]; // 'Pierre'
          //var initial = currentName[0]; // 'P'
          //initials = initials + initial; // 'S' + 'P'
        //}
        //output.push(initials);
      //}
      //return output;
    //}
   // console.log(initial(names))