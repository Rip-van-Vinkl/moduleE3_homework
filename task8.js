// долго пытался разобраться, но так и не понял, почему в №2 работает, а в №1 нет. Оставил в коде проверочные строки.

console.log('№1')

let data = new Map([
  ['key1', 'value1'],
]);  

console.log(data)
console.log(Array.isArray(data));
console.log(data.get('key1'));

data.set("1", "string");
data.set(1, "number");
data.set(true, "boolean");

console.log(data)
console.log(Array.isArray(data));
console.log(data.get(1));


Object.keys(data).forEach(function(key) {
  console.log('Ключ — '+ key +', значение — ' + data[key]);
});


console.log('№2')

let user = {namee: "Serg", agee: 33, sex: "Men",};
console.log(user);
console.log(Array.isArray(user));
Object.keys(user).forEach(function(key) {
  console.log('Ключ — '+ key +', значение — ' + user[key]);
});