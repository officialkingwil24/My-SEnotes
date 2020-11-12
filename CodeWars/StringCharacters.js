// you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
function solve(s){
    const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // const qualifier to declare a variable as constant, can't be change
    const low = "abcdefghijklmnopqrstuvwxyz";
    const number = "1234567890";
    
    //Need counters for up, low, number, and special
    let upCount = 0;
    let lowCount = 0;
    let numberCount = 0;
    let specialCount = 0;
    
    for(let i = 0; i < s.length; i++){ //Iterate over the string
      if(up.indexOf(s[i]) >= 0){ //If the character is in uppercase
        upCount++; //Increment up
      }else if(low.indexOf(s[i]) >= 0){
        lowCount++;
      }else if(number.indexOf(s[i]) >= 0){
        numberCount++;
      }else{
        specialCount++;
      }
    }
    return [upCount, lowCount, numberCount, specialCount]; //return an array of the counted variables
}

console.log(solve("Codewars@codewars123.com"));
console.log(solve("bgA5<1d-tOwUZTS8yQ"));
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"));
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"));

// Solution 2
// const solve = (str) => (
//     [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
// ); 

// Solution 3
// const solve = x => {
//     let u = x.match(/[A-Z]/g)||[]
//     let d = x.match(/[a-z]/g)||[]
//     let n = x.match(/[0-9]/g)||[]
//     let s = x.match(/[^A-Z0-9]/gi)||[]
//     return [u.length, d.length, n.length, s.length]
// }

// Solution 4
// function solve(s){
//     var up = s.match(/[A-Z]/g).length;
//     var low = s.match(/[a-z]/g).length;
//     var num = s.match( /\d/g).length;
//     var special = s.length - (up + low + num);
     
//     return [up,low,num,special]
   
// }