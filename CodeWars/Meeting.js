// John has invited some friends. His list is:
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s){
    // Split things up into arrays
  const removeS = s.split(';');
  for(let i = 0; i < removeS.length; i++){
    // By using the first and last of each person isolated, (iterate over) we want to apend FirstName with LastName + ", "
    const array = removeS[i].split(":");
    // Then uppercase
    // Then add () to respective places
    removeS[i] = `${array[1]}, ${array[0]}`.toUpperCase();
  }
  removeS.sort()
  // sort array based off last name with a condition for first name if last is the same
  // return with .join("")
  return removeS.map(e => `(${e})`).join('');
}

// (CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));

// Solution 2
// function meeting(s) {
//     return s = s.toUpperCase().split(';').map(name => name.split(':')).map(name => name.reverse()).sort().reduce((acc, name) => acc + `(${name[0]}, ${name[1]})`, '')
// }

// Solution 3
// const meeting = s =>
//   s.split(`;`).map(val => val.toUpperCase().replace(/(\w+):(\w+)/, `($2, $1)`)).sort().join(``);