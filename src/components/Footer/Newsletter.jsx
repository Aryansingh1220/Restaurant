import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert('You have successfully registered for our newsletter!');
      setEmail(''); // Clear the input field after successful registration
    } else {
      alert('Please enter your email address before subscribing.');
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="custom__button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
