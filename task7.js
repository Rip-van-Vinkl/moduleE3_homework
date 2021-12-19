const button7 = document.querySelector('#btnTask7');
var input7 = document.querySelector("#askTask7");
var output7 = document.querySelector("#answerTask7");

let answer7 = '';

function handleClick7() {

  answer7 = (input7.value.split(' '));

  let answer7New = [];
  answer7.forEach(function (item) {
    if (item !== "") {
      answer7New.push(item);
    }
  });

let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;
let other = 0;

for (let i = 0; i < answer7New.length; i++) {


    if (typeof (+answer7New[i]) == "number") {

 if (isNaN(+answer7New[i])) {
      other++;
    } else if (!Number.isInteger(+answer7New[i])) {
      other++;
    } else if (+answer7New[i] === 0) {
      zeroNumber++;
    } else if (+answer7New[i] % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  } 
} 

  output7.textContent = 'нулей: ' + zeroNumber + ' | ' + 'чётных: ' + evenNumber + ' | ' + 'нечётных: ' + oddNumber;
  
}

button7.addEventListener('click', handleClick7);



/*
const arr = [0, 4, 4, 5, null, 'текст', true, 0, 0];

let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) == "number" && arr[i] == 0)
    zeroNumber += 1
  else if (typeof(arr[i]) == "number" && arr[i] % 2 == 0)
    evenNumber += 1
  else if (typeof(arr[i]) == "number")
    oddNumber += 1
  else
    ;
}

console.log('нулей: ' + zeroNumber)
console.log('чётных: ' + evenNumber)
console.log('нечётных: '+ oddNumber)
*/