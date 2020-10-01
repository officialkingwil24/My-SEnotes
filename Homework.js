function getCount(str) {
    let vowelStr = 'AEIOUaeiou'
    let vowelsCount = 0;
    
     for(var i = 0; i < str.length ; i++){
        if(vowelStr.indexOf(str[i]) !== -1){
          vowelsCount += 1;
        }
      }
      return vowelsCount;
    }
    console.log(getCount('chicken'))

    console.log(getCount('qwt'))
    console.log(getCount('plk'))
    console.log(getCount('cp'))