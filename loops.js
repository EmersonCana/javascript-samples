// Quiz
let questions = [
  {
    question: "This is an example question",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    question: "This is an example question 2",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    question: "This is an example question 3",
    options: ["option1", "option2", "option3", "option4"],
  },
];

let questionContainer = document.querySelector("#question");

// questions.lenght = 3
// 0 => addQuestion(questions[0].question, questions[0].options, 0)
for (let i = 0; i < questions.length; i++) {
  addQuestion(questions[i].question, questions[i].options, i);
}

function addQuestion(question, options, index) {
  // i == 0 + 1
  let questionNumber = index + 1;
  let h1 = document.createElement("h1");
  h1.id = `question${index + 1}`;
  h1.textContent = `${index + 1}. ${question}`;
  questionContainer.appendChild(h1);

  for (let idx = 0; idx < options.length; idx++) {
    let radio = document.createElement("input");
    let label = document.createElement("label");
    radio.type = "radio";
    radio.id = options[idx] + questionNumber;
    radio.value = options[idx];
    radio.name = options[index];

    label.setAttribute("for", options[idx] + questionNumber);
    label.textContent = options[idx];

    questionContainer.appendChild(radio);
    questionContainer.appendChild(label);
  }
}
