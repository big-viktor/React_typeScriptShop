import React, { useState } from 'react';
import Futbolka from '../../assets/img/futbolka.png';
import Swet from '../../assets/img/swet.png';
import Pattern from '../../assets/img/pattern.jpg';
import './ProductReview.css';
import SizeButtons from '../SizeButtons/SizeButtons';
import ButtonsSketch from '../ButtonsSketch/ButtonsSketch';
import FocusButton from '../FocusButton/FocusButton';

const ProductReview: React.FC = () => {
  const [count, setCount] = useState(88);

  return (
    <>
      <div className="product-review-container">
        <div className="product-reiew-sketch">
          <img src={Pattern} className="product-reiew-sketch-img" />
          <div className="buttons-focus-sketch">
            <FocusButton />
          </div>
        </div>

        <div className="product-review-size">
          <div className="product-review-size-button">
            <SizeButtons />
          </div>
          <div className="image-content-product-review">
            <img src={Swet} className="content-product-review-image" />
          </div>
          <div className="product-review-buttons-sketch">
            <div>
              <ButtonsSketch src={Futbolka} />
            </div>

            <div className="product-review-buttons-sketch-focus">
              <FocusButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
