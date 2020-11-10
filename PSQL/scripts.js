function addDefjam(e){
    let defjam = {
    name: 'Method Man',
    skill: 'Wrestling',   
    }
    fetch('http://localhost:3000/defjam', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json'
        },
        body: JSON.stringify(defjam)
    })
    .then(res => console.log(res))
    .then(res => res.json())
    .catch(error => console.log(error))
}