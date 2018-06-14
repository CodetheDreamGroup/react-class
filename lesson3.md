---
author: Jared Siirila
title: React Components
---

# React Components

--

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Does that sound similar to any JavaScript concepts/tools you are familiar with already?
<!-- .element: class="fragment" -->

Sounds similar to 
<!-- .element: class="fragment" -->
`functions` to me

Maybe
<!-- .element: class="fragment" -->
`objects` as well

--

All 3 of these are tools for `abstraction`.

> The essence of abstractions is preserving information that is relevant in a given context, and forgetting information that is irrelevant in that context.

> John V. Guttag

---

In my opinion, abstraction is the **key** to programming; and learning to think in abstractions is **critical** to effective programming

Abstraction from
<!-- .element: class="fragment" -->
* binary to machine code
<!-- .element: class="fragment" -->
* Machine code to higher level languages
<!-- .element: class="fragment" -->
* Series of statements to functions
<!-- .element: class="fragment" -->
* Related to function to objects
<!-- .element: class="fragment" -->
* Related objects to modules/packages
<!-- .element: class="fragment" -->
* Packages to applications
<!-- .element: class="fragment" -->

---

## Function components
The simplest way to define a `component` is with a `function component`

A `function component` is just a function that returns a `React element`

--

```javascript
function Welcome() {
    return (<h1>Greetings, my excellent friends!</h1>);
}

ReactDOM.render(
    <Welcome />,
    document.getElementById("root")
);
```

This component is invoked using the same JSX syntax we were using before to invoke HTML elements
<!-- .element: class="fragment" -->

**Always start component names with a capital letter**
<!-- .element: class="fragment" -->

--

## Exercise

Convert the list of heroes to render using components
[List of Heroes](https://codepen.io/siirila/pen/BVpXdy)

--

Any JSX attributes defined on an element get passed in to the component as a single `props` object

```javascript
function Welcome(props) {
    return <h1>Welcome ${props.name}! I have been expecting you.</h1>;
}

ReactDOM.render(
    <Welcome name="Cisco" />,
    document.getElementById("root")
);
```

--

#### Walking through that example

1. We call <!-- .element: class="fragment" --> `ReactDOM.render()` with the `<Welcome name="Cisco" />` element
2. React calls the Welcome component function with <!-- .element: class="fragment" -->`{name: "Cisco"}` as the props
3. The Welcome component returns a <!-- .element: class="fragment" -->`<h1>Welcome Cisco! I have been expecting you.</h1>` element
4. React DOM updates the DOM to match the returned element
<!-- .element: class="fragment" -->

--

The JSX contained within a set of JSX tags is also passed to the component as part of the `props` object.

It is the `children` property of the props object.

```javascript
function Welcome(props) {
    return <h1>Hello, {props.children}</h1>;
}

ReactDOM.render(
    <Welcome>Romina</Welcome>,
    document.getElementById("root")
);
```
<!-- .element: class="fragment" -->

---

## Composing Components

Components can refer to other components

This allows for creating multiple levels of `abstraction` through composition of components

--

```javascript
let Movie = (props) => (<li>{props.children}</li>);

function MovieList() {
    return (
        <ul>
            <Movie>Lord of the Rings</Movie>
            <Movie>Casablanca</Movie>
            <Movie>Bill and Ted's Excellent Adventure</Movie>
        </ul>
    );
}

ReactDOM.render(<MovieList />, document.getElementById("root"));
```

--

## Exercise

Convert the list of heroes to use a single `Hero` component to create each hero and a `HeroList` component to render the whole list.

---

### React's one rule

## Props are Read-only
<!-- .element: class="fragment" -->

Never modify the value of the props passed in to a component
<!-- .element: class="fragment" -->

---

# javascript classes

--

Classes are another way to create objects.

In many programming languages, classes are the only way to create objects.
<!-- .element: class="fragment" -->

Think of a class like a blueprint for creating objects of a specific type.
<!-- .element: class="fragment" -->

--

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(3,4);
console.log(rect.getArea());        // 12
```

--

The `constructor` method gets called when creating an object using the `new` keyword.

Any arguments passed in to the object get passed to the constructor.

--

Objects can `extend` behavior from other objects. This is known as `inheritance`.

Object inheritance is a complex concept, so don't expect to fully understand it the first time you learn it.

--

```javascript
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}

let sq = new Square(5);
console.log(sq.getArea());      // 25
```
