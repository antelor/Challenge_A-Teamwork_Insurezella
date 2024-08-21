import '../styles/Help.css';
import doctor from '../assets/doctor.jpg';
import familyTogether from '../assets/family-together.jpg';
import appointment from '../assets/medical-appointment.jpg';
import sign from '../assets/man-signing.jpg';

function Help() {

  return (
    <div className='Help'>
        <div className='helpTitle'>We're help to help</div>
        <div className='helpCardContainer'>

            <div className='helpCard'>
              <div className='helpCardInfo'>
                <div className='helpImgContainer'>
                  <img src={doctor}/>
                </div>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Health insurance</div>
                  <div className='desc'>Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now. Our Health Insurance Agency Provides You with Plans That Meet Your Needs.</div>
                </div>

              </div>

              <div className='helpCardLink'>Compare plans</div>
            </div>

            <div className='helpCard'>
              <div className='helpCardInfo'>
                <div className='helpImgContainer'>
                  <img src={familyTogether}/>
                </div>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Life insurance</div>
                  <div className='desc'>Life insurance allows you to save and build wealth over time while also protecting your family should the worst happen.</div>
                </div>        
              </div>  

              <div className='helpCardLink'>Compare plans</div>
            </div>

            <div className='helpCard desktop'>
              <div className='helpCardInfo'>
                <div className='helpImgContainer'>
                  <img src={appointment}/>
                </div>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Medicare Supplement</div>
                  <div className='desc'>With Medicare supplements, you won't have medical cost surprises, which could wreck your budget. Medicare supplements can help protect your finances from high costs, which can destroy your nest egg.</div>
                </div>        
              </div>  

              <div className='helpCardLink'>View plans</div>
            </div>

            <div className='helpCard desktop'>
              <div className='helpCardInfo'>
                <div className='helpImgContainer'>
                  <img src={sign}/>
                </div>
                <div className='helpCardText'>
                  <div className='helpCardTitle'>Medicare advantage</div>
                  <div className='desc'>Medicare Advantage Plans cover all Original Medicare services, and some offer drug, vision, hearing, dental, or wellness coverage.</div>
                </div>        
              </div>  

              <div className='helpCardLink'>View plans</div>
            </div>
        </div>
    </div>
  )
}

export default Help