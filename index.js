// First decision
function start() {
  let firstanswer = window.prompt("Do you head left, or right?");

  if (firstanswer == "left") {
    goLeft();
  } else if (firstanswer == "right") {
    goRight();
  }
}

// Second round of decisions
function goLeft() {
  let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a samll hole, just large enough for you to crawl 
    through. Do you follow it, or continue on your path?`);
  if (secondAnswer === "follow") {
  } else if (secondAnswer === "continue") {
  }
}

function goRight() {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another 
    path would lead you away from the dragon all together. Which 
    do you take?`);
  if (secondAnswer === "stay") {
  } else if (secondAnswer === "run") {
  }
}

// Third round of decisions
function goFollow() {
  let thirdAnswer = window.prompt(
    `You follow the cat to a colony of cats, snuggled in a fort
    of warm blankets and subsisting off of inexplicably warm
    soup. They are content with you staying, but you wonder if
    you should alert the world to this magical safe haven.`
  );
}

start();
