import React from 'react';

const DegConvBut = ({ onClick, id, text }) => {
  return (
    <button onClick={onClick} id={id} type="button">
      {text}
    </button>
  );
}

export default DegConvBut;