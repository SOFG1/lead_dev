import type { IQuestion } from "./types/IQuestion";

export const questions: Omit<IQuestion, "id">[] = [
  {
    title: "HTML inputs",
    answer: "hidden, image, color, month, week, search…",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS Float",
    answer: "allows streamlined text",
    tag: "1 HTML, CSS",
  },
  {
    title: "Polyfils",
    answer:
      "Code that implements features on browsers that aren’t supported natively. Included in babel.",
    tag: "1 HTML, CSS",
  },
  {
    title: "Cross browser compatibility",
    answer:
      "use testing platforms, reset.css, vendor prefixes, auto prefixers, polyfils",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS custom properties",
    answer: "variables, @property, var(—foo)",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS functions",
    answer: "min, max, clamp, calc, linear-gradient…",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS performance",
    answer: "simplify selectors, use content-visibility, avoid @import in css",
    tag: "1 HTML, CSS",
  },
  {
    title: "CSS properties which affect performance",
    answer: "size, position, margins, paddings, shadows",
    tag: "1 HTML, CSS",
  },
  {
    title: "Font loading strategies.",
    answer:
      "Flash Of Invisible Text - font-display-block, Flash Of Unstyled Text font-display-swap, Flash Of Faux Text)",
    tag: "1 HTML, CSS",
  },
  {
    title: "Aspect-ratio",
    answer: "defines aspect ratio of element aspect-ratio: 1/2;",
    tag: "1 HTML, CSS",
  },
  {
    title: "Content-visibility",
    answer:
      "Sets content visibility for CSS, used for optimizations. visible, hidden, auto",
    tag: "1 HTML, CSS",
  },
  {
    title: "Contain-intrinsic-size",
    answer:
      "“1000px”, “200px 400px”, “auto 500px” (placeholder size when content-visibility is auto)",
    tag: "1 HTML, CSS",
  },
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
    title: "First ‘test’ match in the text",
    answer: `/test/`,
    tag: "3 RegExp",
  },
  {
    title: "All ’test’ matches in the text",
    answer: `/test/g`,
    tag: "3 RegExp",
  },
  {
    title: "First case insensitive ‘test’ match",
    answer: `/test/i`,
    tag: "3 RegExp",
  },
  {
    title: "all case insensitive ‘test’ matches",
    answer: `/test/gi`,
    tag: "3 RegExp",
  },
  {
    title: "| - OR operator",
    answer: `/(bob|alice) marley/ - matches ‘bob marley’, ‘alice marley’`,
    tag: "3 RegExp",
  },
  {
    title: "? - optional operator",
    answer: `
    /c?olor/ - matches ‘color’, ‘olor’
    /color?/ - matches ‘color’, ‘colo’
    `,
    tag: "3 RegExp",
  },
  {
    title: "() - wraps part (grouping)",
    answer: `
/col(or)/ - matches ‘color’, ‘col’
    `,
    tag: "3 RegExp",
  },
  {
    title: " - escape a special character",
    answer: `
/color\\?/ - matches ‘color?’
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all digits",
    answer: `
  \\d
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all non digits",
    answer: `
 \\D
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all non-capitalized letters",
    answer: `
 [a-z]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches all capital letters (range)",
    answer: `
 [A-Z]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches letters from a to d (range)",
    answer: `
 [a-d]
    `,
    tag: "3 RegExp",
  },
  {
    title: "matches digits from 1 to 5 (range)",
    answer: `
 [1-5]
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colo, color’ in 'color colo colorrr'",
    answer: `
 /color?/
    `,
    tag: "3 RegExp",
  },
  {
    title:
      "Greedy search matches ‘color, colo, colorrr’ in 'color colo colorrr'",
    answer: `
 /color*/
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colorrr’ in 'color colo colorrr'",
    answer: `
 /color+/
    `,
    tag: "3 RegExp",
  },
  {
    title: "Greedy search matches ‘color, colorrr’ in 'color colo colorrr'",
    answer: `
 /color+/
    `,
    tag: "3 RegExp",
  },
  {
    title: "Primitive types",
    answer: `
  String, number, boolean, bigint, undefined, null
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Structural vs Nominal types",
    answer: `
Complex structures for example objects can have different names but identical structures.
So they will be equal by structural comparison and different by nominal comparison

Typescript has structural type checking and doesn’t look at names when compares types. It only compares properties and their types.
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Never type",
    answer: `
Never type defines a type which will never occur.
This means that a variable with never type can never hold any value. Using it we can denote impossibility in the system.
It can happen after throwing an error and in the last condition of exhaustive check function.
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Record",
    answer: `
Record is a utility type which defines an object with the same key type and value type for all properties
    `,
    code: `
      type RecordType = Record<string, string | number>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Tuple",
    answer: `
Tuple is a type similar to array but with fixed size
    `,
    code: `
    [string, number, number, string] //Tuple
    string | number[] //Array
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Named tuple",
    answer: `
Named tuple syntax for giving names to tuple elements
    `,
    code: `
    type UserTuple = [id: number, name: string, isAdmin: boolean];
        `,
    tag: "4 TypeScript",
  },
  {
    title: "as const",
    answer: `
as const prevents type widening and makes variable readonly(on typescript level)

eg: const person = {name: ‘John Doe’, age: 32}  will have type: {name: string, age: number}

With as const it will have {name: ‘John Doe’, age: 32} type
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Call Signatures (for callable functions)",
    answer:
      "Call signature is syntax for creating types for functions with properties",
    code: `
type FunctionWithProp = {
 (param1: string, param2: number): void,
 customProp: string
}

const functionWithProp:  FunctionWithProp = (param1, param2) => {
 //…do something
}

functionWithProp.customProp = “custom property”
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Construct signatures (for constructor functions)",
    answer:
      "Construct signature is signature for creating types for constructor functions",
    code: `
type StringConstructable = {
  new (name: string): {name: string};
};

// A function that takes a constructor adhering to StringConstructable
function createInstance(ctor: StringConstructable, name: string): {name: string} {
  return new ctor(name); // Use the new keyword to create an instance
}

//PS - you can create type with call and construct signatures
interface CallOrConstruct {
  (n?: number): string; // Call signature (can be called as a normal function)
  new (s: string): Date; // Construct signature (can be called with "new")
}`,
    tag: "4 TypeScript",
  },
  {
    title: "strictBindCallApply",
    answer: `
strictBindCallApply - is a flag in “complierOptions” in typescript configuration.
If the flag is enabled typescript checks parameters and ‘this’ context for bind(), call(), apply()
If not enables they will be type of any
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Classes",
    answer: `
TypeScript classes have prefixes for its properties:

Public - property is accessible from everywhere
Readonly - makes property writable only in constructor function
Protected - property is only visible inside subclasses of the class they’re declared in. (not from instances)
Private - property is available only inside the class and not even in subclasses (not from instances)
Static - property is available only from the Class(not instance, like in native JS)
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Class static block",
    answer:
      "Static blocks in class are executed during initialization and have access to private properties",
    code: `
    class Database {
     private static connection: Connection

     private static createConnection {
      Database.connection = this.createConnection()
     }
    }
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Class auto accessors",
    answer:
      "Typescript has feature for declaring simple get() and set() methods in a class with less boilerplate code",
    code: `
    class MyClass {
     private _value: string

     get value(): string {
      return this.value
     }

     set value(v: string) {
      this.value = v
     }
    }
    //This class can be implemented this way:
    class MyClass {
     accessor value: string
    }`,
    tag: "4 TypeScript",
  },
  {
    title: "Readonly",
    answer: `
Readonly<T> - prefix for type, interface or class properties which will throw an error when we try to modify the property.
    `,
    tag: "4 TypeScript",
  },
  {
    title: "ReadonlyArray",
    answer: `
ReadonlyArray<T> is a operator which makes an array immutable
The difference between “as const” and ReadonlyArray is that “as const” provides deep immutability
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Conditional types",
    answer: `
Conditional type is like ternary operator in JS
    `,
    code: `
    type MyConditionalType<T> = T extends U ? X : Y;
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Infer",
    answer: `
Infer can only be used on the right hand side of the extends keyword
Infer extracts a generic type and allows to return it in a condition
    `,
    code: `
    type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Awaited",
    answer: `
  returns awaited type
    `,
    code: `
    type A = Awaited<Promise<string>> //type A = string
      `,
    tag: "4 TypeScript",
  },
  {
    title: "makes all properties of a type optional",
    code: `
  Partial<T>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "makes all properties of a type required",
    code: `
  Required<T>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Makes all properties readonly",
    code: `
Readonly<T>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Picks optional properties of a type(object)",
    code: `
Pick<T>

interface MyInterface {
  a: string,
  b: boolean,
  c: number
}

//takes only a and b from MyInterface
type PickedTypes = Pick<MyInterface, ‘a’ | ‘b’>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "creates a new type from a type(object) removing some properties.",
    answer: `
    Omit<T>

    //Will be MyInterface without ‘c’ and ‘b’ properties
    type OmitedType = Omit<MyInterface, ‘c’ | ‘b’>
    `,
    code: `
    //Will be MyInterface without ‘c’ and ‘b’ properties
    type OmitedType = Omit<MyInterface, ‘c’ | ‘b’>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Constructs a type excluding types from a union type",
    answer: `
    Exclude<T>
    `,
    code: `
  type UnionType = ‘a’ | ‘b’ | ‘c’

  //equals - ‘a’ | ‘b’
  type ExcludedType = Exclude<UnionType, ‘c’>
    `,
    tag: "4 TypeScript",
  },
  {
    title:
      "extracts matching types from first union type that exist in the second union",
    answer: `
    Extract<T>
    `,
    code: `
    // returns 'b' | 'c'
    type Extracted = Extract<'a' | 'b' | 'c', 'b', | 'c' | 'f'>
    `,
    tag: "4 TypeScript",
  },
  {
    title: "defines the type of context ‘this’ for an object and it’s methods",
    answer: `
    ThisType
    `,
    code: `
const obj: ThisType<TypeOfThis> {
  doSomething() {
    this.doSomething()
  }
}
    `,
    tag: "4 TypeScript",
  },
  {
    title: "extracts type of ‘this’ from a function type",
    answer: `
    Checks parameters of context 'this' in the function and constructs a type
ThisParameterType<T>
    `,
    code: `
    type ThisType = ThisParameterType<type of someFunction>
        `,
    tag: "4 TypeScript",
  },
  {
    title: "removes type of context ’this’ from a function type",
    answer: `
OmitThisParameter<T>
    `,
    code: `
    type FunctionWithoutContextType = OmitThisParameter<FunctionWithContextType>
        `,
    tag: "4 TypeScript",
  },
  {
    title: "extracts type of the instance of a class type",
    answer: `
InstanceType<T>
    `,
    code: `
    type MyClassInstanceType = InstanceType<typeof MyClass>
        `,
    tag: "4 TypeScript",
  },
];
