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

console.log(zeroNumber)
console.log(evenNumber)
console.log(oddNumber)