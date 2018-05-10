
// List of points we will use to train the perceptron
let training = new Array(2000);
let ptron;
// Coordinate Space
let xmin = -1;
let xmax = +1;
let ymin = -1;
let ymax = +1;


let f = (x) => 0.4 * x + 0.7;

function setup() {
  createCanvas(400,400);
  console.log("Hello world!!");
  console.log("Initializing the Perceptron, 2 weights and 0,01");
  ptron = new Perceptron(2,0.001);
  

  //Compute a random set of point with their set.
  for(let i=0; i < training.length; i++){
    let x = random(xmin,xmax);
    let y = random(ymin,ymax);
    let label = 1;
    if(y < f(x)){
      label=-1;
    } 
    training[i]={
      input: [x,y,1], // TODO why 1?
      output: label
    };
  }
}

function draw() {
  background(0);
  //Draw the target function line
  strokeWeight(1);
  stroke(255);
  let x1 = map(xmin, xmin, xmax, 0, width);
  let y1 = map(f(xmin), ymin, ymax, height, 0);
  let x2 = map(xmax, xmin, xmax, 0, width);
  let y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);

  // Draw the current perceptron line according to the current weight
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0

  stroke(255);
  strokeWeight(2);
  let weights = ptron.getWeights();
  x1 = xmin;
  y1 = (-weights[2] - weights[0] * x1) / weights[1];
  x2 = xmax;
  y2 = (-weights[2] - weights[0] * x2) / weights[1];

  x1 = map(x1, xmin, xmax, 0, width);
  y1 = map(y1, ymin, ymax, height, 0);
  x2 = map(x2, xmin, xmax, 0, width);
  y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);

  


}