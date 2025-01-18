import React, { useState } from 'react';

function Text(props) {
  const [text, setText] = useState('Hello I am text of useState');
  const handleTextChange = () => {
    setText('Text is changed...');
  };
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.text}</h1>
      <h2>{text}</h2>
      <button onClick={handleTextChange}>Change Text</button>
    </div>
  );
}

export default Text;
