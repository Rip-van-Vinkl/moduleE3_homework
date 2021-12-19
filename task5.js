const button5 = document.querySelector('#btnTask5');
var input5 = document.querySelector("#askTask5");
var output51 = document.querySelector("#answerTask51");
var output52 = document.querySelector("#answerTask52");
let answer51 = '';

function handleClick5() {

  answer51 = (input5.value.split(' '));

  // очистим массив от лишних пробелов
  let answer51New = [];
  answer51.forEach(function (item) {
    if (item !== "") {
      answer51New.push(item);
    }
  });

  // сформируем массив для вывода отдельных элементов, т.к. я не знаю, как это сделать по-другому
  let answer51New2 = [];
  let i = 0;
  answer51New.forEach(function (item) {
    i++;
    answer51New2.push(' №' + i + ' элемент массива = ' + item);
  });

  // выводим результаты
  output51.textContent = 'количество элементов массива = ' + answer51New.length;
  output52.textContent = answer51New2;

}

button5.addEventListener('click', handleClick5);