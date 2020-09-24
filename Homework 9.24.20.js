// level 0
    // Declare an object called person. 
    // Give the person several properties, including full name, height, and more
    // You'll be using this object for the remaining questions.
   // var person = {
     //   fullName: 'Will East',
       // height: "5'8",
        //weight: '168',
        //skin: 'Black',
        //hairColor: 'Brown',
        //eyeColor: 'Dark Brown',
        //day: ['Terrible', 'Chill', 'Sleepy']
    //}
    //console.log(person)

    // Q0.1
        // Add an email key value pair to the object called person
    //person['email'] = 'Willeast14@Gmail.com';
    //console.log(person)

// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
            // example 
                // input:
               // person = {
                //    fullName = 'Nic Leask',
                  //  email = 'nic@gmail.com',
                //}
                // output:
                //'@gmail.com'
               // email = person['email'].slice(-10)
               // console.log(email)

// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        // If the person is the same log, "Same height as Beckham"
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
    //var height = "5'11";
    
      //  if(height > "5'11"){
        //    console.log("Taller than Beckham");
         //} else if (height == "5'11"){
           //  console.log("Same height as Beckham")
         //}
        //if(height < "5'11"){
          //  console.log("Shorter than Beckham");
            //    }
              //  console.log(height)

    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
        //var key = 'Name';
        //var obj1 = {
            //name: 'Ice Cube',
            //skin: 'Black',
            //hairColor: 'Black',
            //eyeColor: 'Dark Brown',
            //height: "5'8",
            //age: '51',
          //  favorite: ['It Was a Good Day']
        //}
        //function searchKey(name, num){
            //if (name[num]){
              //  return name[num]
            //} else {
           //     return 'No such value'
         //   }
       // }
     //   console.log(searchKey(obj1, 'favorite'))


// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"
            function Initial(person){
              var nameSplt = person['fullName'].split(' ')
              var name = nameSplt[0]
              var initials2 = ''
              for(var j = 0; j < nameSplt.length; j++){
                var name = nameSplt[j]
                var initial = name[0]
                initials2 = initials2 + initial
              }
              return initials2
            }
            console.log(initial(person));