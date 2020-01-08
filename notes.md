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