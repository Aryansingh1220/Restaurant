import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef in action" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quotation mark" />
          <p className="p__opensans">
            &ldquo;We believe in serving the finest and most authentic dishes, made with passion and care.&rdquo;
          </p>
        </div>
        <p className="p__opensans">
          Our chef creates each dish with the freshest ingredients and love for culinary excellence. Every meal is crafted to provide a memorable dining experience.
        </p>
      </div>

      <div className="app__chef-sign">
        <p className="chef-name">Kevin Luo</p>
        <p className="p__opensans chef-role">Chef & Founder</p>
        <img src={images.sign} alt="Kevin Luo's Signature" />
      </div>
    </div>
  </div>
);

export default Chef;
