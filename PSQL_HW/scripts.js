let allDefjam = document.getElementById('allDefjam');
function addDefjam(e){
    let defjam = {
    name: document.getElementById('name').Value,
    image: document.getElementById('image').Value,
    health: document.getElementById('health').Value,
    speed: document.getElementById('speed').Value,
    tough: document.getElementById('tough').Value,
    skill: document.getElementById('skill').Value,
    attackname: document.getElementById('attackname').Value,
    moves: document.getElementById('moves').Value,
    }
    fetch('http://localhost:3000/defjam', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json'
        },
        body: JSON.stringify(defjam)
    })
    .then(res => res.json())
    .catch(error => console.log(error))

    getDefjam();
}

function getDefjam(){
    allDefjam.innerHTML = '';
    fetch('http://localhost:3000/character', {method: 'GET'})
    .then(res => res.json())
    .then(res => {
        res.forEach(defjam => {
            let card = document.createElement('div');

            card.setAttribute('class', 'card');

            card.innerText = defjam.name;

            allDefjam.appendChild(card)
            console.log(defjam)
        });
    })
    .catch(error => console.log(error))
}