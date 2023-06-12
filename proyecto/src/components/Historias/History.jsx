import React, { useEffect, useRef, useState } from 'react';
import './History.css';

const MaxCharTextarea = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [stories, setStories] = useState([]);
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

    const storedStories = localStorage.getItem('stories');
    if (storedStories) {
      setStories(JSON.parse(storedStories));
    }

    return () => {
      window.removeEventListener('resize', updateTextareaSize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

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
    const newStory = {
      name: name,
      email: email,
      text: text,
      date: currentDate,
    };
    setStories([...stories, newStory]);
    setText('');
    setName('');
    setEmail('');
  };

  const handlePrintStory = () => {
    window.print();
  };

  const handleDeleteStories = () => {
    setStories([]);
    localStorage.removeItem('stories');
  };

  const sortedStories = stories.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

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
      {sortedStories.length > 0 && (
        <div className="story-section">
          <h3>Historias guardadas:</h3>
          {sortedStories.map((story, index) => (
            <div key={index}>
              <p>{story.text}</p>
              <p>Nombre: {story.name}</p>
              <p>Email: {story.email}</p>
              <p>Fecha: {story.date}</p>
              <button onClick={handlePrintStory}>Imprimir</button>
            </div>
          ))}
          <button onClick={handleDeleteStories}>Borrar historias</button>
        </div>
      )}
      <div className="image-section">
      </div>
    </div>
  );
};

export default MaxCharTextarea;
