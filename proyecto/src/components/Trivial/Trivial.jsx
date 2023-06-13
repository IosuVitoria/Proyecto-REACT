import React from 'react';
import { preguntas } from './questions';
import imageA from "./images/clase.jpg"
import imageB from "./images/fondopregunta.jpg"

const Trivial = () => {
  // Estado para almacenar las preguntas y respuestas
  const [currentQuestion, setCurrentQuestion] = React.useState(0); // Estado para la pregunta actual
  const [score, setScore] = React.useState(0); // Estado para la puntuación
  const [showScore, setShowScore] = React.useState(false); // Estado para mostrar la puntuación final

  // Función para manejar la selección de respuesta
  const handleAnswerOptionClick = (respuestaCorrecta) => {
    if (respuestaCorrecta) {
      setScore(score + 1); // Incrementa la puntuación si la respuesta es correcta
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < preguntas.preguntas.length) {
      setCurrentQuestion(nextQuestion); // Avanza a la siguiente pregunta
    } else {
      setShowScore(true); // Muestra la puntuación final cuando no hay más preguntas
    }
  };

  return (
    <div className="trivial-container">
      {/* Título del Trivial */}
      <h1>Trivial de Harry Potter</h1>

      {/* Imagen A */}
      <div className="">
        {<img src={imageA} alt="Imagen del Trivial" className='imageA-container'/>}
      </div>

      {/* Imagen B y contenido */}
      <div className="imageB-container">
        {/* Sección de la pregunta actual */}
        <div className="question-section">
          <div className="question-count">
            <span>Pregunta {currentQuestion + 1}</span>/{preguntas.preguntas.length}
          </div>
          <div className="question-text">
            {preguntas.preguntas[currentQuestion].pregunta}
          </div>
        </div>

        {/* Sección de las opciones de respuesta */}
        <div className="answer-section">
          {preguntas.preguntas[currentQuestion].respuestas.map((respuesta, index) => (
            <button
              key={index}
              onClick={() =>
                handleAnswerOptionClick(
                  index === preguntas.preguntas[currentQuestion].respuestaCorrecta
                )
              }
            >
              {respuesta}
            </button>
          ))}
        </div>
      </div>

      {/* Sección de puntuación o sección de preguntas */}
      {showScore ? (
        // Muestra la puntuación final si no hay más preguntas
        <div className="score-section">
          Has obtenido {score} de {preguntas.preguntas.length} respuestas correctas.
        </div>
      ) : null}
    </div>
  );
};

export default Trivial;
