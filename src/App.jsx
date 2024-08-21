import './styles/App.css';
import Header from './components/Header';
import FindPlans from './components/FindPlans';
import About from './components/About';
import Types from './components/Types';
import LearnMore from './components/LearnMore';
import Help from './components/Help';
import FooterMobile from './components/FooterMobile';
import FooterDesktop from './components/FooterDesktop';
import threeDots from './assets/three-dots-blue-20979.png';
import React, { useState, useEffect } from 'react';

function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )
    
  //checks whether to display mobile or desktop Footer
  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <div className='siteContent'>
      <Header/>
      <FindPlans />
      <About />
      <Types />
      <LearnMore />
      <Help />
      <img src={threeDots} className='threeDots'/>
      {matches && <FooterDesktop/>}
      {!matches && <FooterMobile />}
    </div>
  )
}

export default App
