class Jatek {
  constructor() {
    this.questionArea = $(".questions"); //jquery-t használva
    this.answerArea = $(".answers"); //simán js-el
    this.checker = $(".checker");
    this.current = 0;

    this.allQuestions = {
      "First question?": ["answer1", "answer2", "answer3", 0],
      "Second question?": ["answer1", "answer2", "answer3", 1],
      "Third question?": ["answer1", "answer2", "answer3", 1],
    };
  }

  loadQuestion(curr) {
    var question = Object.keys(this.allQuestions)[curr];
    this.questionArea.append(`question`);
  }

  loadAnswers(curr) {
    var answers = this.allQuestions[Object.keys(this.allQuestions)[curr]];
    this.answerArea.append(``);

    for (var i = 0; i < answers.length - 1; i += 1) {
      //  createDiv.addEventListener("click", this.checkAnswer.bind(this, i, answers));

      this.answerArea.append(`<div>${answers[i]}</div>`);
    }
    $("answers div").on("click", () => {
      this.checkAnswer(i, answers);
    });
  }

  checkAnswer(i, arr) {
    return () => {
      var givenAnswer = i;
      var correctAnswer = arr[arr.length - 1];

      if (givenAnswer === correctAnswer) {
        this.addChecker(true);
      } else {
        this.addChecker(false);
      }

      if (this.current < Object.keys(this.allQuestions).length - 1) {
        this.current += 1;

        this.loadQuestion(this.current);
        this.loadAnswers(this.current);
      } else {
        this.questionArea.append(`Done`);
        this.answerArea.append(``);
      }
    };bind(this)();
  }

  addChecker(bool) {
    this.checker.append(`div`);
    var txt = document.createTextNode(this.current + 1);

    createDiv.appendChild(txt);

    if (bool) {
      createDiv.className += "correct";
      this.checker.appendChild(createDiv);
    } else {
      createDiv.className += "false";
      this.checker.appendChild(createDiv);
    }
  }

  startGame() {
    this.loadQuestion(this.current);
    this.loadAnswers(this.current);
  }
}
export default Jatek;
