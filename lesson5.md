---
author: Jared Siirila
title: JavaScript Classes
---

# JavaScript Classes

---

# Icebreaker

---

So far we have only written `functional components`, which are stateless.

The only example of state that we have worked with was the timer where the state lived outside the component. https://codepen.io/siirila/pen/vryNvP?editors=0010

<!-- .element: class="fragment" -->

--

To build stateful components in React we have to use a `class component`.

Class components can have mutable state, but functional components can't.
<!-- .element: class="fragment" -->

---

## Creating Classes

--

```javascript
class Name [extends] {
  // class body
}
```

--

```javascript
class Person {
    greeting() {
        return `Hello. I'm ${this.name}.`;
    }
}

let me = new Person();
me.name = "Jared";
me.greeting();
```

--

Use the `new` keyword to create an instance of an object from a class

Each time you use `new` to create an object it is a unique object instance from any other object created from that class.

--

#### Pop Quiz

What is a JavaScript object composed of?
<!-- .element: class="fragment" -->

Properties
<!-- .element: class="fragment" -->

What is an object property composed of?
<!-- .element: class="fragment" -->

A key: value pair
<!-- .element: class="fragment" -->

What is another name for a property that has a function as it's value?
<!-- .element: class="fragment" -->

A method
<!-- .element: class="fragment" -->

--

The `constructor` method is a special method for creating and initializing an object created with a `class`.

You don't call the constructor directly, instead it is called when creating an object using the `new` keyword.

You can set properties on an object in the constructor using the `this` keyword.

--

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        return `Hello. I'm ${this.name}.`;
    }
}

let me = new Person("Jared");
me.greeting();
```

--

### this

`this` is like a pronoun in English, it is how an object can refer to itself in methods on the object.

Using `this`, any properties or other methods on the object can be accessed within a method.

---

#### Inheritance, a 50000 foot view

An object can **inherit** properties and behavior from another object.

--

```javascript
class Superhero extends Person {
    greeting() {
        return `I'm ${this.name}! The fastest man alive.`;
    }
}
```

--

The class that the new class is extending is called the `super class`

A constructor can use the `super` keyword to call the constructor of the super class

--

```javascript
class Superhero extends Person {
    constructor(name, secretIdentity) {
        super(name);
        this.secretIdentity = secretIdentity;
    }

    trustedGreeting() {
        return `Everyone else knows me as ${this.name}, but I'm secretly ${this.secretIdentity}.`;
    }
}
```

--

