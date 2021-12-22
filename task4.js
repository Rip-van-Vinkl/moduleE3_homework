const button4 = document.querySelector('#btnTask4');
var input41 = document.querySelector("#askTask41");
var input42 = document.querySelector("#askTask42");
var output4 = document.querySelector("#answerTask4");


function handleClick4() {

    window.input41Value = input41.value;
    let input42Value = input42.value;

    if (checkingValue4(input41Value)) {
        if (checkingValue4(input42Value)) {
            if (input41Value == input42Value) {
                output4.textContent = 'Введённые занчения одинаковы';
            } else {
                output4.textContent = ''
                if (input41Value < input42Value) {
                    let timerIdUp = setInterval(() => timerUp(), 1000);
                    setTimeout(() => {
                        clearInterval(timerIdUp);
                        output4.textContent = 'Я иду искать!';
                    }, (input42Value - input41Value + 2) * 1000);
                }

                if (input41Value > input42Value) {
                    let timerIdDown = setInterval(() => timerDown(), 1000);
                    setTimeout(() => {
                        clearInterval(timerIdDown);
                        output4.textContent = 'Поехали!';
                    }, (input41Value - input42Value + 2) * 1000);
                }
            }
        } else {
            output4.textContent = 'Введено неверное значение';
        }
    } else {
        output4.textContent = 'Введено неверное значение';
    }
}


function checkingValue4(value) {
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


function timerUp() {
    output4.textContent += input41Value++ + " ";
}

function timerDown() {
    output4.textContent += input41Value-- + " ";
}

button4.addEventListener('click', handleClick4);