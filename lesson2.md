---
author: Jared Siirila
title: React Overview
---

# React Overview

---

# Icebreaker

---

## First React App

https://reactjs.org/redirect-to-codepen/hello-world

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

We will discuss where the ReactDOM object came from in another class
<!-- .element: class="fragment" -->

--

### spec

```javascript
ReactDOM.render(element, container)
```

* `element` is the React element to render
* `container` is a reference to the location in the DOM to render

**Wait a minute...what is a React element?**
<!-- .element: class="fragment" -->

---

## React elements

* The smallest building block of React apps
* Plain JavaScript Objects
* React elements are `immutable`
    * A little like variables declared using `const`
* Usually created using `JSX` syntax

**Great...now what is JSX**
<!-- .element: class="fragment" -->

---

## The JSX is a lie

* Looks like HTML
<!-- .element: class="fragment" -->
* Writes like HTML
<!-- .element: class="fragment" -->
* NOT HTML
<!-- .element: class="fragment" -->

--

## JSX

A syntax extension for JavaScript that makes it easy to define React elements that compile to JavaScript

--

Allows embedding expressions similar to <!-- .element: class="fragment" --> `template literals`

```javascript
ReactDOM.render(
    <div>2 + 5 = {2+5}</div>,
    document.getElementById('root')    
);
```

--

Any valid JavaScript expression can be embedded in JSX using curly brackets.

```javascript
let computeHypotenuse = (a, back) => Math.sqrt(a * a + b * b);

let result = <div> computeHypotenuse(3,4) = {computeHypotenuse(3,4)}</div>;
```

--

JSX tags must be closed. If there is no `children` in a JSX tag then it can be a `self-closing` tag.

```javascript
let Icon = <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
```

--

JSX support `attributes` similar to HTML attributes. JSX attributes can be eithe a `string` or a JavaScript Expression enclosed in curly brackets.

```javascript
let theAnswer = <button title="The Answer" onClick={() => alert(42)}>The Answer</button>
```

--

One difference between JSX attributes and HTML attributes is that JSX attributes are `camelCased`, where HTML attributes are `lowercase`.

In addition, when setting classes in a JSX tag use the `classNames` attribute instead of `class`.

---

# Web Development History

---

## Static Pages

http://info.cern.ch/

* Very simple
<!-- .element: class="fragment" -->
* Each page is its own document
<!-- .element: class="fragment" -->
* Documents are created ahead of time, like a Word document
<!-- .element: class="fragment" -->
* Similar to a file system
<!-- .element: class="fragment" -->

--

## Server Side Rendering

* Like static pages, but allows for pages to be created on the fly by a program on the server
<!-- .element: class="fragment" -->

--

## Pros of static and server side rendered sites

* Initial page load can be fast
<!-- .element: class="fragment" -->
* No state transition logic
<!-- .element: class="fragment" -->

--

## Cons of static and server side rendered sites

* Little to no interactivity
<!-- .element: class="fragment" -->
* Page transitions can be slow (network speed)
<!-- .element: class="fragment" -->
* Can be hard to scale
<!-- .element: class="fragment" -->

---

## JavaScript to the rescue

* Dynamic websites
<!-- .element: class="fragment" -->
    * interactivity
    * animation
    * mutable
* At first it just enhances server side rendered pages
<!-- .element: class="fragment" -->
* As the interaction and need for a fast site increases more and more work is done on the front end
<!-- .element: class="fragment" -->

--

## Rise of the spas

SPA stands for Single Page Application

In a SPA almost all of the UI (HTML) on the page is created on the front end using JavaScript
<!-- .element: class="fragment" -->

The back end returns raw data, not prerendered HTML
<!-- .element: class="fragment" -->

--

## Benefits of Dynamic sites and spas

* Allows creation of sites that couldn't exist otherwise
<!-- .element: class="fragment" -->
    * Wordprocessors
    * Infinite scroll (Google Images)
    * Gmail
* Smaller network requests once page is initially loaded
<!-- .element: class="fragment" -->

--

## Drawbacks of spas

* Inital load time is probably slower
<!-- .element: class="fragment" -->
* 
<!-- .element: class="fragment" -->
__Complex state management and mutation logic__

---

## React's Approach

Let the developer act like the page is completely rerendered with each state change

Let the framework handle which portions of the page are actually changed
<!-- .element: class="fragment" -->

This declarative API is one of React biggest pieces of magic
<!-- .element: class="fragment" -->

--

## [Virtual Dom](https://www.codecademy.com/articles/react-virtual-dom)

React has a separate representation of the DOM from the browser called the Virtual DOM

Whenever React renders, it creates an updated virtual DOM representation and compares it to the previous one
<!-- .element: class="fragment" -->

It then only updates the portions of the actual DOM that changed in the virtual DOM
<!-- .element: class="fragment" -->
