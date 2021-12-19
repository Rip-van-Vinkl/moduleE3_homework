const button4 = document.querySelector('#btnTask4');


var output4 = document.querySelector("#answerTask4");

let answer4 = '';

function handleClick4() {

    answer4 = Math.floor(Math.random()*100);
    output4.textContent = answer4;

}

button4.addEventListener('click', handleClick4);
