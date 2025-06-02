1. What is the difference between interface and type?
Answer: Interface and type both are used to describe the structure of an object, but they have some differences.

Interfaces: it is extendable via extends(keyword), good for merging declarations and primarily used to define object shapes. (Interfaces can't represent union types, which limits them when modeling variable types.)

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}

Types: It is flexible in representing unions, primitives etc. Can't merge declarations like interface and better for composing types.

type Animal = {
  species: string;
};

type Dog = Animal & {
  breed: string;
};


5. What is Type Inference?
Answer: It is the ability to automatically determine the type of a variable based on its value or usage, without requiring an explicit type declaration/annotation. It helps in writing clearer and more concise code while ensuring type safety. For example:

let message = "Hello, TypeScript"; // TypeScript infers 'message' as string

function add(a: number, b: number) {
  return a + b;
}