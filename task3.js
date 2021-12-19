const button3 = document.querySelector('#btnTask3');

var input3 = document.querySelector("#askTask3");
var output3 = document.querySelector("#answerTask3");

let answer3 = '';

function handleClick3() {

    answer3 = (input3.value.split('').reverse().join(''));
    output3.textContent = answer3;
    input3.value = '';
}


button3.addEventListener('click', handleClick3);