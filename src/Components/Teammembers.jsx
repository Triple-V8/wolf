import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/zkwolfnobg1.png';
import featureimage1 from '../images/zkwolfnobg.png';
import featureimage2 from '../images/zkwolfnobg2.png';

const Teammembers = () => {
  return (
    <div id='team'>
        <h2>Team Members</h2>
        <div className='a-container'>
            <FeatureBox image={featureimage} title='Alpha Wolf' details='Founder & CEO.'/>
            <FeatureBox image={featureimage1} title='Beta Wolf' details='Lead Developer.'/>
            <FeatureBox image={featureimage2} title='Gamma Wolf' details='Community Manager.' />
        </div>
    </div>
  )
}

export default Teammembers;