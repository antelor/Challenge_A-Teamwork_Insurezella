import './styles/App.css';
import Header from './components/Header';
import FindPlans from './components/FindPlans';
import About from './components/About';
import Types from './components/Types';
import LearnMore from './components/LearnMore';
import Help from './components/Help';
import FooterMobile from './components/FooterMobile';
import threeDots from './assets/three-dots-blue-20979.png'

function App() {

  return (
    <div className='siteContent'>
      <Header/>
      <FindPlans />
      <About />
      <Types />
      <LearnMore />
      <Help />
      <img src={threeDots} className='threeDots'/>
      <FooterMobile />
    </div>
  )
}

export default App
