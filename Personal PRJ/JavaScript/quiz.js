function checkAnswers() {
  let score = 0;

  const q1Answer = document.querySelector('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;

  if (q1Answer === 'paris') {
    score++;
  }

  if (q2Answer === 'whale') {
    score++;
  }

  alert(`Hey User! Your score is ${score} out of 2. Good job!`);
}