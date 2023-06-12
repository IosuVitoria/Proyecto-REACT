import React, { useEffect, useRef, useState } from 'react';
import './History.css';

const MaxCharTextarea = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [story, setStory] = useState('');
  const [date, setDate] = useState('');

  const textareaRef = useRef(null);

  useEffect(() => {
    const updateTextareaSize = () => {
      const rows = Math.floor(window.innerHeight / 20);
      const cols = Math.floor(window.innerWidth / 10);
      textareaRef.current.rows = rows;
      textareaRef.current.cols = cols;
    };

    window.addEventListener('resize', updateTextareaSize);
    updateTextareaSize();

    return () => {
      window.removeEventListener('resize', updateTextareaSize);
    };
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    setStory(text);
    setDate(currentDate);
    setText('');
    setName('');
    setEmail('');
  };

  return (
    <div className="max-char-textarea">
      <div className="input-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Ingresa tu texto aquí..."
      />
      <button onClick={handleSubmit}>Enviar</button>
      {story && (
        <div className="story-section">
          <h3>Historia del usuario:</h3>
          <p>{story}</p>
          <p>Fecha: {date}</p>
        </div>
      )}
      <div className="image-section">
        <h3>Imagen de muestra:</h3>
        <img src="../componentes/NavBar/FondoNavBar.jpg" alt="Imagen de muestra" />
      </div>
    </div>
  );
};

export default MaxCharTextarea;
