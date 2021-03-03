let enterNumber = primeNumber1(+prompt("Введите любое целое положительное число, но не более 1000", ""));


// primeNumber1 сначала отсеивает явно неверные данные, а потом отсылает к primeNumber2, которая собственно и определяет простое число

function primeNumber1(enterNumber) {

if (enterNumber <= 0 || enterNumber > 1000 || isNaN(enterNumber)) {
  console.log ("Данные неверны");
} else if (enterNumber == 1) {
  console.log("1 не является простым числом, а скорее формирует свою специальную категорию — «единицу»");
} else {
  primeNumber2(enterNumber);
} 
}

function primeNumber2(namber) {
let i = 2;
let j = 0;
while (i <= namber) {
  if (namber%i == 0) {
    j++;
  }
  i++;
}

if (j == 1) {
  console.log("Ведено число является простым");
} else {
  console.log("Ведено число не относится к категории простых чисел");
}
}