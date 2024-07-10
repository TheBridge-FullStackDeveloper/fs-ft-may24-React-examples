import React, { useState } from 'react';

const FormSubscribe = ({ setMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setMessage(inputValue); // Pasamos el mensaje al componente hermano a través de la función setMessage
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Enviar mensaje</button>
    </div>
  );
};

export default FormSubscribe;