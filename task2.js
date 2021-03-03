let X = +(prompt ("Введите значение X"));

let typeX = typeof(X);

console.log(typeX);

switch (typeX) {
    case 'string':
        console.log('X - строка');
        break;
    case 'number':
        console.log('X - число');
        break;
    case 'boolean':
        console.log('X - булев');
        break;
    default:
        console.log('Тип X не определён');
}