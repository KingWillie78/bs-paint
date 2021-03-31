/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const palette = document.querySelectorAll('.palette-color')
const brush = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')
canvas.style.height= '600px';
canvas.style.width = '600px';
canvas.style.gridTemplateRows= 'repeat(20, 1fr)';
canvas.style.gridTemplateColumns= 'repeat(20, 1fr)';

const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



const squares = document.querySelectorAll('.square')

let mouseDown=false
/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/
for (const square of squares ){
  square.addEventListener('click', (event)=>{
    const px = event.target
    px.classList= brush.classList
    px.style.border='0px'
    px.classList.add('square')
  })
}

for (const colors of palette){
  colors.addEventListener('click', ()=>{
    brush.classList=colors.classList
  })
}

for (const square of squares ){
  square.addEventListener('mouseenter', (event)=>{
    if(mouseDown){
      const px = event.target
      // px.classList.replace(px.classList, brush.classList)
      px.classList= brush.classList
      px.style.border ='0px'
      px.classList.add('square')
  }
})
}

document.body.addEventListener('mousedown', ()=>{
  mouseDown=true;
})

document.body.addEventListener('mouseup', ()=>{
  mouseDown=false;
})

const clear = document.createElement('button')
clear.innerText='Clear'
const sectionBrush = document.querySelector('.brush')
sectionBrush.appendChild(clear)

sectionBrush.style.display = 'flex'
sectionBrush.style.alignItems = 'center'
clear.addEventListener('click', ()=>{
  for (const square of squares){
  square.className = 'square color-5'
  }
})