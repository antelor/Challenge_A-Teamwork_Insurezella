import '../styles/Types.css';
import healthInsurance from '../assets/health-insurance-icon.png';
import medicare from '../assets/medicare-icon.png';
import lifeInsurance from '../assets/life-insurance-icon.png';
import advantage from '../assets/medicare-advantage-icon.png';
import obamacare from '../assets/obamacare-icon.png';
import shortTerm from '../assets/short-term-icon.png';

function Types() {

  return (
    <div className='Types'>
        <div className='title'>Pick the insurance that suits your needs.</div>
        <div className='typesGrid'>
            {/*TO-DO: typeCard in separate component*/}
            <div className='typeCard'>
                <img src={healthInsurance} />
                <div className='cardInfo'>
                    <div className='cardTitle'>Health Insurance</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>

            <div className='typeCard'>
                <img src={medicare} /> 
                <div className='cardInfo'>
                    <div className='cardTitle'>Medicare Supplement</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>

            <div className='typeCard'>
                <img src={lifeInsurance} /> 
                <div className='cardInfo'>
                    <div className='cardTitle'>Life Insurance</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>

            <div className='typeCard'>
                <img src={advantage} /> 
                <div className='cardInfo'>
                    <div className='cardTitle'>Medicare Advantage</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>

            <div className='typeCard'>
                <img src={obamacare} /> 
                <div className='cardInfo'>
                    <div className='cardTitle'>ACA/ Obamacare</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>

            <div className='typeCard'>
                <img src={shortTerm} /> 
                <div className='cardInfo'>
                    <div className='cardTitle'>Short-Term Medical</div>
                    <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Types