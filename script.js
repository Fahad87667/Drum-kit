var w = document.querySelector(".w.drum");
var a = document.querySelector(".a.drum");
var s = document.querySelector(".s.drum");
var d = document.querySelector(".d.drum");
var j = document.querySelector(".j.drum");
var k = document.querySelector(".k.drum");
var l = document.querySelector(".l.drum");

var audio;

function playSound(button) {
  switch (button) {
    case "W":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "A":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "S":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "D":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "J":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "K":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "L":
      audio = new Audio("sounds/crash.mp3");
      break;
    default:
      console.log("Invalid button");
      return;
  }
  audio.play();
}

// Event listeners for button clicks
w.addEventListener("click", function () {
  playSound("W");
});

a.addEventListener("click", function () {
  playSound("A");
});

s.addEventListener("click", function () {
  playSound("S");
});

d.addEventListener("click", function () {
  playSound("D");
});

j.addEventListener("click", function () {
  playSound("J");
});

k.addEventListener("click", function () {
  playSound("K");
});

l.addEventListener("click", function () {
  playSound("L");
});

// Event listener for keyboard press
document.addEventListener("keydown", function (event) {
  var key = event.key.toUpperCase(); // Converts to uppercase to match button labels
  switch (key) {
    case "W":
      playSound("W");
      break;
    case "A":
      playSound("A");
      break;
    case "S":
      playSound("S");
      break;
    case "D":
      playSound("D");
      break;
    case "J":
      playSound("J");
      break;
    case "K":
      playSound("K");
      break;
    case "L":
      playSound("L");
      break;
    default:
      console.log("Invalid key");
      return;
  }
});
