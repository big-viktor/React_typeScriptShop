import React from 'react';
import './ProductCard.css';
import Button from '../SelectionButton/Button';
import LeftRightArrow from '../LeftRightArrow/LeftRightArrow';
import Swet from '../../assets/img/swet.png';

const ProductCard: React.FC = () => (
  <div className="product-card">
    <div className="product-card-look">
      <img className="product-card-img" src={Swet} alt="#" />
      <div className="product-card-button">
        <Button>
          <p className="product-card-button-text">Select</p>
        </Button>{' '}
      </div>{' '}
    </div>

    <div className="product-card-description">
      <div className="product-card-name">
        <p>
          Men's set-in sleeve pullover <br /> 2-pc hoodie (260gsm)
        </p>
      </div>
      <div>
        <p className="product-card-price">Base MSRP: $54</p>
        <a className="product-card-full-price" href="#">
          full pricing
        </a>
      </div>
    </div>
  </div>
);
export default ProductCard;
