const button3 = document.querySelector('#btnTask3');
var input31 = document.querySelector("#askTask31");
var input32 = document.querySelector("#askTask32");
var output3 = document.querySelector("#answerTask3");


function handleClick3() {

    let input31Value = input31.value;
    window.input32Value = input32.value;

    if (checkingValue(input31Value)) {
        if (checkingValue(input32Value)) {
            output3.textContent = sumLevel1(+input31Value);
        } else {
            output3.textContent = 'Введено неверное значение';
        }
    } else {
        output3.textContent = 'Введено неверное значение';
    }
}


function checkingValue(value) {
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


function sumLevel1(arg1) {
    return sumLevel2(arg1, +input32Value);
}

function sumLevel2(arg1, arg2) {
    return (arg1 + arg2);
}


button3.addEventListener('click', handleClick3);