import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Contact from './Components/Contact';
import Roadmap from './Components/Roadmap';
import Faq from './Components/Faq';
import Teammembers from './Components/Teammembers';


const App = () => {
  return (
    <div className='App'>
          <Header/>
          <Feature/>
          <Roadmap/>
          <Faq/>
          <Teammembers/>
          <Contact /> 
    </div>
  )
}

export default App