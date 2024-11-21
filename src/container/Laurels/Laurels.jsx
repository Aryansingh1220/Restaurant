import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" className="award-card-img" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Achievements</h1>

      <div className="app__laurels_awards">
        {data.awards.length ? (
          data.awards.map((award) => <AwardCard award={award} key={award.title} />)
        ) : (
          <p className="p__opensans" style={{ color: '#fff' }}>
            We are proud of our accomplishments and the recognition we&apos;ve received in the industry.
          </p>
        )}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" className="laurels-img" />
    </div>
  </div>
);

export default Laurels;
