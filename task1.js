const button1 = document.querySelector('#btnTask1');

var input1 = document.querySelector("#askTask1");
var output1 = document.querySelector("#answerTask1");

let answer1 = '';

function handleClick1() {

  if (input1.value === null || input1.value === '' || input1.value.split(" ").length - 1 === input1.value.length) { // null получается, если нажать Esc
    answer1 = 'Упс, кажется, вы ошиблись и ввели пустую строку, строку из пробелов или нажали Esc';
  } else if (typeof (+input1.value) == "number") {
    if (isNaN(+input1.value)) {
      answer1 = "Введено NaN (скорее всего это строка) или дробное число, написанное через ','";
    } else if (!Number.isInteger(+input1.value)) {
      answer1 = "Упс, кажется, вы ошиблись и ввели нецелое число";
    } else if (+input1.value % 2 === 0) {
      answer1 = "Введено чётное число";
    } else {
      answer1 = "Введено нечётное число";
    }
  }

  output1.textContent = answer1;
  input1.value = '';
}

button1.addEventListener('click', handleClick1);




/*
//получаем значение с клавиатуры
let answer = prompt();

//сначала отсеиваем заведомый бред
if (answer === null || answer === '' || answer.split(" ").length-1 === answer.length) {
  console.log('Упс, кажется, вы ошиблись и ввели пустую строку, строку из пробелов или нажали Esc')
}

//с помощью унарного плюса преобразуем строку из промпта в тип number для дальнейшей обработки (делаем это много раз....)

else if (typeof(+answer) == "number") {

//проверка на нечисло
  if (isNaN(+answer)) {
   console.log("Ведено NaN (скорее всего это строка) или дробное число, написанное через ','");

//остались только числа
//проверка на нецелость, т.е. дробность числа
  } else if (!Number.isInteger(+answer)) {
    console.log("Упс, кажется, вы ошиблись и ввели нецелое число");

//проверка на чётность
  } else if (+answer % 2 === 0) {
      console.log("Ведено чётное число");

//остаток - нечётные
  } else {
      console.log("Ведено нечётное число");
  } 
}
*/