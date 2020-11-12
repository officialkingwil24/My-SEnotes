let allStreetfighter = document.getElementById('allStreetfighter');
function addStreetfighter(e){
    let streetfighter = {
    name: document.getElementById('name').Value,
    nickname: document.getElementById('nickname').Value,
    power: document.getElementById('power').Value,
    health: document.getElementById('health').Value,
    mobility: document.getElementById('mobility').Value,
    techniques: document.getElementById('techniques').Value,
    range: document.getElementById('range').Value,
    occupation: document.getElementById('occupation').Value,
    style: document.getElementById('style').Value,
    skill: document.getElementById('skill').Value
    }
    fetch('http://localhost:3000/streetfighter', {
        method: 'POST',
        headers: {
            'Content-Type': 'applcation/json'
        },
        body: JSON.stringify(streetfighter)
    })
    .then(res => res.json())
    .catch(error => console.log(error))

    getStreetfighter();
}

function getStreetfighter(){
    allDefjam.innerHTML = '';
    fetch('http://localhost:3000/streetfighter', {method: 'GET'})
    .then(res => res.json())
    .then(res => {
        res.forEach(streetfighter => {
            let card = document.createElement('div');

            card.setAttribute('class', 'card');

            card.innerText = streetfighter.name;

            allStreetfighter.appendChild(card)
            console.log(Streetfighter)
        });
    })
    .catch(error => console.log(error))
}