// import React, { useState } from 'react';

// import { SubHeading, MenuItem } from '../../components';
// import './SpecialMenu.css';

// // List of Indian dishes
// const indianDishes = [
//   { title: 'Paneer Tikka', price: '₹250', tags: 'Appetizer | Vegetarian' },
//   { title: 'Chicken Tandoori', price: '₹350', tags: 'Appetizer | Non-Vegetarian' },
//   { title: 'Samosa', price: '₹50', tags: 'Appetizer | Vegetarian' },
//   { title: 'Butter Chicken', price: '₹400', tags: 'Main Course | Non-Vegetarian' },
//   { title: 'Paneer Butter Masala', price: '₹300', tags: 'Main Course | Vegetarian' },
//   { title: 'Biryani', price: '₹300', tags: 'Main Course | Non-Vegetarian' },
//   { title: 'Dal Makhani', price: '₹200', tags: 'Main Course | Vegetarian' },
//   { title: 'Rogan Josh', price: '₹450', tags: 'Main Course | Non-Vegetarian' },
//   { title: 'Chole Bhature', price: '₹150', tags: 'Main Course | Vegetarian' },
//   { title: 'Aloo Paratha', price: '₹80', tags: 'Breakfast | Vegetarian' },
//   { title: 'Gulab Jamun', price: '₹40', tags: 'Dessert | Vegetarian' },
//   { title: 'Jalebi', price: '₹60', tags: 'Dessert | Vegetarian' },
//   { title: 'Lassi', price: '₹70', tags: 'Beverage | Vegetarian' },
//   { title: 'Masala Chai', price: '₹30', tags: 'Beverage | Vegetarian' },
//   { title: 'Pav Bhaji', price: '₹120', tags: 'Snack | Vegetarian' },
//   { title: 'Dosa', price: '₹90', tags: 'Breakfast | Vegetarian' },
//   { title: 'Vada Pav', price: '₹50', tags: 'Snack | Vegetarian' },
//   { title: 'Mutton Korma', price: '₹500', tags: 'Main Course | Non-Vegetarian' },
//   { title: 'Kheer', price: '₹60', tags: 'Dessert | Vegetarian' },
//   { title: 'Fish Curry', price: '₹400', tags: 'Main Course | Non-Vegetarian' },
// ];

// const SpecialMenu = () => {
//   const [showAll, setShowAll] = useState(false);
//   const itemsToShow = showAll ? indianDishes : indianDishes.slice(0, 8);

//   const handleToggleShow = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <div className="app__specialMenu flex__center section__padding" id="menu">
//       <div className="app__specialMenu-title">
//         <SubHeading title="Menu that fits your palate" />
//         <h1 className="headtext__cormorant">Today&apos;s Special</h1>
//       </div>

//       <div className="app__specialMenu-menu">
//         <div className="app__specialMenu-menu_indianDishes flex__center">
//           <p className="app__specialMenu-menu_heading">Indian Dishes</p>
//           <div className="app__specialMenu_menu_items">
//             {itemsToShow.map((dish, index) => (
//               <MenuItem key={`${dish.title}-${index}`} title={dish.title} price={dish.price} tags={dish.tags} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div style={{ marginTop: 15 }}>
//         <button type="button" className="custom__button" onClick={handleToggleShow}>
//           {showAll ? 'View Less' : 'View More'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SpecialMenu;
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';
import 'react-toastify/dist/ReactToastify.css';

const indianDishes = [
  { id: 1, title: 'Paneer Tikka', price: '₹250', tags: 'Appetizer | Vegetarian', available: true },
  { id: 2, title: 'Chicken Tandoori', price: '₹350', tags: 'Appetizer | Non-Vegetarian', available: true },
  { id: 3, title: 'Samosa', price: '₹50', tags: 'Appetizer | Vegetarian', available: false },
  { id: 4, title: 'Butter Chicken', price: '₹400', tags: 'Main Course | Non-Vegetarian', available: true },
  { id: 5, title: 'Paneer Butter Masala', price: '₹300', tags: 'Main Course | Vegetarian', available: false },
  { id: 6, title: 'Biryani', price: '₹300', tags: 'Main Course | Non-Vegetarian', available: true },
  { id: 7, title: 'Dal Makhani', price: '₹200', tags: 'Main Course | Vegetarian', available: true },
  { id: 8, title: 'Rogan Josh', price: '₹450', tags: 'Main Course | Non-Vegetarian', available: true },
  { id: 9, title: 'Chole Bhature', price: '₹150', tags: 'Main Course | Vegetarian', available: true },
  { id: 10, title: 'Aloo Paratha', price: '₹80', tags: 'Breakfast | Vegetarian', available: true },
];

const SpecialMenu = () => {
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState([]);

  const itemsToShow = showAll ? indianDishes : indianDishes.slice(0, 8);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const handleAddToCart = (item) => {
    if (item.available) {
      setCart([...cart, item]);
      toast.success(`${item.title} added to cart!`);
    } else {
      toast.error(`${item.title} is currently unavailable.`);
    }
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.warn('Your cart is empty. Please add some items.');
    } else {
      toast.success(`Order placed successfully! Items: ${cart.map((item) => item.title).join(', ')}`);
      setCart([]); // Clear cart after order placement
    }
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
              <div key={`${dish.title}-${index}`} className="menu-item-container">
                <MenuItem title={dish.title} price={dish.price} tags={dish.tags} />
                <button
                  type="button"
                  className="custom__button"
                  onClick={() => handleAddToCart(dish)}
                  disabled={!dish.available}
                >
                  {dish.available ? 'Add to Cart' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button" onClick={handleToggleShow}>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>

      <div className="cart-section" style={{ marginTop: 30 }}>
        <h2 className="headtext__cormorant">Your Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>{item.title} - {item.price}</li>
            ))}
          </ul>
        ) : (
          <p>No items in the cart</p>
        )}
        <button type="button" className="custom__button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default SpecialMenu;
