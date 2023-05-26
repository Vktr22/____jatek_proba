class Jatek {
    constructor() {
      this.questionArea = document.getElementsByClassName('questions')[0];
      this.answerArea = document.getElementsByClassName('answers')[0];
      this.checker = document.getElementsByClassName('checker')[0];
      this.current = 0;
  
      this.allQuestions = {
        'What is Canada\'s national animal?': ['Beaver', 'Duck', 'Horse', 0],
        'What is converted into alcohol during brewing?': ['Grain', 'Sugar', 'Water', 1],
        'In what year was Prince Andrew born?': ['1955', '1960', '1970', 1]
      };
    }
  
    loadQuestion(curr) {
      var question = Object.keys(this.allQuestions)[curr];
      this.questionArea.innerHTML = question;
    }
  
    loadAnswers(curr) {
      var answers = this.allQuestions[Object.keys(this.allQuestions)[curr]];
      this.answerArea.innerHTML = '';
  
      for (var i = 0; i < answers.length - 1; i += 1) {
        var createDiv = document.createElement('div');
        var text = document.createTextNode(answers[i]);
  
        createDiv.appendChild(text);
        createDiv.addEventListener("click", this.checkAnswer.bind(this, i, answers));
  
        this.answerArea.appendChild(createDiv);
      }
    }
  
    checkAnswer(i, arr) {
      return function () {
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
          this.questionArea.innerHTML = 'Done';
          this.answerArea.innerHTML = '';
        }
      }.bind(this)();
    }
  
    addChecker(bool) {
      var createDiv = document.createElement('div');
      var txt = document.createTextNode(this.current + 1);
  
      createDiv.appendChild(txt);
  
      if (bool) {
        createDiv.className += 'correct';
        this.checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        this.checker.appendChild(createDiv);
      }
    }
  
    startGame() {
      this.loadQuestion(this.current);
      this.loadAnswers(this.current);
    }
  }
  
  window.onload = function () {
    var jatek = new Jatek();
    jatek.startGame();
  };
  