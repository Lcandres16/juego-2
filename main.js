const questions = [
    {
      text: '¿Qué valor promueve la empatía hacia los demás?',
      answers: ['Respeto', 'Tolerancia', 'Solidaridad'],
      correctAnswer: 2,
    },
    {
      text: '¿Cuál de estos valores implica reconocer y aceptar nuestras faltas?',
      answers: ['Honestidad', 'Responsabilidad', 'Generosidad'],
      correctAnswer: 0,
    },
    {
      text: '¿Cuál es el valor que nos enseña a ser justos y equitativos?',
      answers: ['Lealtad', 'Paciencia', 'Justicia'],
      correctAnswer: 2,
    },
    {
      text: '¿Qué valor nos invita a tratar a los demás como nos gustaría ser tratados?',
      answers: ['Honestidad', 'Respeto', 'Amor'],
      correctAnswer: 1,
    },
    {
      text: '¿Cuál de estos valores promueve el trabajo en equipo y la cooperación?',
      answers: ['Humildad', 'Perseverancia', 'Colaboración'],
      correctAnswer: 2,
    },
    {
      text: '¿Cuál es el valor que nos impulsa a superar obstáculos y dificultades?',
      answers: ['Optimismo', 'Tolerancia', 'Valentía'],
      correctAnswer: 2,
    },
    {
      text: '¿Qué valor nos invita a apreciar y cuidar el entorno natural?',
      answers: ['Sostenibilidad', 'Amor', 'Responsabilidad'],
      correctAnswer: 0,
    },
    {
      text: '¿Cuál es el valor que nos enseña a respetar las diferencias culturales?',
      answers: ['Tolerancia', 'Solidaridad', 'Empatía'],
      correctAnswer: 0,
    },
    {
      text: '¿Qué valor promueve la gratitud por lo que tenemos?',
      answers: ['Generosidad', 'Humildad', 'Agradecimiento'],
      correctAnswer: 2,
    },
    {
      text: '¿Cuál es el valor que nos impulsa a perseverar y no rendirnos ante los desafíos?',
      answers: ['Resiliencia', 'Sinceridad', 'Amistad'],
      correctAnswer: 0,
    },
  ];
  
    // Agrega más preguntas y respuestas aquí
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const startGameButton = document.getElementById('start-game');
  const gameContainer = document.getElementById('game');
  const questionContainer = document.getElementById('question-container');
  const nextQuestionButton = document.getElementById('next-question');
  const feedbackMessage = document.getElementById('feedback');
  
  startGameButton.addEventListener('click', startGame);
  nextQuestionButton.addEventListener('click', loadNextQuestion);
  
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    startGameButton.classList.add('hide');
    gameContainer.classList.remove('hide');
    loadQuestion(currentQuestionIndex);
  }
  
  function loadQuestion(index) {
    const question = questions[index];
    questionContainer.innerHTML = `
      <h2>${question.text}</h2>
      <ul>
        ${question.answers
          .map((answer, i) => `<li><input type="radio" name="answer" value="${i}">${answer}</li>`)
          .join('')}
      </ul>
    `;
  }
  
  function loadNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
      feedbackMessage.innerText = 'Por favor, selecciona una respuesta.';
      return;
    }
  
    const selectedAnswerIndex = parseInt(selectedAnswer.value);
    if (selectedAnswerIndex === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
  
    feedbackMessage.innerText = '';
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.innerHTML = `<h2>Tu puntaje: ${score} de ${questions.length}</h2>`;
    nextQuestionButton.classList.add('hide');
    // ... Código anterior ...

const downloadCertificateButton = document.getElementById('download-certificate');

downloadCertificateButton.addEventListener('click', downloadCertificate);

function downloadCertificate() {
  const canvas = document.getElementById('certificate');
  const ctx = canvas.getContext('2d');

  // Configuración del diseño del certificado
  ctx.fillStyle = '#f9f9f9';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#4caf50';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('¡Felicidades!', canvas.width / 2, 50);
  ctx.font = '20px Arial';
  ctx.fillText('Has completado el Juego de Valores', canvas.width / 2, 90);
  ctx.fillText(`Tu puntaje: ${score} de ${questions.length}`, canvas.width / 2, 120);
  ctx.font = 'italic 18px Arial';
  ctx.fillText('Gracias por participar y aprender sobre los valores.', canvas.width / 2, 160);
  ctx.fillText('Fecha: ' + new Date().toLocaleDateString(), canvas.width / 2, 200);

  // Descargar el certificado como imagen
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'certificado.png';
  link.click();
}

function showResult() {
  questionContainer.innerHTML = `<h2>Tu puntaje: ${score} de ${questions.length}</h2>`;
  nextQuestionButton.classList.add('hide');
  gameContainer.classList.add('hide');
  certificateContainer.classList.remove('hide');
}

// ... Código posterior ...

// ... Código anterior ...

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    startGameButton.classList.add('hide');
    gameContainer.classList.remove('hide');
    loadQuestion(currentQuestionIndex);
    gameContainer.classList.add('fadeInUp'); // Anima la aparición del juego
  }
  
  function showResult() {
    questionContainer.innerHTML = `<h2>Tu puntaje: ${score} de ${questions.length}</h2>`;
    nextQuestionButton.classList.add('hide');
    gameContainer.classList.add('fadeOutDown'); // Anima la desaparición del juego
    certificateContainer.classList.remove('hide');
    certificateContainer.classList.add('slideInLeft'); // Anima la aparición del certificado
  }
  
  // ... Código posterior ...
  
}


