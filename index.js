// Your Code Here
function start() {
  let firstanswer = window.prompt("Do you head left, or right?");

  if (firstanswer == "left") {
    goLeft();
  } else if (firstanswer == "right") {
    goRight();
  }
}

function goLeft() {
  let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a samll hole, just large enough for you to crawl 
    through. Do you follow it, or continue on your path?`);
  if (secondAnswer === "back") {
    start();
  }
}

function goRight() {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`);
  if (secondAnswer === "back") {
    start();
  }
}

start();
