start();

// FIRST choice
function start() {
  let firstanswer = window.prompt("Do you head left, or right?");
  if (firstanswer == "left") {
    goLeft();
  } else if (firstanswer == "right") {
    goRight();
  }
}

// SECOND set of choices
function goLeft() {
  let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a samll hole, just large enough for you to crawl 
    through. Do you follow it, or continue on your path (choices: follow; 
    continue)?`);
  if (secondAnswer === "follow") {
    goFollow();
  } else if (secondAnswer === "continue") {
    goContinue();
  }
}

function goRight() {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another 
    path would lead you away from the dragon all together. Which 
    do you take (choices: past; away)?`);
  if (secondAnswer === "past") {
    goPastDragon();
  } else if (secondAnswer === "away") {
    goAwayFromDragon();
  }
}

// THIRD set of choices
function goFollow() {
  let thirdAnswer = window.prompt(
    `You follow the cat to a colony of cats, snuggled in a fort
    of warm blankets and subsisting off of inexplicably warm
    soup. They are content with you staying, but you wonder if
    you should alert the world to this magical safe haven. 
    (choices: stay; spread)`
  );
  if (thirdAnswer === "stay") {
    goStayCats();
  } else if (thirdAnswer === "spread") {
    goSpreadWord();
  }
}

function goContinue() {
  let thirdAnswer = window.prompt(
    `You come across a chamber that extends upward to a shining 
    light above. There is a long, winding staircase and a much 
    quicker, but rickety-looking, ladder that lead up towards 
    the light. Which do you take? (choices: ladder; staircase)`
  );
  if (thirdAnswer === "ladder") {
    goLadder();
  } else if (thirdAnswer === "staircase") {
    goStaircase();
  }
}

function goPastDragon() {
  let thirdAnswer = window.prompt(
    `The dragon awakes and sits upright. You only have a 
    moment to respond, to stay or to run (choices: stay; run).`
  );
  if (thirdAnswer === "stay") {
    goStayDragon();
  } else if (thirdAnswer === "run") {
    goRun();
  }
}

function goAwayFromDragon() {
  let thirdAnswer = window.prompt(
    `After walking a while longer, you come across a shiny 
    blue flower. It is so beautiful that you decide you must 
    either draw it or pick it. Which do you do? (choices: 
    draw; pick)`
  );
  if (thirdAnswer === "draw") {
    goDrawIt();
  } else if (thirdAnswer === "pick") {
    goPickIt;
  }
}

// FOURTH set of choices
function goStayCats() {
  let fourthAnswer = window.alert(
    `You live happily amongst the cats for the rest of your days.`
  );
}

function goSpreadWord() {
  let fourthAnswer = window.alert(
    `After leaving the cat colony, you are never able to 
    find it again. Without proof, no one believes your 
    story, which passes into legend nonetheless.`
  );
}

function goLadder() {
  let fourthAnswer = window.alert(
    `After ascending a few feet up the ladder, one of its 
    rungs snaps and you fall comedically through each of the 
    rungs below. Sheepish, you return home.`
  );
}

function goStaircase() {
  let fourthAnswer = window.alert(
    `After ascending the staircase, you discover a shiny 
    blue stone, which you take home and cherish forever.`
  );
}

function goStayDragon() {
  let fourthAnswer = window.alert(
    `You and the dragon have an uplifting conversation 
    about local politics and become lifelong friends.`
  );
}

function goRun() {
  let fourthAnswer = window.alert(
    `Quickly, you run back to the cave's entrance. 
    Sheepish, you return home.`
  );
}

function goDrawIt() {
  let fourthAnswer = window.alert(
    `You draw the flower, capturing only a fraction of 
    its beauty with your quill. You bring the drawing 
    home, somewhat disappointed, but over time discover 
    joy in sharing the drawing with your friends and 
    family, recounting the story of your days as a sorcerer 
    with the aide of the sketch.`
  );
}

function goPickIt() {
  let fourthAnswer = window.alert(
    `You pick the flower and bring it home, and all 
    marvel at its brilliance. However, over time 
    it fades and eventually crumbles to dust.`
  );
}
