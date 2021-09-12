import React from 'react';
import ButtonSwitches from '../components/ButtonSwitches/ButtonSwitches';
import ProductReview from '../components/ProductReview/ProductReview';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import './ProductSetupPage.css';

const ProductSetupPage: React.FC = () => {
  const item = ['Add Pattern Fill', 'Add Artwork', 'Add Text Layer'];
  return (
    <>
      <div className="container-product-setup">
        {' '}
        <div>
          <DropdownMenu />
        </div>
        <div className="product-setuo-pages">
          <div className="toggle-conteiner">
            {' '}
            <ButtonSwitches />
          </div>
          <div>
            <ProductReview />
          </div>{' '}
        </div>
      </div>
    </>
  );
};

export default ProductSetupPage;
