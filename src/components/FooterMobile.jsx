import '../styles/FooterMobile.css';
import email from '../assets/email-svgrepo-com.svg';
import phone from '../assets/call-svgrepo-com.svg';
import clock from '../assets/clock-svgrepo-com.svg';
import contact from '../assets/contact-book-svgrepo-com.svg';
import logo from '../assets/logo.png';

import fb from '../assets/facebook-svgrepo-com.svg';
import tw from '../assets/twitter-154-svgrepo-com.svg';
import ig from '../assets/instagram-svgrepo-com.svg';
import linkedIn from '../assets/linkedin-svgrepo-com.svg';


function FooterMobile() {

  return (
    <div className='footerMobile'>
        <div className='footerSection firstFooter'>
            <div className='footCard desc'>
                <div className='logoSectionCard'>
                    <img src={logo} className='footLogo'/>
                    <div>
                        "Discover the Peace of Mind You Deserve With Insurezella "Your Reliable Insurance Umbrella"
                    </div>
                </div>
                <div className='logoList'>
                    <img src={fb}/>
                    <img src={tw}/>
                    <img src={ig}/>
                    <img src={linkedIn}/>
                </div>
            </div>
            <div className='footCard'>
                <div className='footListTitle'>
                    Services
                </div>
                <div className='footList desc'>
                    <div className='clickableItem'>
                        <img src={email}/> 
                        <span>Health Insurance</span>
                    </div>
                    <div className='clickableItem'>
                        <img src={email}/> 
                        <span>Life Insurance</span>
                    </div>
                    <div className='clickableItem'>
                        <img src={email}/> 
                        <span>Medicare Supplement</span>
                    </div>
                    <div className='clickableItem'>
                        <img src={email}/> 
                        <span>Medicare Advantage</span>
                    </div>
                    <div className='clickableItem'>
                        <img src={email}/> 
                        <span>(ACA)Obamacare</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='blueBar'></div>
        
        <div className='footerSection secondFooter'>
            <div className='footCard'>
                <div className='footListTitle'>
                    Company
                </div>
                <div className='footList desc'>
                    <div className='clickableItem'>About Us</div>
                    <div className='clickableItem'>Careers</div>
                    <div className='clickableItem'>Industry news</div>
                    <div className='clickableItem'>Privacy Policy</div>
                    <div className='clickableItem'>Terms & Conditions</div>
                </div>
            </div>
            <div className='footCard'>
                <div className='footListTitle'>
                    Get In Touch
                </div>
                <div className='footList desc'>
                    <div>
                        <img src={email}/> <span>Email: support@insurezella.com</span>
                    </div>
                    <div>
                        <img src={phone}/> <span>Tel: +18772270774</span> 
                    </div>
                    <div> 
                        <img src={clock}/> <span>Hours: Mon-Fri 9:00AM - 5:00PM</span>
                    </div>
                    <div> 
                        <img src={contact}/> <span>300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile