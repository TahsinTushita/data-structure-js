const arr = [1, 2, 3, 4];

function isEven(num) {
  return num % 2 === 0;
}

// const newArr = arr.filter((item) => isEven(item));
// console.log(newArr);

function filter(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
      arr2.push(arr[i]);
    }
  }

  return arr2;
}

console.log(filter(arr));
