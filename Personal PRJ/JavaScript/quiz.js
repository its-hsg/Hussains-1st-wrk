 function checkAnswers() {
  let score = 0;
  
  const q1Answer = document.querySelector ('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;
  const q3Answer = document.querySelector('input[name="q3"]:checked').value;
  
  if(q1Answer === 'paris'){
    score++;
  }

  if (q2Answer === 'whale'){
    score++;
  }

 if (q3Answer === 'Ronaldo'){
     score++;
  }
  
  alert(`Hey User! Your score is ${score} out of 3. Good job!`);
}
