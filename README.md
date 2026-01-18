# JS DOM Event Project

This project demonstrates various ways to handle DOM events in JavaScript. It consists of three files:

## index.html
- Demonstrates different ways to change the background color of the page using buttons and event handlers.
- Uses inline event handlers (e.g., `onclick`, `ondblclick`) and connects to external JavaScript for more advanced event handling.
- Buttons include: Make Yellow, Make Red, Make Blue, Make Purple, Make Pink, Make Green, Make GoldenRod.
- The script `event.js` is included at the end of the body.

## event.js
- Contains all the JavaScript logic for handling button events from `index.html`.
- Shows multiple ways to attach event handlers:
  - Inline function (e.g., `makeRed()`)
  - Assigning functions to `onclick` properties
  - Using `addEventListener` with named and anonymous functions
- Each button changes the background color of the page to a different color when clicked.

## event-summary.html
- Demonstrates how to update text content on the page using different event handler techniques.
- Shows three main approaches:
  1. Inline event handler function (`handelOnClick`) to change text on button click.
  2. Using `addEventListener` to change text on button click.
  3. Using `addEventListener` to update a paragraph with the value from an input field and then clear the input.
- Helps understand the difference between inline event handlers and using `addEventListener` for dynamic event management.

---

## How to Use
1. Open `index.html` in your browser to see and test the background color change events.
2. Open `event-summary.html` to see examples of updating text content and handling input events.
3. Review `event.js` to understand the different ways to attach and manage event handlers in JavaScript.

---

This project is a practical summary of JavaScript DOM event handling for learning and demonstration purposes.