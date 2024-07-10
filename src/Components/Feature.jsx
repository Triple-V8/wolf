import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/zkSync-logo.png';
import featureimage1 from '../images/community.png';
import featureimage2 from '../images/funanden.png';

const Feature = () => {
  return (
    <div id='features'>
      <h2>Features</h2>
        <div className='a-container'>
            <FeatureBox image={featureimage} title='Scroll blockchain Technology' details='Leveraging the power of scroll blockchain for fast, secure, and low-cost transactions.'/>
            <FeatureBox image={featureimage1} title='Community-Driven' details='Built for and by the community, ensuring everyones voice is heard.'/>
            <FeatureBox image={featureimage2} title='Fun and Engaging' details='Meme contests, community events, lotteries and more to keep the excitement alive.' />
        </div>
    </div>
  )
}

export default Feature;