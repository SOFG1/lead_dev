import type { IQuestion } from '../types/IQuestion';

export const questions2: Omit<IQuestion, "id">[] = [
  {
    title: "Object property descriptor",
    code: `Object.defineProperty(obj, "myProp", {
  value: 42, //Define value
  writable: true, //Set editable or not
  enumerable: false, //Set if enumerable in loops(for, Object.keys…)
  configurable: true, //Set if we can reconfigure again
});

// get configuration of property
Object.getOwnPropertyDescriptor(obj, "myProp");
`,
    tag: "2 Javascript",
  },
  {
    title: "Recursion",
    answer: `
    Pros: Simplicity, reduces code complexity
Cons: Memory usage, stack overflow risk, performance overhead. Infinite loop risk
Example: factorial, tree operations
    `,
    tag: "2 Javascript",
  },
  {
    title: "Chaining",
    answer: `
    Chaining is approach when method of an object return the object and we can toggle several methods sequently
    `,
    tag: "2 Javascript",
  },
  {
    title: "Currying(каррирование)",
    code: `
const curriedAdd = (a) => (b) => a + b;
console.log(curriedAdd(5)(3)); // Output: 8

const greaterThan = (min) => (num) => num > min;

const numbers = [1, 5, 10, 20];
const isGreaterThan10 = greaterThan(10);
const filtered = numbers.filter(isGreaterThan10); // [20]
    `,
    tag: "2 Javascript",
  },
  {
    title: "Bind arguments to function",
    answer: `bind(), call(), apply()`,
    tag: "2 Javascript",
  },
  {
    title: "Memoization",
    code: `
const cache = {}
function getSquare(num) {
  if(cache[num]) return cache[num]
  const value = num * num
  cache[num] = value
  return value
}

//PS - use WeakMap if parameter is an object to prevent garbage collection
    `,
    tag: "2 Javascript",
  },
  {
    title: "Garbage collector",
    answer: `Garbage collector is a built in tool in JS which removes unused data. But it has some drawbacks during circular references`,
    tag: "2 Javascript",
  },
  {
    title: "WeakMap, WeakSet",
    answer: `Are the same Map and Set. But work only with objects to prevent memory leaks`,
    tag: "2 Javascript",
  },
  {
    title: "Prototypal Inheritance, create an object with prototype",
    answer: `
    Properties of a Class are in the proto of its instances
    Prototypal inheritance temporary constructor pattern - old pattern which implements Object.create
    Instanceof - operator which check Classes instances looking its prototype in object’s proto`,
    code: `
obj.__proto__ // Get prototype of an object
Class.prototype // Get prototype of a Class
//Properties of a Class are in the proto of its instances

// Create an empty object and receive its prototype as an object
Object.create(protoObject)`,
    tag: "2 Javascript",
  },
  {
    title: "Classes",
    answer: `Methods and props of a Class goes into proto of its instance
Static - static properties only available in Class not in instances
Super() - must be called in extended Class constructor
`,
    tag: "2 Javascript",
  },
  {
    title: "Function properties",
    answer: `In javascript we can assign properties to functions`,
    tag: "2 Javascript",
  },
  {
    title: "Strict Mode",
    answer: `
 1. Throws a ReferenceError accessing undeclared variables.
 2. In simple functions ‘this’ is undefined instead of referring to global window(to prevent accidental modifications).
 3. Variables inside eval() stay within the eval() scope.
 4. Assigning to a read-only property operation throws an error instead of silent failing.`,
    tag: "2 Javascript",
  },
  {
    title: "structuredClone",
    answer: `structuredClone - is a native js method for deepCloning objects`,
    code: `
const obj = { id: 1, name: "test" };
const cloned = structuredClone(obj);
    `,
    tag: "2 Javascript",
  },
  {
    title: "Tree shaking",
    answer: `Tree shaking is the process of removing dead(unused) code during bundling. Included in modern bundlers`,
    tag: "2 Javascript",
  },
];
