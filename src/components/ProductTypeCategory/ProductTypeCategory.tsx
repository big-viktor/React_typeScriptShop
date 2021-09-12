import React from 'react';
import './styles.css';

interface ProductTypeCategoryI {
  label: string;
}

const ProductTypeCategory: React.FC<ProductTypeCategoryI> = ({ label }) => (
  <div className="product-type-category">
    <div>{label}</div>
  </div>
);

export default ProductTypeCategory;
