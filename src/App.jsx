import './styles/App.css';
import Header from './components/Header';
import FindPlans from './components/FindPlans';
import About from './components/About';
import Types from './components/Types';
import LearnMore from './components/LearnMore';
import Help from './components/Help';

function App() {

  return (
    <div className='siteContent'>
      <Header/>
      <FindPlans />
      <About />
      <Types />
      <LearnMore />
      <Help />
    </div>
  )
}

export default App
