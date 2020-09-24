var key = 'Name';
        var obj1 = {
            name: 'Ice Cube',
            skin: 'Black',
            hairColor: 'Black',
            eyeColor: 'Dark Brown',
            height: "5'8",
            age: '51',
            favorite: ['It Was a Good Day']
        }
        function searchKey(name, num){
            if (name[num]){
                return name[num]
            } else {
                return 'No such value'
            }
        }
        console.log(searchKey(obj1, 'favorite'))