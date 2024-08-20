import '../styles/Types.css';
import healthInsurance from '../assets/health-insurance-icon.png';
import medicare from '../assets/medicare-icon.png';
import lifeInsurance from '../assets/life-insurance-icon.png';
import advantage from '../assets/medicare-advantage-icon.png';
import obamacare from '../assets/obamacare-icon.png';
import shortTerm from '../assets/short-term-icon.png';
import TypeCard from './TypeCard';

function Types() {

  return (
    <div className='Types'>
        <div className='title'>Pick the insurance that suits your needs.</div>
        <div className='typesGrid'>
            {/*moved the typecards to a separate component for readability*/}
            <TypeCard cardImg={healthInsurance} cardTitle='Health insurance' />
            <TypeCard cardImg={medicare} cardTitle='Medical Supplement' />
            <TypeCard cardImg={lifeInsurance} cardTitle='Life Insurance' />
            <TypeCard cardImg={advantage} cardTitle='Medicare Advantage' />
            <TypeCard cardImg={obamacare} cardTitle='ACA/ Obamacare' />
            <TypeCard cardImg={shortTerm} cardTitle='Short-Term Medical' />

        </div>
    </div>
  )
}

export default Types