import React, { useState } from 'react';
import './ButtonsSketch.css';

interface ButtonsSketchI {
  src: string;
}

const ButtonsSketch: React.FC<ButtonsSketchI> = ({ src }) => {
  const [activeButton, setactiveButton] = useState(false);

  return (
    <>
      <div className="buttons-sketch-container">
        <button type="button" className="buttons-sketch">
          <img src={src} alt="" className="buttons-sketch-img" />
        </button>
        <button type="button" className="buttons-sketch">
          <img src={src} alt="" className="buttons-sketch-img" />
        </button>
        <button type="button" className="buttons-sketch">
          <img src={src} alt="" className="buttons-sketch-img" />{' '}
        </button>
        <button type="button" className="buttons-sketch">
          <img src={src} alt="" className="buttons-sketch-img" />{' '}
        </button>
      </div>
    </>
  );
};

export default ButtonsSketch;
