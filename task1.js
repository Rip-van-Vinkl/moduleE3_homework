let enterNumber = +prompt("Введите значение", "");

if (isNaN(enterNumber)) {
  console.log ("Введённое значение является NaN");
} else if (enterNumber%2 === 0) {
  console.log("Ведено чётное число");
} else {
  console.log("Ведено нечётное число");
}