// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an 
// appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk
// Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing 
// directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know
// it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you 
// will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting 
// pointeturn false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

// Solution 1
// function isValidWalk(walk){
//     let sums={'n':0, 's':0, 'e':0, 'w':0};
//     if(walk.length !=10)return false;
//     for(let i=0;i<walk.length;i++){
//         sums[walk[i]]++
//     }
//     return sums['n'] == sums['s'] && sums['w'] ==['e'];
// }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(!isValidWalk(['w']));
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']));

// Solution 2
function isValidWalk(walk){
    // if the walk doesn't take 10 mins then it return false
    if(walk.length !== 10){
      return false;
}
  const walkWhere ={
      n: 0,
      s: 0,
      e: 0,
      w: 0
    };
    // count how many times he went in each direction for north, south, east and west
    walk.map(direction => walkWhere[direction]++);
     // to return to the same place he needs to walk the sames steps to north and south
    // as well as east and west
    return walkWhere.n === walkWhere.s
      && walkWhere.e === walkWhere.w;
}