// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
// JavaScript: returns an Array;
// Have fun!
// for example, a tower of 3 floors looks like below
// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below
// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
function towerBuilder(nFloors){

    let numStars = nFloors * 2 - 1;
    let base = ''
    let towerAdd = []
    let spaces = ''

    for(i = 0; i < nFloors; i++){
        base += '*'
    }
    console.log(base)

    for(let i = 0; i < nFloors; i++){
        towerAdd.unshift(spaces + base + spaces)
        base = base.slice(2)
        spaces += ' '
    }
    return towerAdd
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
function towerBuilder(nFloors) {
    const tower = [];
  
    for (let i = 0; i < nFloors; i++) {
      tower.push(
        ' '.repeat(i) +
        '*'.repeat(1 + (2 * (nFloors - 1 - i))) +
        ' '.repeat(i)
      );
    }
  
    return tower.reverse();
  }