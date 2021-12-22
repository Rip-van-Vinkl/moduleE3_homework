const button5 = document.querySelector('#btnTask5');
var input51 = document.querySelector("#askTask51");
var input52 = document.querySelector("#askTask52");
var output5 = document.querySelector("#answerTask5");


function handleClick5() {

    let input51Value = input51.value;
    let input52Value = input52.value;

    if (checkingValue5(input51Value)) {
        if (checkingValue5(input52Value)) {
            output5.textContent = exponentiation5(input51Value, input52Value);
        } else {
            output5.textContent = 'Введено неверное значение';
        }
    } else {
        output5.textContent = 'Введено неверное значение';
    }
}


function checkingValue5(value) {
    if (value === null || value === '' || value.split(" ").length - 1 === value.length) {
        return (false);
    } else if (typeof (+value) == "number") {
        if (isNaN(+value)) {
            return (false);
        } else {
            return (value);
        }
    }
}


let exponentiation5 = (arg1, arg2)=> (arg1**arg2);

button5.addEventListener('click', handleClick5);