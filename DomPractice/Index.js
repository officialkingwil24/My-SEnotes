var body = document.querySelector('body')
var picture = document.querySelector('img');
body.setAttribute('style', 'background-color: red')
picture.setAttribute('src', 'https://i.pinimg.com/736x/ae/10/c0/ae10c01ade4c6a2aab726f77c4182d05.jpg');
var allButtons = document.querySelectorAll('button')
picture.setAttribute('height', '100%');

var newText = document.createElement('h1');
var newPara = document.createElement('p');

newText.innerHTML = "Hello World!"
newPara.innerHTML = "This is a new P element.";

body.appendChild(newText);
body.appendChild(newPara);

function inputChange(event){
console.log(event);
console.log(event.target);
console.log(event.target.innerHTML);

var char = event.target.innerHTML;

var screen = document.querySelector('#screen');

screen.innerHTML += char;
}

function addAllEventListeners(arr){
    for(var i = 0; i < arr.length; i++){

        if(arr[i].innerHTML.match(/^[0-9]*$/) && arr[i].innerHTML != ''){
            console.log();
        }
        arr[i].addEventListener('click', inputChange);
    }
}
addAllEventListeners(allButtons)