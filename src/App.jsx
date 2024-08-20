import './styles/App.css';
import Header from './components/Header';
import FindPlans from './components/FindPlans';
import About from './components/About';
import Types from './components/Types'

function App() {

  return (
    <div className='siteContent'>
      <Header/>
      <FindPlans />
      <About />
      <Types />
    </div>
  )
}

export default App
