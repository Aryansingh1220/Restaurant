import React, { useState } from 'react';

import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

// List of Indian dishes
const indianDishes = [
  { title: 'Paneer Tikka', price: '₹250', tags: 'Appetizer | Vegetarian' },
  { title: 'Chicken Tandoori', price: '₹350', tags: 'Appetizer | Non-Vegetarian' },
  { title: 'Samosa', price: '₹50', tags: 'Appetizer | Vegetarian' },
  { title: 'Butter Chicken', price: '₹400', tags: 'Main Course | Non-Vegetarian' },
  { title: 'Paneer Butter Masala', price: '₹300', tags: 'Main Course | Vegetarian' },
  { title: 'Biryani', price: '₹300', tags: 'Main Course | Non-Vegetarian' },
  { title: 'Dal Makhani', price: '₹200', tags: 'Main Course | Vegetarian' },
  { title: 'Rogan Josh', price: '₹450', tags: 'Main Course | Non-Vegetarian' },
  { title: 'Chole Bhature', price: '₹150', tags: 'Main Course | Vegetarian' },
  { title: 'Aloo Paratha', price: '₹80', tags: 'Breakfast | Vegetarian' },
  { title: 'Gulab Jamun', price: '₹40', tags: 'Dessert | Vegetarian' },
  { title: 'Jalebi', price: '₹60', tags: 'Dessert | Vegetarian' },
  { title: 'Lassi', price: '₹70', tags: 'Beverage | Vegetarian' },
  { title: 'Masala Chai', price: '₹30', tags: 'Beverage | Vegetarian' },
  { title: 'Pav Bhaji', price: '₹120', tags: 'Snack | Vegetarian' },
  { title: 'Dosa', price: '₹90', tags: 'Breakfast | Vegetarian' },
  { title: 'Vada Pav', price: '₹50', tags: 'Snack | Vegetarian' },
  { title: 'Mutton Korma', price: '₹500', tags: 'Main Course | Non-Vegetarian' },
  { title: 'Kheer', price: '₹60', tags: 'Dessert | Vegetarian' },
  { title: 'Fish Curry', price: '₹400', tags: 'Main Course | Non-Vegetarian' },
];

const SpecialMenu = () => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? indianDishes : indianDishes.slice(0, 8);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palate" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_indianDishes flex__center">
          <p className="app__specialMenu-menu_heading">Indian Dishes</p>
          <div className="app__specialMenu_menu_items">
            {itemsToShow.map((dish, index) => (
              <MenuItem key={`${dish.title}-${index}`} title={dish.title} price={dish.price} tags={dish.tags} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={handleToggleShow}>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
