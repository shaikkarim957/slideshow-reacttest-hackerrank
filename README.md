# React: Slideshow App

## Environment 

- React Version: 18.2.0
- Node Version: ^14.17.3
- Default Port: 3001

## Project Specifications 

Create a basic slideshow application, as shown below. Application requirements are given below, and the finished application must pass all of the unit tests.

<img src ="https://s4.gifyu.com/images/ezgif.com-gif-maker9ed778fa22df86b5.gif"/>

Your task is to complete the implementation of `src/components/Slides.js` according to the following requirements:

- The Slides component takes an array of slides as a prop. Each element of this array denotes a single slide and is an object with 2 properties: string title and string text.
- On application launch, the first slide must be rendered.
- Clicking on the "Next" button shows the next slide. This button is disabled when the current slide is the last one.
- Clicking on the "Prev" button shows the previous slide. This button is disabled when the current slide is the first one.
- Clicking on the "Restart" button returns to the first slide. This button is disabled when the current slide is the first one.
- You can assume that the passed slides array contains at least one slide.
