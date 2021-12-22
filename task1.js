const button1 = document.querySelector('#btnTask1');
var input1 = document.querySelector("#askTask1");
var output1 = document.querySelector("#answerTask1");

let answer1 = '';


function spaceKiller(sourceArray, newArray) {
  sourceArray.forEach(function (item) {
    if (item !== "") {
      newArray.push(item);
    }
  });
}

function howManyZerosEvenOdd(arr) {
  
  let zeroNumber = 0;
  let evenNumber = 0;
  let oddNumber = 0;
  let other = 0;

  for (let i = 0; i < arr.length; i++) {


    if (typeof (+arr[i]) == "number") {

      if (isNaN(+arr[i])) {
            other++;
          } else if (!Number.isInteger(+arr[i])) {
             other++;
          } else if (+arr[i] === 0) {
            zeroNumber++;
          } else if (+arr[i] % 2 === 0) {
             evenNumber++;
          } else {
            oddNumber++;
          }
        } 
      } 

  return ('нулей: ' + zeroNumber + ' | ' + 'чётных: ' + evenNumber + ' | ' + 'нечётных: ' + oddNumber);

};

function handleClick1() {

  answer1 = (input1.value.split(' '));

  let answer1New = [];

  spaceKiller(answer1, answer1New);

  output1.textContent = howManyZerosEvenOdd(answer1New);
  
}

button1.addEventListener('click', handleClick1);
