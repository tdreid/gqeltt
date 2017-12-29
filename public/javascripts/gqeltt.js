/* global ko */
var Gqeltt = function() {
  var self = this;

  self.firstNumber = ko.observable(0);
  self.secondNumber = ko.observable(0);
  self.lastResult = ko.observable('');
  self.score = ko.observable(0);
  self.asked = ko.observable(0);

  askNext();

  self.checkAnswer = function(answer) {
    if (
      (answer == 0 && self.firstNumber() == self.secondNumber()) ||
      (answer < 0 && self.firstNumber() > self.secondNumber()) ||
      (answer > 0 && self.firstNumber() < self.secondNumber())
    ) {
      self.score(self.score() + 1);
      self.lastResult('correct');
    } else {
      self.lastResult('wrong');
    }
    askNext();
  };

  self.answerFirst = function() {
    self.checkAnswer(-1);
  };

  self.answerSecond = function() {
    self.checkAnswer(1);
  };

  self.answerEqual = function() {
    self.checkAnswer(0);
  };

  self.handleKey = function(data, event) {
    switch (event.code) {
      case 'ArrowLeft':
        self.answerFirst();
        break;
      case 'ArrowRight':
        self.answerSecond();
        break;
      case 'ArrowDown':
        self.answerEqual();
        break;
    }
  };

  function askNext() {
    self.firstNumber(_.random(-10, 10));
    self.secondNumber(_.random(-10, 10));
    self.asked(self.asked() + 1);
  }
};

var gqeltt = new Gqeltt();
ko.applyBindings(gqeltt);
window.focus();
