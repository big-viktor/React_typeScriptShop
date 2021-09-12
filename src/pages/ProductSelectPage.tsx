import React, { useCallback } from 'react';
// @ts-ignore
import Slider from 'react-slick';
import ProductTypeCategory from '../components/ProductTypeCategory/ProductTypeCategory';
import ProductCard from '../components/ProductCard/ProductCard';
import './ProdcutSelectPage.css';
import LeftRightArrow from '../components/LeftRightArrow/LeftRightArrow';

const ProductSelectPage: React.FC = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <LeftRightArrow />,
    accessibility: true,
  };

  const renderItem = useCallback(() => <ProductCard />, []);
  const productList = [
    {
      id: '13SP',
      name: 'shirt/mens/sleeve-long/collar-crew/fit-standard',
      label: "Men's Long Sleeve Standard T-Shirt (poly)",
    },
    {
      id: '14JP',
      name: 'shirt/womens/sleeve-long/collar-crew/fit-slim',
      label: "Women's Long Sleeve Standard T-Shirt (poly)",
    },
    {
      id: 'PPTP',
      name: 'hoodie/2panel',
      label:
        "Men's Set-In Standard Pullover Hoodie 2pc. Hood w/o Lining (poly)",
    },
    {
      id: 'PTPL',
      name: 'hoodie/2panel-lining',
      label: "Men's Set-In Standard Pullover Hoodie 2pc. Hood w/Lining (poly)",
    },
    {
      id: '12PO',
      name: 'shirt/mens/sleeve-short/collar-crew/fit-standard/v2',
      label: "Men's Standard T-Shirt (poly)",
    },
    {
      id: 'HW2P',
      name: 'hoodie/mens',
      label: "Men's Raglan Standard Zip Hoodie 3pc. Hood w/Lining (poly)",
    },
    {
      id: 'TOJP',
      name: 'shirt/toddler',
      label: 'Toddler Standard T-Shirt (poly)',
    },
    {
      id: 'STPW',
      name: 'sweatshirt/womens/collar-crew/setin',
      label: "Women's Set-in Standard Crewneck Sweatshirt (poly)",
    },
    {
      id: 'STCM',
      name: 'sweatshirt/mens/collar-crew/setin',
      label: "Men's Set-in Sweatshirt 260gsm",
    },
    {
      id: 'STPM',
      name: 'sweatshirt/mens/collar-crew/setin',
      label: "Men's Set-in Standard Crewneck Sweatshirt (poly)",
    },
    {
      id: '14SP',
      name: 'shirt/womens/sleeve-short/collar-crew/fit-slim',
      label: "Women's Standard T-Shirt, fitted (poly)",
    },
    { id: 'BSJP', name: 'shirt/boys', label: "Boy's Standard T-Shirt (poly)" },
    {
      id: 'GSJP',
      name: 'shirt/girls',
      label: "Girl's Standard T-Shirt (poly)",
    },
    {
      id: 'TPJP',
      name: 'tank-top/mens',
      label: "Men's Standard T-Shirt Tank Top (poly)",
    },
    {
      id: 'TTSP',
      name: 'tank-top/womens',
      label: "Women's Standard Tank Top (poly)",
    },
    { id: '5', name: 'backpack/single-panel', label: 'Backpack' },
    { id: 'JANS', name: 'backpack/jansport', label: 'Classic Backpack' },
    {
      id: 'PMPD',
      name: 'backpack/lunchbox-upgraded',
      label: 'Lunchbox-upgraded',
    },
    { id: 'DFHH', name: 'leggings/blackmilk', label: 'Leggings' },
    {
      id: 'DFHR',
      name: 'leggings/blackmilk',
      label: 'Leggings (recycled poly)',
    },
    { id: 'LLL1', name: 'leggings/lilu', label: 'Yoga Pant' },
    {
      id: 'KH2P',
      name: 'hoodie/kids/2panel',
      label:
        "Kid's Set-In Standard Pullover Hoodie 2pc. Hood w/o Lining (poly)",
    },
    {
      id: 'PTWP',
      name: 'hoodie/womens/2panel',
      label:
        "Women's Set-in Standard Pullover Hoodie 2pc. Hood w/o Lining (poly)",
    },
    {
      id: 'PTWL',
      name: 'hoodie/womens/2panellong',
      label:
        "Women's X-Long Set-in Pullover Hoodie Dress 2pc. Hood w/o Lining (poly)",
    },
    {
      id: 'SZPL',
      name: 'hoodie/sleevelesszip',
      label: "Men's Sleeveless Standard Zip Hoodie 2pc. Hood w/Lining (poly)",
    },
    { id: 'POTS', name: 'poster/18x24', label: 'Poster' },
    { id: 'POTH', name: 'poster/24x18', label: 'Poster Horizontal' },
    {
      id: 'RG2L',
      name: 'raglan/womens/collar-crew',
      label: "Women's Raglan Standard Crewneck Sweatshirt (poly)",
    },
    {
      id: 'RGCM',
      name: 'raglan/mens/collar-crew',
      label: "Men's Raglan Sweatshirt (260gsm)",
    },
    {
      id: 'RC2L',
      name: 'raglan/mens/collar-crew',
      label: "Men's Raglan Standard Crewneck Sweatshirt (poly)",
    },
    {
      id: 'T3SP',
      name: 'shirt/mens/sleeve-short/collar-crew/fit-standard/v3pocket',
      label: "Men's Standard Pocket T-Shirt (poly)",
    },
    { id: 'SWTC', name: 'swatches', label: 'Swatch' },
    { id: 'PC01', name: 'pencilcase', label: 'Pencil case' },
    { id: 'SOCK', name: 'socks', label: 'Socks' },
  ];

  const findCategoryName = (fullName: string) => {
    const allWords = fullName.split(' ');
    return allWords[0];
  };

  const findAllCategories = () => {
    const categories = [] as string[];
    productList.forEach((productItem) => {
      let category = findCategoryName(productItem.label);
      if (category === "Girl's") {
        category = "Kid's";
      }
      if (category === "Legin's") {
        category = "Legin's";
      }

      console.log('111', category);
      console.log('111', category.indexOf(category));

      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
    return categories;
  };

  const categories = findAllCategories();

  console.log(categories);

  return (
    <>
      <div className="content-start">
        <ProductTypeCategory label={"men's clothing"} />
      </div>
      <div className="products-slider">
        <Slider {...settings}>{item.map(() => renderItem())}</Slider>{' '}
      </div>
      <div className="products-category">
        <ProductTypeCategory label={"men's clothing"} />
      </div>
      <div className="products-slider">
        <Slider {...settings}>{item.map(() => renderItem())}</Slider>
      </div>
      <div className="products-category">
        <ProductTypeCategory label="TECH ACCESSORIES" />
      </div>
      <div className="products-slider">
        <Slider {...settings}>{item.map(() => renderItem())}</Slider>
      </div>
    </>
  );
};

export default ProductSelectPage;
