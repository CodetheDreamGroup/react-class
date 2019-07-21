---
author: Jared Siirila
title: Review and React Intro
---

# Welcome
```javascript
console.log(`Welcome to the React Course
             for Code the Dream`);
```

---

# Overview

--

## Schedule

Tuesdays (remote): 7-9

Thursdays (on-site): 7-9

Saturdays (on-site): 10-12

--

## Tools

* Slack
  * codethedream.slack.com
* Github
* [Repl.it](https://repl.it)?
* Cloud9 AWS?
* Local workspaces?


--

## New Syntax and Concepts

You will encounter a lot of new concepts as well as new syntax in this class.

Don't be intimidated or feel like you missed something if you don't recognize what some code does.

**Ask** a question, since somebody else probably has the same question.

---

# JavaScript Review

--

## Data Types

```javascript
var isEnabled = true;
```
<!-- .element: class="fragment" -->
Boolean
<!-- .element: class="fragment" -->

```javascript
var theAnswer = 42;
```
<!-- .element: class="fragment" -->
Number
<!-- .element: class="fragment" -->

```javascript
var name = "Jared";
```
<!-- .element: class="fragment" -->
String
<!-- .element: class="fragment" -->

--

## Data Types

```javascript
var superhero = {
  name: "Spider-Man",
  realName: "Peter Parker"
};
```
<!-- .element: class="fragment" -->
Object
<!-- .element: class="fragment" -->

```javascript
var toBe;
```
<!-- .element: class="fragment" -->
undefined
<!-- .element: class="fragment" -->

```javascript
var name = null;
```
<!-- .element: class="fragment" -->
null
<!-- .element: class="fragment" -->

--

## Functions
<!-- .element: class="fragment" data-fragment-index="1" -->

A **function** is a set of statements that performs a task or calculates a value.
<!-- .element: class="fragment" data-fragment-index="1" -->

```javascript
function square(num) {
  return x * x;
}
```
<!-- .element: class="fragment" -->

--

## Objects

An **object** is just a a collection of **properties**

A **property** is a **key** (also called a **name**) and **value** pair

A **key** can be any valid JavaScript string

A **value** can be any valid JavaScript value.

When the value of a property is a function, then the property is called a **method**

--

## Object Example

```javascript
var hero = {
  name: "Wonder Woman",
  realName: "Diana",
  powers: ["super strength", "super speed", "flight"],
  describe: function() {
    return this.name + " has the powers of " + this.powers.join(", "); 
  }
}
```

--

In JavaScript, most things are objects, from core JavaScript features like strings and arrays to the browser APIs built on top of JavaScript.

---

### ES6 JavaScript Syntax

---

## let

The `let` statement declares a **block scope** local variable, optionally initializing it to a value.


```javascript
let name = "Daisy";

console.log("Hello " + name);
```

For the most part declaring variables using `let` behaves similar to declaring them using `var`, but there are a some important differences.

--

## Block scope

Variables declared with `let` only exist in **block** they were declared within.

A **block** is the code within a set of curly braces `{}`.

```javascript
if (true) {
  var a = 11;
  let b = 22;
  console.log(a);   // 11
  console.log(b);   // 22
}

console.log(a);     // 11
console.log(b);     // ReferenceError
```

---

## const

Like `let`, the `const` statement declares a **block scope** local variable.

The difference between `const` and `let` is that the value of a constant cannot change through re-assignment, and it can't be redeclared.

--

## const example 

```javascript
let a = 11;
console.log(a); // 11

a = 22;
console.log(a); // 22

const b = 42;
console.log(b); // 42

b = 100;        // TypeError
```

--

Another difference between `var` and `let` or `const` is that their declaration is not **hoisted** to the top of their scope.

Don't worry if you don't know what that means, but feel free to look it up and come explain it to the class if you would like.

---

## Template Literals

```javascript
let theAnswer = 42;

console.log(`The answer to the Ultimate Question of Life, 
             the Universe, and Everything is ${theAnswer}`);

let name = "Jared";
let greeting = "How are you today?";

console.log(`Hello ${name}. ${greeting}`);  // Hello Jared. How are you today?
```

--

Any JavaScript expression can be contained in the template literal

```javascript
function square(num) {
  return num * num;
}

console.log(`The square of 12 is ${square(12)}`);   // 144
```

---

## Arrow functions

There are several ways to create functions in JavaScript.

The most basic is the **function declaration**, which is the syntax that was shown earlier.

```javascript
function isOdd(num) {
  return (num % 2) === 1;
}

console.log(isOdd(3));    // true
console.log(isOdd(12));   // false
```

--

Another common way to create functions is using a **function expression**

A function expression is used to create a function and assign it to a variable

The function name is optional for function expressions, in the example below there is no function name

```javascript
let isEven = function(num) {
  return !isOdd(num);
}

console.log(isEven(12));    // true
console.log(isEven(3));     // false
```

--

Function expressions are particularly useful when passing a function as an argument to another function

```javascript
let nums = [1,2,3,4,5];

nums.map(function(num) { return num * num;});   // [1,4,9,16,25]
```

--

There is also a new syntax for creating function expressions called an **arrow function** or **arrow function expression**

This syntax looks quite different from the traditional function syntax, and supports a few different syntax variations

Arrow functions have become quite popular, especially in the React community, which is why it is important to be able to read them

--

```javascript
let add = (num1, num2) => { return num1 + num2; }
console.log(add(6, 7));                         // 13

// No parenthesis are required for a single parameter
let addOne = num => { return num + 1; }
console.log(addOne(41));                        // 42

// When it's only step is returning a value
// it doesn't even need brackets or a return statement
let square = num => num * num;
console.log(square(6));                         // 36
```

---

# Why Learn React

* Large community
* Large ecosystem
* Solid and growing demand

https://insights.stackoverflow.com/survey/2018/

https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results

--

As a new developer there is tendency to try to learn "everything" or to try a different tool/framework when things start to get hard (the dip) with what you are learning

Avoid this urge

> I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times

Bruce Lee

---

# What is React

> A JavaScript library for building user interfaces

[React](https://reactjs.org/)

---

# React Features

* Declarative
* Component-Based
* Composable
* JSX
* Virtual DOM

---

# Declarative

Imperative code says **how** to change the state of something

Declarative code says **what** the state of something should be, but not how to get there from its current state

--

It's the difference between ordering a meal at a restaurant **declarative**

vs

following a recipe to make a meal at home **imperative**

--

React is declarative vs something like jQuery which is imperative

The declarative nature of React reduces/removes the need to figure out how to transition the state of the program from one state to another, which can get very complicated

---

# Component-Based

React application are **composed** of **components** that each manage their own state

This makes reusing the components in multiple places/applications easy

---

# Composable

React components can render other React components

It is very similar to how you can nest HTML elements inside other HTML elements

---

# JSX

A syntax extension to JavaScript

Allows writing HTML like syntax directly in a JavaScript file

---

# Virtual DOM

The virtual DOM is how React is able to be written declaratively

It virtually rerenders the whole app on every update

It is like it is rendering an entirely new webpage with each change

---

# Examples

--



