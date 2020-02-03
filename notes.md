# TypeScript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## The TS Type System

- Helps us catch errors during development
- Uses 'type annotations' to analyze our code
- Only active during development
- Doesn't provide any performance optimization

## What is a Type System

- A type is an abstract interface - a set of requests to which it can respond. Types generally represent nouns, such as a person, place or thing, or something normalized.
- A class represents an implementation of the type. It is a concrete data structure and collection of subroutines.

### Types

#### Primitive Types

- number
- boolean
- void
- undefined
- string
- symbol
- null

#### Object types

- functions
- arrays
- classes
- objects

### Why Care about types

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

### Type annotations

Code we add to tell Typescript what type of value a variable will refer to

### Type inference

Typescript tries to figure out what type of value a variable refers to.

If declaration and initialization are on the same line, TypeScript will figure out the type of variable for us.

#### When to use Type annotations

- When we declare a variable on one line then initialize it later
- When we want a variable to have a type that can't be inferred
- When a function returns the 'any' type and we need to clarify the value

### When to use Type Inference

Always

### any

- means TS has no idea what this is - can't check for correct property references
- avoid variables with 'any' at all costs

### Annotation for Functions and Objects

- _Type annotations for functions_ - Code we add to tell TypeScript what type of arguments a function will receive and what type of values it will return
- _Type inference for functions_ - TypeScript tries to figure out what type of value a function will return

No type inference for arguments. Type inference works for the output.

### Types Arrays

Arrays where each element is some consistent type of value.

- TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with 'map', 'forEach','reduce' functions
- Flexible - arrays can still contain multiple different types

Tuple - Array-like structure where each element represents some property of a record.

## Interfaces

Creates a new type, describes the property names and value types of an object

### Strategy for Reusable Code in TS

- Create functions that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function

## Classes

Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

- Public - this method can be called any where any time
- private - this method can only be called by other methods in this class
- protected - this method can be called by other methods in this class or by other methods in child classes

## Design Patterns in TypeScript

In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

### Type Definition Files

In order for TypeScript to perform the type checking, the types need to be defined somewhere. It's pretty straightforward how to add type definitions to the variables declared in your own code, but how does TypeScript know about the types of variables and functions of existing JavaScript libraries?

This is where type definition files come into play. They allow you to provide type information for JavaScript code that is by itself not statically typed. The file extension for such a file is .d.tx, where d stands for definition. Type definition files make it possible to enjoy the benefits of type checking, autocompletion and member documentation.

### ts config file

         tsc --init
We can then run 

        tsc -w

to watch for any changes

### Concurrent Compilation and Execution

### Type Guard

- Use `typeof` to narrow type of a value to a primitive type i.e. number,string,boolean,symbol
- Use `instanceof` to narrow down every other type of value created with a constructor function