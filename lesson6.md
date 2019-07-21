---
author: Jared Siirila
title: Component State
---

# Component State

---

# Class Components

--

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

--

#### Converting a functional component to a class

1. Create an ES6 class, with the same name, that extends `React.Component`

2. Add a single empty method to it called `render()`

3. Move the body of the functional component into the `render()` method

4. Replace `props` with `this.props` in the `render()` body

5. Delete the remaining empty function declaration

--

## Examples

--

## Exercise

Convert the Thinking in React Step 2  functional components to class components

https://codepen.io/siirila/pen/rKzgyy

---

## Adding State

--

```javascript
class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'tired'
    };
  }
  render() {
    return (
      <div>
        <p>Hello. I'm {this.props.name}.</p>
        <p>I'm a little {this.state.mood} today.</p>
      </div>
    );
  }
}
```

--

Cool...now how do I change the state?

--

## Example

--

What was that line with `bind` that you added to the constructor about?

For now just think of it as a special bit of code required for any methods that use 
<!-- .element: class="fragment" -->
`this` somewhere in their code


--

## Exercise

https://codepen.io/siirila/pen/vrjyOY

--

Convert the Hero component to a class component

Add a `boolean` state property called `isRealNameVisible` that is initially false

Toggle the value of `isRealNameVisible` when the element is clicked

In parenthesis after the superhero name render the value of the `isRealNameVisible` state.

--

## Pop quiz

How do you set props on a React component?
<!-- .element: class="fragment" -->

You pass them in as arguments in JSX (i.e. <Hello name=""Jared" />)
<!-- .element: class="fragment" -->

Can you change the value of a prop within a component?
<!-- .element: class="fragment" -->

No, you should never change the value of a prop within a component
<!-- .element: class="fragment" -->

---

# Notes on state

--

### Do not modify state directly, always use the `setState` method

If you try to set the state by directly changing the property value then React will not know to rerender with the new state
<!-- .element: class="fragment" -->


--

## State updates are merged in to the state object

This means that you don't have to set every state property when changing just one state property
<!-- .element: class="fragment" -->

--

## State updates may be asynchronous

This has a lot of implications, but there are 2 main ones:
<!-- .element: class="fragment" -->

* Reading the state immediately after calling `setState` will probably not produce the expected results
<!-- .element: class="fragment" -->

* Relying on the current state when setting the state may not produce the expected results
<!-- .element: class="fragment" -->

---

# Next Time

### Component Lifecycle