
import React from 'react';
import { SubHeading } from '../../components';

const FindUs = () => {
  const openMap = () => {
    window.open('https://www.google.com/maps/place/Jalandhar,+Punjab,+India', '_blank');
  };

  return (
    <div>
      {/* FindUs Section */}
      <div className="findus__wrapper" id="contact">
        <div className="findus__info">
          <SubHeading title="Contact" />
          <h1 className="findus__header">Find Us</h1>
          <div className="findus__content">
            <p>We are located in the heart of Jalandhar, Punjab, India.</p>
            <p className="findus__hours-header">Opening Hours</p>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <p>Sat - Sun: 10:00 am - 03:00 am</p>
          </div>
          <button type="button" className="findus__button" onClick={openMap}>
            Visit Us
          </button>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .findus__wrapper {
            background-color: #0c0c0c;
            padding: 4rem 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
          }

          .findus__info {
            max-width: 500px;
            text-align: center;
          }

          .findus__header {
            font-size: 2.7rem; /* Increased font size */
            color: #dcca87;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }

          .findus__content {
            font-size: 1.2rem; /* Increased font size */
            color: #aaaaaa;
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .findus__hours-header {
            color: #dcca87;
            font-weight: bold;
            margin-top: 1.5rem;
            font-size: 1.3rem; /* Increased font size */
          }

          .findus__button {
            padding: 0.8rem 2.2rem;
            background-color: #dcca87;
            color: #0c0c0c;
            border: none;
            cursor: pointer;
            font-size: 1.1rem; /* Increased font size */
            transition: background-color 0.3s ease;
          }

          .findus__button:hover {
            background-color: #bba76a;
          }
        `}
      </style>
    </div>
  );
};

export default FindUs;
