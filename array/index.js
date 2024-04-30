// Creation
// create an empty array
const arr1 = [];

// create an array with elements
const arr2 = [1, "me", "hello there", [3, 5], { one: 1 }];

// create an array with a specific length
const arr3 = new Array(26);

// create an array & fill it with some value
const arr4 = new Array(26).fill(0);

// get the length
arr3.length; // 26

// add an item at the end of an array
const arr = [1, 2, 3, 4];
arr.push(5); // [1, 2, 3, 4, 5]

// remove the last element of the array
arr.pop(); // [1, 2, 3, 4]

// add an element at the start of the array
arr.unshift(6); // [6, 1, 2, 3, 4]

// remove an element from the start of the array
arr.shift(); // [1, 2, 3, 4]

// reverse an array
arr.reverse(); // [4, 3, 2, 1]
arr.reverse(); // [1, 2, 3, 4]

// join elements of an array based on the given argument to form a string
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join("")); // "FireAirWater"
console.log(elements.join("-")); // "Fire-Air-Water"

// return a new array by slicing a protion of it
const arrSlice = [1, 3, 4, 2, 5];
const newSlice = arrSlice.slice(1, 3); // [3,4]

// take an array, call a function for every single element of the array & return a new array
const arrMap = [1, 3, 4, 2, 5];
const newMap = arrMap.map((item) => item * 2); // [2, 6, 8, 4, 5]

// take an array, filter the values inside an array & return a new array
const arrFilter = [1, 3, 4, 2, 5];
const newFilter = arrFilter.filter((item) => item % 2 === 0); // [4, 2]

// take an array, iterate over all the elements & reduce them to a single value
const arrReduce = [5, 1, 3, 2, 6];

const outputSum = arrReduce.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(outputSum); // 17

// call a function once for each array element
const arrFor = [1, 2, 3];
arrFor.forEach((element) => console.log(element)); // 1 2 3

// Sort
// sort without a comparison function (may give incorrect result)
const arrSort = [5, 1, 3, 2, 6];
arrSort.sort(); // [1, 2, 3, 5, 6]

// sort a number array in ascending order
arrSort.sort((a, b) => a - b); // [1, 2, 3, 5, 6]

// sort a number array in descending order
arrSort.sort((a, b) => b - a);

// sort a string array in ascending order
const stringsArr = ["a", "A", "b"];
stringsArr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
console.log(stringsArr); // Output: ["a", "A", "b"]

// sort a string array in descending order
stringsArr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1));
console.log(stringsArr); // Output: ["b", "A", "a"]

// sort an array without modifying the original array
let originalArray = [2, 1, 3];
let sortedArray = originalArray.slice().sort((a, b) => a - b);
console.log(originalArray); // Output: [2, 1, 3]
console.log(sortedArray); // Output: [1, 2, 3]

// takes in a callback function that returns the 1st item that satisfies the condition
const arrFind = [5, 1, 3, 2, 6];
const newFind = arrFind.find((item) => item > 4); // [5, 6]

// turns iterable or array like objects(string, nodeList, Set, arr) into array
const udemy = "udemy";
console.log(Array.from(udemy)); // ["u", "d", "e", "m", "y"]
console.log(Array.from([1, 2, 3], (x) => x + x)); // [2, 4, 6]

// call it on an object with a length property & then have a callback function to return
// the values we want to set to the array items
const items = Array.from({ length: 10 }, (_, index) => {
  return index;
});

console.log(items); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// use for pagination
const pageItems = Array.from({ length: 120 }, (_, index) => {
  return index;
});
console.log(pageItems);

const itemsPerPage = 14;

const pages = Math.ceil(pageItems.length / itemsPerPage);
console.log(pages);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = itemsPerPage * index;
  const tempArray = pageItems.slice(start, start + itemsPerPage);
  return tempArray;
});

console.log(newItems);

// [Array(14), Array(14), Array(14), Array(14), Array(14), Array(14), Array(14), Array(14), Array(8)]
