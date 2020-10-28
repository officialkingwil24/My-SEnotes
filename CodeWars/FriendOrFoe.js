// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Solution 1
function friend(friends){  
    return friends.filter
(function(names){ 
    return names.length === 4
  });  
}
console.log(friend(["Josh", "Fred", "Bat", "Batman", "Louie", "Nani"]));

// Solution 2
function friend(friends){
    return friends.filter(buddy => buddy.length === 4) // buddy is a element in an array
}
console.log(friend(["Mark", "Shawn", "Bane", "Joker"]));