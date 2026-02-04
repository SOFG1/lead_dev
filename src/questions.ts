import type { IQuestion } from "./types/IQuestion";

export const questions: Omit<IQuestion, "id">[] = [
  {
    title: "HTML inputs",
    answer: "hidden, image, color, month, week, search…",
    tag: "HTML, CSS",
  },
  {
    title: "CSS Float",
    answer: "allows streamlined text",
    tag: "HTML, CSS",
  },
  {
    title: "Polyfils",
    answer:
      "Code that implements features on browsers that aren’t supported natively. Included in babel.",
    tag: "HTML, CSS",
  },
  {
    title: "Cross browser compatibility",
    answer:
      "use testing platforms, reset.css, vendor prefixes, auto prefixers, polyfils",
    tag: "HTML, CSS",
  },
  {
    title: "CSS custom properties",
    answer: "variables, @property, var(—foo)",
    tag: "HTML, CSS",
  },
  {
    title: "CSS functions",
    answer: "min, max, clamp, calc, linear-gradient…",
    tag: "HTML, CSS",
  },
  {
    title: "CSS performance",
    answer: "simplify selectors, use content-visibility, avoid @import in css",
    tag: "HTML, CSS",
  },
  {
    title: "CSS properties which affect performance",
    answer: "size, position, margins, paddings, shadows",
    tag: "HTML, CSS",
  },
  {
    title: "Font loading strategies.",
    answer:
      "Flash Of Invisible Text - font-display-block, Flash Of Unstyled Text font-display-swap, Flash Of Faux Text)",
    tag: "HTML, CSS",
  },
  {
    title: "Aspect-ratio",
    answer: "defines aspect ratio of element aspect-ratio: 1/2;",
    tag: "HTML, CSS",
  },
  {
    title: "Content-visibility",
    answer:
      "Sets content visibility for CSS, used for optimizations. visible, hidden, auto",
    tag: "HTML, CSS",
  },
  {
    title: "Contain-intrinsic-size",
    answer:
      "“1000px”, “200px 400px”, “auto 500px” (placeholder size when content-visibility is auto)",
    tag: "HTML, CSS",
  },
  {
    title: "Object property descriptor",
    answer: `Object.defineProperty(obj, 'myProp', {
  value: 42,   //Define value
  writable: true,   //Set editable or not
  enumerable: false, //Set if enumerable in loops(for, Object.keys…)
  configurable: true //Set if we can reconfigure again
});

Object.getOwnPropertyDescriptor(obj, 'myProp') - get configuration of property
`,
    tag: "Javascript",
  },
  {
    title: "Recursion",
    answer: `
    Pros: Simplicity, reduces code complexity
Cons: Memory usage, stack overflow risk, performance overhead. Infinite loop risk
Example: factorial, tree operations
    `,
    tag: "Javascript",
  },
  {
    title: "Chaining",
    answer: `
    Chaining is approach when method of an object return the object and we can toggle several methods sequently
    `,
    tag: "Javascript",
  },
  {
    title: "Currying(каррирование)",
    answer: `
    const curriedAdd = a => b => a + b;
console.log(curriedAdd(5)(3)); // Output: 8

const greaterThan = min => num => num > min;

const numbers = [1, 5, 10, 20];
const isGreaterThan10 = greaterThan(10);
const filtered = numbers.filter(isGreaterThan10); // [20]
    `,
    tag: "Javascript",
  },
  {
    title: "Bind arguments to function",
    answer: `bind(), call(), apply()`,
    tag: "Javascript",
  },
  {
    title: "Memoization",
    answer: `
    const cache = {}
function getSquare(num) {
 if(cache[num]) return cache[num]
 const value = num * num
 cache[num] = value
 return value
}

PS - use WeakMap if parameter is an object to prevent garbage collection
    `,
    tag: "Javascript",
  },
  {
    title: "Garbage collector",
    answer: `Garbage collector is a built in tool in JS which removes unused data. But it has some drawbacks during circular references`,
    tag: "Javascript",
  },
  {
    title: "WeakMap, WeakSet",
    answer: `Are the same Map and Set. But work only with objects to prevent memory leaks`,
    tag: "Javascript",
  },
  {
    title: "Prototypal Inheritance, create an object with prototype",
    answer: `obj.__proto__ - get prototype of an object
Class.prototype - get prototype of a Class
Properties of a Class are in the proto of its instances
Object.create(protoObject) - creates an empty object and receives its prototype as an object
Prototypal inheritance temporary constructor pattern - old pattern which implements Object.create
Instanceof - operator which check Classes instances looking its prototype in object’s proto`,
    tag: "Javascript",
  },
  {
    title: "Classes",
    answer: `Methods and props of a Class goes into proto of its instance
Static - static properties only available in Class not in instances
Super() - must be called in extended Class constructor
`,
    tag: "Javascript",
  },
  {
    title: "Function properties",
    answer: `In javascript we can assign properties to functions`,
    tag: "Javascript",
  },
  {
    title: "First ‘test’ match in the text",
    answer: `/test/`,
    tag: "RegExp",
  },
  {
    title: "All ’test’ matches in the text",
    answer: `/test/g`,
    tag: "RegExp",
  },
  {
    title: "First case insensitive ‘test’ match",
    answer: `/test/i`,
    tag: "RegExp",
  },
  {
    title: "all case insensitive ‘test’ matches",
    answer: `/test/gi`,
    tag: "RegExp",
  },
  {
    title: "| - OR operator",
    answer: `/(bob|alice) marley/ - matches ‘bob marley’, ‘alice marley’`,
    tag: "RegExp",
  },
  {
    title: "? - optional operator",
    answer: `
    /c?olor/ - matches ‘color’, ‘olor’
    /color?/ - matches ‘color’, ‘colo’
    `,
    tag: "RegExp",
  },
  {
    title: "() - wraps part (grouping)",
    answer: `
/col(or)/ - matches ‘color’, ‘col’
    `,
    tag: "RegExp",
  },
  {
    title: "\ - escape a special character",
    answer: `
/color\\?/ - matches ‘color?’
    `,
    tag: "RegExp",
  },
  {
    title: "matches all digits",
    answer: `
  \\d
    `,
    tag: "RegExp",
  },
  {
    title: "matches all non digits",
    answer: `
 \\D
    `,
    tag: "RegExp",
  },
  {
    title: "matches all non-capitalized letters",
    answer: `
 [a-z]
    `,
    tag: "RegExp",
  },
  {
    title: "matches all capital letters (range)",
    answer: `
 [A-Z]
    `,
    tag: "RegExp",
  },
  {
    title: "matches letters from a to d (range)",
    answer: `
 [a-d]
    `,
    tag: "RegExp",
  },
  {
    title: "matches digits from 1 to 5 (range)",
    answer: `
 [1-5]
    `,
    tag: "RegExp",
  },
  {
    title: "Greedy search matches ‘color, colo, color’ in 'color colo colorrr'",
    answer: `
 /color?/
    `,
    tag: "RegExp",
  },
  {
    title: "Greedy search matches ‘color, colo, colorrr’ in 'color colo colorrr'",
    answer: `
 /color*/
    `,
    tag: "RegExp",
  },
  {
    title: "Greedy search matches ‘color, colorrr’ in 'color colo colorrr'",
    answer: `
 /color+/
    `,
    tag: "RegExp",
  },
];
