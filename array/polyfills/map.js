const arr = [1, 2, 3];

function doubleValue(value) {
  return value * 2;
}

function map(arr) {
  let newArr = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = doubleValue(arr[i]);
  }

  return newArr;
}

console.log(map(arr));
