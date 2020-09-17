// Create a set of variables for your dream vehicle (number of wheels, number of seats, etc...) This should be at least 10 variables
var car = 'Honda';
var model = 'Accord';
var year = 2020;
var wheels = 4;
var seats = 5;
var color = 'Black';
var fuel = 'Gasoline';
var backupCamera = true;
var manual = false;
var interiorColor = 'White';
var driveType = 'FWD';

var sentence = `My car is a ${car}. The model is ${model}, the car year is ${year}, Have ${wheels} wheels, have ${seats} seats, The car color is ${color}, car fuel is ${fuel}, the interior is ${interiorColor}, and drive type is ${driveType}`

console.log(sentence);

// Write code that converts the following into a city name & a city code
    // For example: MAN54681, City: Manchester Piccadilly"
    // write code that will convert each of the following. Hint, there is a solution that will convert them all perfectly instead of creating a unique solution for each entry.
    // var fulltext1 = "MAN54681;Manchester Piccadilly"
    // MAN54681, City: Manchester Piccadilly
    var fulltext1 = "MAN54681;Manchester Piccadilly";
    // console.log('Code: ' + fulltext1.replace(';', ', City: '));
    // var fulltext2 = 'GNF6519871681;Greenfield"
    // GNF6519871681, City: Greenfield
    var fulltext2 = "GNF6519871681;Greenfield"
     // console.log('Code: ' + fulltext2.replace(';', ', City: '));
    // var fulltext3 = "LIV515;Liverpool"
    // LIV515, City: Liverpool
    var fulltext3 = "LIV515;Liverpool"
     // console.log(str.split('LIV515;Liverpool'))
    // console.log('Code: ' + fulltext3.replace(';', ', City: '));
    // SYB98981981, City: Stalybridge
    var fulltext4 = "SYB98981981;Stalybridge"
    // var fulltext5 = HUD517819181;Huddersfield"
    // HUD517819181, Huddersfield
    var fulltext5 = "HUD517819181;Huddersfield"
     // console.log('Code: ' + fulltext5.replace(';', ', City: '));