var Yezno = function() {
  var self = this;

  self.firstNumber = ko.observable(0);
  self.secondNumber = ko.observable(0);
  self.lastResult = ko.observable("");
  self.score = ko.observable(0);
  self.asked = ko.observable(0);

  askNext();

  self.answerFirst = function() {
    if (self.firstNumber() > self.secondNumber()) {
      self.lastResult('correct');
    } else {
      self.lastResult('wrong');
    }
    askNext();
  };

  self.answerSecond = function() {
    if (self.firstNumber() < self.secondNumber()) {
      self.lastResult('correct');
    } else {
      self.lastResult('wrong');
    }
    askNext();
  };

  self.answerEqual = function() {
    if (self.firstNumber() == self.secondNumber()) {
      self.lastResult('correct');
    } else {
      self.lastResult('wrong');
    }
    askNext();
  };

  self.handleKey = function(data, event) {
    switch (event.code) {
      case "ArrowLeft":
        self.answerFirst();
        break;
      case "ArrowRight":
        self.answerSecond();
        break;
      case "ArrowDown":
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

var yezno = new Yezno();
ko.applyBindings(yezno);
window.focus();
