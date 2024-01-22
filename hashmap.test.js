/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
const HashMap = require("./hashmap.js");

test("Produce accurate hash", () => {
  const map = HashMap();

  expect(map.hash("Fred")).toBe(2198155);
});

test("Get a value to the hashmap", () => {
  const map = HashMap();
  map.set("Gender", "Male");

  expect(map.get("Gender")).toBe("Male");
});

test("Check for key in hashmap", () => {
  const map = HashMap();
  map.set("Gender", "Male");

  expect(map.has("Gender")).toBeTruthy();
});

test("Remove a value from the hashmap", () => {
  const map = HashMap();
  map.set("Gender", "Male");

  expect(map.remove("Gender")).toBeTruthy();
});

test("Attempt removing a key from the hashmap that doesn't exist", () => {
  const map = HashMap();
  map.set("Gender", "Male");

  expect(map.has("Gender")).toBeFalsy();
  expect(map.remove("Gender")).toBeFalsy();
});

test("Get the length of a hashmap", () => {
  const map = HashMap();
  map.set("Name", "Timmy");
  map.set("Gender", "Male");
  map.set("Age", 23);

  expect(map.length()).toBe(3);
});

test("Get the length of a hashmap", () => {
  const map = HashMap();
  map.set("Name", "Timmy");
  map.set("Gender", "Male");
  map.set("Age", 23);
  map.clear();

  expect(map.length()).toBe(0);
});

test("Get an array of keys", () => {
  const map = HashMap();
  map.set("Name", "Timmy");
  map.set("Gender", "Male");
  map.set("Age", 23);

  expect(map.keys().includes("Name")).toBeTruthy();
  expect(map.keys().includes("Gender")).toBeTruthy();
  expect(map.keys().includes("Age")).toBeTruthy();
});

test("Get an array of values", () => {
  const map = HashMap();
  map.set("Name", "Timmy");
  map.set("Gender", "Male");
  map.set("Age", 23);

  expect(map.keys().includes("Timmy")).toBeTruthy();
  expect(map.keys().includes("Male")).toBeTruthy();
  expect(map.keys().includes(23)).toBeTruthy();
});
