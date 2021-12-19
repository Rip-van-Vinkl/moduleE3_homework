
const button6 = document.querySelector('#btnTask6');
var input6 = document.querySelector("#askTask6");
var output6 = document.querySelector("#answerTask6");

let answer6 = '';

function handleClick6() {

  answer6 = (input6.value.split(' '));

  let answer6New = [];
  answer6.forEach(function (item) {
    if (item !== "") {
      answer6New.push(item);
    }
  });
  
  function all_are_equal(i) {
    return i == answer6New[0];
  }

  output6.textContent = answer6New.every(all_are_equal);

}

button6.addEventListener('click', handleClick6);
