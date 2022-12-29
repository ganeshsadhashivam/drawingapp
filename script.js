const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

let isDrawing = false,
  brushWidth = 5;

window.addEventListener("load", () => {
  //setting canvas width/height ... offsetwidth/height returns viewable width/height of an element

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
  isDrawing = true;
  //creating new path to draw
  ctx.beginPath();
  //passing brushsize as line width
  ctx.lineWidth = brushWidth;
};

const drawing = (e) => {
  //if isDrawing is false return from here
  if (!isDrawing) return;
  //creating line according to the mouse pointer
  ctx.lineTo(e.offsetX, e.offsetY);
  //drawing/filling line with color
  ctx.stroke();
};

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
