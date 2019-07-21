---
author: Jared Siirila
title: Component Lifecycle
---

# Component Lifecycle

---

## Quiz

What are the two different types of components in React?
<!-- .element: class="fragment" -->
* Function components and class components
<!-- .element: class="fragment" -->

What does react call the data that is passed in to a component?
<!-- .element: class="fragment" -->
* Props
<!-- .element: class="fragment" -->

--

## Quiz

What is the data that is managed internally by a component called?
<!-- .element: class="fragment" -->
* State
<!-- .element: class="fragment" -->

What component method is called to change a value in the component state?
<!-- .element: class="fragment" -->
* this.setState()
<!-- .element: class="fragment" -->

---

For class components, React does not recreate the component whenever the **state** or **props** change.

Instead, it runs through the **component update lifecycle**

There are 3 different lifecycles for a class based React component:
<!-- .element: class="fragment" -->
* Mounting/creating
<!-- .element: class="fragment" -->
* Updating
<!-- .element: class="fragment" -->
* Unmounting/removing
<!-- .element: class="fragment" -->

--

## Mounting lifecycle

Occurs when a component is first created

* constructor
<!-- .element: class="fragment" -->
* render
<!-- .element: class="fragment" -->
* componentDidMount
<!-- .element: class="fragment" -->

--

## Updating lifecycle

Occurs when a component gets new props, `setState` is called and changes the state, or `forceUpdate` is called

* render
<!-- .element: class="fragment" -->
* componentDidUpdate
<!-- .element: class="fragment" -->

--

## Unmounting lifecycle

Occurs when a component is being removed from the DOM

* componentWillUnmount
<!-- .element: class="fragment" -->

--

You can **override** each one of these lifecycle methods in a component to handle specific needs

We have already overridden two of these lifecycle methods in our class components. Which ones?
<!-- .element: class="fragment" -->
* constructor and render
<!-- .element: class="fragment" -->

One of these is required to be overridden in a class component. Which one?
<!-- .element: class="fragment" -->
* render
<!-- .element: class="fragment" -->

--

A great visualization of the lifecycle methods is at:

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

---

# Making a Clock

--

