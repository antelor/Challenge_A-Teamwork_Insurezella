import './styles/App.css';
import Header from './components/Header';
import FindPlans from './components/FindPlans';
import About from './components/About.jsx';

function App() {

  return (
    <div className='siteContent'>
      <Header/>
      <FindPlans />
      <About />
    </div>
  )
}

export default App
