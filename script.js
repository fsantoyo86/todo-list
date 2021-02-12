const quizData = [
  {
    question: "¿Qué es la trayectoria de un objeto?",
    a: "La línea que describe su movimiento",
    b: "La dirección y sentido del movimiento",
    c: "El sentido del movimiento",
    d: "La dirección del movimiento",
    correct: "a",
  },
  {
    question: "¿En qué unidad se mide la presión?",
    a: "Pascales",
    b: "Newton",
    c: "Kg",
    d: "m/s",
    correct: "a",
  },
  {
    question: "¿En qué unidad se mide el trabajo?",
    a: "Pascales",
    b: "Newton",
    c: "Kg",
    d: "Joule",
    correct: "d",
  },
  {
    question: "Una masa de kilogramo, ¿a qué peso equivale en newton?",
    a: "6.3N",
    b: "5.8N",
    c: "7.2N",
    d: "9.8N",
    correct: "d",
  },
  {
    question:
      "¿Cuál de estas velocidades corresponde a los movimientos circulares?",
    a: "Velocidad media",
    b: "Velocidad de trayectoria",
    c: "Velocidad angular",
    d: "Velocidad lineal",
    correct: "c",
  },
  {
    question: "¿En qué unidad se mide la velocidad angular?",
    a: "m/s",
    b: "Newton",
    c: "Rad/s",
    d: "Km/h",
    correct: "c",
  },
  {
    question: "¿Qué es el módulo de un vector?",
    a: "Su punto de inicio",
    b: "La dirección en la que está orientado",
    c: "El punto medio del vector",
    d: "El valor de la magnitud que representa",
    correct: "d",
  },
  {
    question: "¿Cuál es el valor de la gravedad de la tierra?",
    a: "9.8 m/s",
    b: "9.8 m/s^2",
    c: "10 m/s",
    d: "10 m/s^2",
    correct: "b",
  },
  {
    question:
      "La energía mecánica es la suma de dos energías, ¿cuáles son?",
    a: "Energía cinética y energía hidraúlica",
    b: "Energía cinética y energía eléctrica",
    c: "Energía cinética y energía potencial",
    d: "Energía cinética y energía de rozamiento",
    correct: "c",
  },
];

const questionEl = document.getElementById('question');
const quiztag = document.getElementById('quiz')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz =0;
let score =0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML=currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    let muestra = currentQuiz +1;
    document.getElementById('contador').innerHTML = 'Pregunta: '+muestra+'/'+quizData.length;
}

function getSelected(){
    
    const answersEls = document.querySelectorAll('.answer');
    let answer = undefined;
    
    answersEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    deselectAnswers();
    return answer;
}

function deselectAnswers(){
    const answersEls = document.querySelectorAll(".answer");
    answersEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
            quiztag.innerHTML = `<h2 class="Result">Your score is <span>${score}/${quizData.length}</span> questions.</h2>`;
        }
    }

    

});