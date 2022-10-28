const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

window.onload = function () {
  let score = 0;
  let questionNumber = 0;
  let totalQuestions = questions.length;
  console.log(totalQuestions);

  const createSelectForm = function (num) {
    for (let i = 0; i < num; i++) {
      const parentNode = document.querySelector("select");
      const optionTagNode = document.createElement("option");
      optionTagNode.innerText = i + 1;
      optionTagNode.setAttribute("value", i + 1);
      // optionTagNode.setAttribute. = i + 1;
      optionTagNode.classList.add("customSelectTag");
      parentNode.appendChild(optionTagNode);
    }
  };

  createSelectForm(totalQuestions);

  const optionTagList = document.querySelectorAll("#questions option");
  totalQuestions = optionTagList.length;

  const selectTagNode = document.querySelector("#questions");
  let value = selectTagNode.options[selectTagNode.selectedIndex].value;

  let obj = {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  };

  const generateAnswersArray = function (obj) {
    let arrCorrect = [];
    let arrIncorrect = [];

    // let correct = obj.correct_answer;
    // let incorrect = obj.incorrect_answers;

    arrCorrect.push(obj.correct_answer);
    arrIncorrect.push(obj.incorrect_answers);
    let arrCorrectLength = 0;
    let arrIncorrectLength = 0;
    let arrOfAnswers = [];

    if (typeof arrCorrect[0] === "string") {
      arrCorrectLength = arrCorrect.length;
      arrOfAnswers.push(arrCorrect[0]);
    } else if (
      // typeof arrCorrect[0] === "array" ||
      typeof arrCorrect[0] === "object"
    ) {
      arrCorrectLength = arrCorrect[0].length;
      for (let i = 0; i < arrCorrectLength; i++)
        arrOfAnswers.push(arrIncorrect[0][i]);
    }

    if (typeof arrIncorrect[0] === "string") {
      arrIncorrectLength = arrIncorrect.length;
      arrOfAnswers.push(arrIncorrect[0]);
    } else if (
      // typeof arrIncorrect[0] === "array" ||
      typeof arrIncorrect[0] === "object"
    ) {
      arrIncorrectLength = arrIncorrect[0].length;
      for (let i = 0; i < arrIncorrectLength; i++)
        arrOfAnswers.push(arrIncorrect[0][i]);
    }

    const totalAnswers = arrCorrectLength + arrIncorrectLength;

    return arrOfAnswers;
  };

  console.log(generateAnswersArray(obj));

  const generateQuestionTemplate = function (obj) {
    let biggestDivNode = document.querySelector("#container");

    const answersArray = generateAnswersArray(obj);
    const totalAnswers = answersArray.length;

    const text = obj.question;

    const divContainer = document.createElement("div");
    biggestDivNode.appendChild(divContainer);

    const textParagraph = document.createElement("p");
    textParagraph.innerText = text;
    textParagraph.classList.add("customP");
    divContainer.appendChild(textParagraph);

    for (let i = 0; i < totalAnswers; i++) {
      const newDivNode = document.createElement("div");
      newDivNode.classList.add("customDivAnswer");
      const radioNode = document.createElement("input");
      radioNode.setAttribute("type", "radio");
      radioNode.setAttribute("id", i + 1);
      const labelNode = document.createElement("label");
      labelNode.innerText = answersArray[i];
      // divContainer.appendChild(textParagraph);
      divContainer.appendChild(newDivNode);
      newDivNode.appendChild(radioNode);
      newDivNode.appendChild(labelNode);
    }

    const nextButton = document.createElement("button");
    nextButton.innerText = "NEXT";
    nextButton.classList.add("customNextButton");
    divContainer.appendChild(nextButton);
  };

  generateQuestionTemplate(obj);

  const startQuiz = function () {
    optionTagList = document.querySelectorAll("#questions option");

    selectTagNode = document.querySelector("#questions");
    value = selectTagNode.options[selectTagNode.selectedIndex].value;

    totalQuestions = parseInt(value);
  };

  const startQuizButton = document.querySelector("button");
  startQuizButton.addEventListener("click", startQuiz);

  // HINTS
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // For each question, create a container for wrapping it; then create a radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // with, as options, both the correct answer and the incorrect ones
  // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
  //
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display the first question with the text and the radio buttons
  // when the user selects an answer, pick the next question from the array and replace the old one with it
  // saving the user's choice in a variable
};

// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
