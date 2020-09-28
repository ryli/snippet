/**
 * 返回一个由目标对象自身的属性键组成的数组
 * 返回值等同于
 * Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
 * Object.keys() returns an array of strings, which are the object's own enumerable properties.
 *
 */

const object1 = {
  property1: 42,
  property2: 13
};

const array1 = [];

console.log(Reflect.ownKeys(object1));
// expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array1));
// expected output: Array ["length"]
