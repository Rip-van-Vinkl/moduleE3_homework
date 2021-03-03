const arr = [1, 2, 3, 4, 5];

function all_are_equal(i) {
  return i == arr[0];
}

console.log(arr.every(all_are_equal));