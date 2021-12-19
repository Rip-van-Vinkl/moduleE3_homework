const button2 = document.querySelector('#btnTask2');

var input2 = document.querySelector("#askTask2");
var output2 = document.querySelector("#answerTask2");

let answer2 = '';

function handleClick2() {
  if (input2.value === null || input2.value === '' || input2.value.split(" ").length - 1 === input2.value.length) { // 0 - чётное число
    answer2 = 'boolean';
  } else if (isNaN(+input2.value)) {
    answer2 = 'string';
  } else if (+input2.value) {
    answer2 = 'number';
  } else {
    answer2 = 'Хрен его знает, что за Х.. ты ввёл(а)!'; // а что ещё осталось? особенно после унарного плюса из того, что можно принять из промпта
  }

  output2.textContent = answer2;
  input2.value = '';
}


button2.addEventListener('click', handleClick2);





// сначала проверяет на отмену ввода, ввод без значения и строку из пробелов - выдаёт boolean
// потом на строку, излишняя на число и последняя - на что-то загадочное
/*
let answer = prompt();

if (answer === null || answer === '' || answer.split(" ").length-1 === answer.length) {
  console.log('boolean')
} else if (isNaN(answer)) {
  console.log('string')
} else if (+answer) {
  console.log('number')
} else {
  console.log('Хрен его знает, что ты ввёл(а)!')
} 
*/








  