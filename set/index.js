// Creation
// create an empty set
const mySet = new Set();

// add a value to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // [1, 2, 3]

// check if the set contains a specific value
mySet.has(2); // true

// remove a specific value from the set
mySet.delete(3);

// return all values from the set
mySet.values(); // [1, 2]
mySet.keys(); // [1. 2]

// return all values from the set like [value, value] array
mySet.entries(); // {[1, 1], [2, 2]}

// return the size of the set
mySet.size; // 2

// remove all items from the set
mySet.clear();

// Set Composition methods
// difference
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

const diffsA = setA.difference(setB); // Set(3) {1, 2, 3}
const diffsB = setB.difference(setA); // Set(3) {6, 7, 8}

// intersection
const intsA = setA.intersection(setB); // set(2) {4, 5}

// symmetricDifference
const symA = setA.symmetricDifference(setB); // set(6) {1, 2, 3, 6, 7, 8}

// union
const unA = setA.union(setB); // set(8) {1, 2, 3, 4, 5, 6, 7, 8}

// isDisjointFrom
const distA = setA.isDisjointFrom(setB); // false

// isSubsetOf
const subA = setA.isSubsetOf(setB); // false

// isSupersetOf
const supA = setA.isSupersetOf(setB); // false

// get rid of duplicates from an array
const myArray = [1, 1, 2, 2, 3, 3];
const uniqueArray = [...new Set(myArray)];
console.log(uniqueArray); // [ 1, 2, 3 ]

// Iteration
// forEach
mySet.forEach((value) => {
  console.log(value);
});

// for loop
for (const value of mySet) {
  console.log(value);
}
