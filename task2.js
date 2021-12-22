const button2 = document.querySelector('#btnTask2');

var input2 = document.querySelector("#askTask2");
var output2 = document.querySelector("#answerTask2");

let answer2 = '';

// primeNumber1 сначала отсеивает явно неверные данные, а потом отсылает к primeNumber2, которая собственно и определяет простое число

function primeNumber1() {
  if (input2.value <= 0 || input2.value > 1000 || isNaN(+input2.value) || !Number.isInteger(+input2.value)) {
    answer2 = "Данные неверны";
  } else if (input2.value == 1) {
    answer2 = "1 не является простым числом, а скорее формирует свою специальную категорию — «единицу»";
  } else {
    primeNumber2(input2.value);
  }
  output2.textContent = answer2;
  input2.value = '';
}

function primeNumber2(namber) {
  let i = 2;
  let j = 0;
  while (i <= namber) {
    if (namber % i === 0) {
      j++;
    }
    i++;
  }

  if (j == 1) {
    answer2 = `Веденое число: ${namber} - является простым`;
  } else {
    answer2 = `Веденое число: ${namber} - не относится к категории простых чисел`;
  }
  return (answer2);
}

button2.addEventListener('click', primeNumber1);