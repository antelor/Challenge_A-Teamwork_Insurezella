import '../styles/Help.css';
import doctor from '../assets/doctor.jpg';
import familyTogether from '../assets/family-together.jpg';

function Help() {

  return (
    <div className='Help'>
        <div className='helpTitle'>We're help to help</div>
        <div className='helpCardContainer'>

            <div className='helpCard'>
              <div className='helpCardInfo'>

                <img className='helpCardImg' src={doctor}/>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Health insurance</div>
                  <div className='desc'>Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now. Our Health Insurance Agency Provides You with Plans That Meet Your Needs.</div>
                </div>

              </div>

              <div className='helpCardLink'>Compare plans</div>
            </div>

            <div className='helpCard'>
              <div className='helpCardInfo'>

                <img className='helpCardImg' src={familyTogether}/>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Life insurance</div>
                  <div className='desc'>Life insurance allows you to save and build wealth over time while also protecting your family should the worst happen.</div>
                </div>        
              </div>  

              <div className='helpCardLink'>Compare plans</div>
            </div>
        </div>
    </div>
  )
}

export default Help