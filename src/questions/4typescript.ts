import type { IQuestion } from '../types/IQuestion';

export const questions4: Omit<IQuestion, "id">[] = [

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
  {
    title: "Function overloads",
    code: `
//Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): number;

//Implementation
function add(a: unknown, b: unknown): number {
  if (typeof a === "string" && typeof b === "string") {
    return Number(a) + Number(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Decorators",
    answer: `
Decorator is a tool for adding additional logic to classes, method, etc. Without changing the initial implementation.
They work as Higher Order Functions under the hood

Limitations: is experimental feature, requires specific configuration in tsconfig.json

TypeScript has different types of decorators:
Class Decorator, Class Method Decorator, Class Property Decorator, Accessor Decorator, Parameter Decorator.

To use decorators, you must enable the experimentalDecorators option in your tsconfig.json file:
    `,
    code: `
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Class Method Decorator",
    answer: `
Class method decorator adds additional logic or different implementation to Class method without touching the original implementation
    `,
    code: `

    function MethodDecorator<This, Args extends any[], Return>(
      target: (this: This, ...args: Args) => Return,
      context: ClassMethodDecoratorContext<
        This,
        (this: This, ...args: Args) => Return
      >,
    ) {
      console.log("initialization"); //Will be logged only once
      return function (this: This, ...args: Args): Return {
        // Redefine original implementation in return functions
        //console.log Will be called every time the method is called
        console.log("execution");
        const res = target.call(this, ...args);
        return res;
      };
    }

    class Demo {
      @MethodDecorator
      exec() {
        console.log("Demo exec");
      }
    }
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Class Decorator",
    code: `
function ClassDec<This, Args extends any[]>(
  target: new (...args: any[]) => This,
  context: ClassDecoratorContext<new (...args: any[]) => This>,
) {
  console.log('class init')

}

@ClassDec
class Demo {
  exec(num: number) {
    console.log("Demo exec");
  }
}

        `,
    tag: "4 TypeScript",
  },
  {
    title: "Class Field Decorator",
    code: `
function FieldDec<This, Args extends any[]>(
  target: undefined,
  context: ClassFieldDecoratorContext<This, string>,
) {
  console.log('init') //Will log only once, at class definition time
  return function(value: string) {
  // Will log on reading the field from an instance
    console.log("return value")
    return value //Returned value on getting property
  }
}

class Demo {
  @FieldDec
   name: string = 'test'
}

const obj = new Demo()
`,
    tag: "4 TypeScript",
  },
  {
    title: "Type Narrowing",
    answer: `
Type narrowing is when we get type of variables more specific conditions
    `,
    code: `
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Type Predicate",
    answer: `
Type predicates are functions which return whether a variable matches type or not
    `,
    code: `
function isFish(pet: Fish | Bird): pet is Fish {
  return !!pet?.swim
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Assert Function",
    answer: `
Assert functions are like predicates but throw error when condition is not met
    `,
    code: `
//Function will throw an error if value is not a string
function assertString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Expected a string");
  }
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Type Casting",
    answer: `
Casting is when we tell typescript compiler what type will variable have
    `,
    code: `
let x: unknown = 'hello';
console.log((x as string).length);
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Satisfies operator",
    answer: `
The satisfies operator ensures that an expression is assignable to a given type, without modifying or transforming it’s type.
    `,
    code: `
let expression: any;
type TargetType = string | number;

const variable = expression satisfies TargetType;
        `,
    tag: "4 TypeScript",
  },
  {
    title: "Satisfies vs Casting(as)",
    answer: `
Difference between Satisfies and Casting is that satisfies doesn’t change the type and leaves it as it was.
    `,
    code: `
let expression: any;
type TargetType = string | number;

const variable = expression satisfies TargetType; //variable type will be any
const variable2 = expression as TargetType; //variable2 type will be string | number
        `,
    tag: "4 TypeScript",
  },
  {
    title: "TS Config",
    answer: `
target - Specifies javascript version to compile - ES5, ES6, ESNext

module - Defines the module system(import/export) for output code - CommonJS, ES2015, ESNext

rootDir - Specifies folder of TS files

outDir - specifies target folder for compiled files

moduleResolution - module system for input code
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Multiple TS config files",
    answer: `
It’s allowed to create multiple ts config files. For example: tsconfig.base.ts, tsconfig.test.ts
    `,
    code: `
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "types": ["jest", "node"] // Include test-specific types
  },
  "include": ["test/**/*", "src/**/*"] // Include both source and test files
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "TS Config Isolated modules",
    answer: `
Isolated module ensures that your code can be compiled into a single file basis. This is safer when we use an alternative compiler or single file compilation
    `,
    code: `
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
        `,
    tag: "4 TypeScript",
  },
  {
    title: "rootDirs (Virtual Directories)",
    answer: `
Root dirs - helps to specify physically separate folders as single merged module
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Namespace",
    answer: `
Namespace is a feature for creating isolated scopes in typescript to prevent global space pollution.
PS - using modules is better approach than using namespaces
    `,
    code: `
namespace Geometry {
  export class Circle {
    constructor(public radius: number) {}
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  export namespace Shapes { // Nested namespace
    export class Square {
        /* ... */
    }
  }
}

const circle = new Geometry.Circle(5);
const square = new Geometry.Shapes.Square();
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Modules",
    answer: `
TypeScript modules are imports and exports from different files
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Type Definitions (DefinitelyTyped)",
    answer: `
Type definitions(DefinitelyTyped) are typescript repositories(declaration types) for javascript npm libraries that don’t have their own types.

DefinitelyTyped is a single place for community to provide declaration types. TypeScript compiler automatically detects and uses packages of DefinitelyTyped. Type definitions are published to the npm registry under the “@types” scope.
    `,
    code: `npm install -D @types/jquery`,

    tag: "4 TypeScript",
  },
  {
    title: "Declaration merging",
    answer: `
Declaration merging is a tool in TypeScript which merges instances when they are declared multiple times.
Mergable types: Interface, Namespace… \nPS - Classes are not mergable
    `,
    tag: "4 TypeScript",
  },
  {
    title: "Extending and Overriding globals or libraries",
    answer: `
In typescript we can Extend or Override global types and libraries types.
    `,
    code: `
// Extending globals
// types/global.d.ts
export {}; // Ensure this file is treated as a module

declare global {
  interface Window {
    customConfig: {
      theme: string;
    };
  }
}

//Extending libraries
//types/some-lib.d.ts
import 'some-lib'; // Import original types

declare module 'some-lib' {
  interface OriginalInterface {
    newProperty: string; // Add new property
  }
}


//Overriding ‘window’ in a single module

declare const window: {
  customProp: string;
} & Window;

window.customProp = "value";

        `,
    tag: "4 TypeScript",
  },
  {
    title: "Declare const",
    answer: `
In TypeScript we can define in a single file that a variable which exists globally will have the declared type in the file
    `,
    code: `
    //This means that this global variable is string type in this file
    declare const API_URL: string; `,
    tag: "4 TypeScript",
  },
];
