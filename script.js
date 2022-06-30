//Add a hint box that swaps between all the hints, center the hints, clarify the next button as a give up.
//intake answers should be toLowerCase() for === match
let questionNumber = 0;
let specimenAnswer = "default";

function displayQuestion() {
  document.getElementById("next-btn").style.display = "inherit";
  document.getElementById("game-description").style.display = "none";
  document.getElementById("start-btn").style.display = "none";
  fetch("./questionList.json")
    .then((questions) => questions.json())
    .then((data) => {
      specimenAnswer = data[questionNumber].species;
      document.getElementById("question").innerHTML =
        data[questionNumber].funFact;
      document.getElementById("hint-1").innerHTML =
        data[questionNumber].hints[0];
      document.getElementById("hint-2").innerHTML =
        data[questionNumber].hints[1];
      document.getElementById("hint-3").innerHTML =
        data[questionNumber].hints[2];
      console.log(specimenAnswer);
    });
  let question = document.getElementsByClassName("hide-question");
  for (let i = 0; i < question.length; i++) {
    question[i].style.display = "inline";
  }
}

function submitButton() {
  let userInput = document.getElementById("answer-input").value;
  if (specimenAnswer == userInput) {
    document.getElementById("submit-button").style.display = "none";
    document.getElementById("validator").innerHTML = "Correct!";
  } else {
    document.getElementById("validator").innerHTML = "Incorrect!";
  }
}

function displayHint(number) {
  let hint = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < 3; i++) {
    if (number == i) {
      hint[i].style.display = "inline";
      continue;
    } else {
      hint[i].style.display = "none";
    }
  }
}

function nextButton() {
  questionNumber++;
  for (let i = 1; i < 4; i++) {
    let hint = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < hint.length; i++) {
      hint[i].style.display = "none";
    }
    fetch("./questionList.json")
      .then((questions) => questions.json())
      .then((data) => {
        specimenAnswer = data[questionNumber].species;
        document.getElementById("question").innerHTML =
          data[questionNumber].funFact;
        document.getElementById("hint-1").innerHTML =
          data[questionNumber].hints[0];
        document.getElementById("hint-2").innerHTML =
          data[questionNumber].hints[1];
        document.getElementById("hint-3").innerHTML =
          data[questionNumber].hints[2];
        document.getElementById("validator").innerHTML = "";
        document.getElementById("submit-button").style.display = "inline";
        document.getElementById("answer-input").value = "";
      });
  }
}
