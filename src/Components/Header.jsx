import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Meet Wolf, <br/></span>The wildest memecoin on the Scroll blockchain.</h1>
            <p className='details'>Join the pack and let's hunt for the moon together!</p>
            <a href="https://t.me/+a0T3S_iCdYJiOWI8" className='cv-btn'>Join the pack</a>
            {/* <div className='twitter'>
            <a href="https://x.com/wolfonzksync"><i class="bi bi-twitter"></i></a>
            </div> */}
        </div>
    </div>
  )
}

export default Header;