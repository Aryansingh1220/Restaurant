
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const scrollToMenu = () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Discover a New Taste Adventure" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Indulge in culinary delights crafted with passion and precision. From
          traditional spices to contemporary flavors, our menu promises a
          memorable journey for your taste buds.
        </p>
        <button type="button" className="custom__button" onClick={scrollToMenu}>
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
