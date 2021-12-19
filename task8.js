const button8 = document.querySelector('#btnTask8');
var input81 = document.querySelector("#askTask81");
var input82 = document.querySelector("#askTask82");
var output8 = document.querySelector("#answerTask8");

let answer81 = '';
let answer82 = '';

function handleClick8() {

  answer81 = (input81.value.split(' '));
  answer82 = (input82.value.split(' '));

  let answer81New = [];
  let answer82New = [];

  spaceKill(answer81, answer81New)
  spaceKill(answer82, answer82New)

  function spaceKill(a, b) {
    a.forEach(function (item) {
      if (item !== "") {
        b.push(item);
      }
    });
  }

  let data = new Map(); 
  
  for (let i = 0; i < answer81New.length; i++) {
    data.set(answer81New[i], answer82New[i]);
  }

  
  let answer8 = [];

  data.forEach((value, key) => {
    answer8.push(` | Ключ — ${key}, значение —  ${value}`);
  });

  output8.textContent = answer8;;
  
}

button8.addEventListener('click', handleClick8);






/*
console.log('____1.1____')

let data = new Map([
  ['key1', 'value1'],
]);  

data.set("1", "string");
data.set(1, "number");
data.set(true, "boolean");


data.forEach((value, key) => {
  console.log(`Ключ — ${key}, значение —  ${value}`);
});

console.log('____1.2____')

for (let key of data.keys()) {
  console.log('Ключ — ' + key + ', значение — ' + data.get(key));
};



console.log('____2____')

let user = {name: "Sergey", age: 34, sex: "men",};
Object.keys(user).forEach(function(key) {
  console.log('Ключ — '+ key +', значение — ' + user[key]);
});
*/