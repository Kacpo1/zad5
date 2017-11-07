var photo;
var sound;
var amp;
var vol;


function preload(){
  sound = loadSound('assets/train.mp3');
  photo = loadImage('assets/BW.jpg');
}
function setup() {
  createCanvas(500,500);
  amplitude = new p5.Amplitude();
  sound.play();
  scale(0.2);
  image(photo,  height/2, width/2);
  amp = new p5.Amplitude();
}
function draw() {


  fill(255);

  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  var vol = amp.getLevel();

  ellipse(width/2, height/2, 200, vol*300);
}
function mouseClicked(){
  sound.stop();
}