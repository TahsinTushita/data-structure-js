// Creation
// create an empty map
const map1 = new Map();

// create a map from an array
const map2 = new Map([
  [1, "Jack"],
  [2, "Jill"],
  ["animal", "fox"],
]);

// if we put any extra value in the constructor it will be ignored
const map3 = new Map([
  [1, "Jack", "Johnson"], // the value 'Johnson' is ignored
  [2, "Jill"],
  ["animal", "Elephant"],
]);

// create a map from an object
const person = {
  name: "Jack",
  age: 20,
};

const myMap = new Map(Object.entries(person));
console.log(myMap); // Map(2) { 'name' => 'Jack', 'age' => 20 }

// Add key/value pair
map1.set(1, "Jack");

// Retrive a key from the map
map1.get(1); // Jack

// check if the map has a key
map1.has(1); // true

// remove a specific key from the map
map3.delete(2);

// return all keys from a map
map1.keys();

// return all values from a map
map1.values();

// return all key/value pairs from a map
map1.entries();

// return the size of the map
map1.size; // 1

// remove all items from a map
map1.clear();

// Iteration
// using forEach
map2.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// for loop
for (const [key, value] of map2) {
  console.log(`${key}: ${value}`);
}
