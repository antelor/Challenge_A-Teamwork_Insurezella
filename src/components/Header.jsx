import logo from '../assets/logo.png';
import hambIcon from '../assets/Hamburger_icon_white.svg';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import '../styles/Header.css'

function Header() {

  return (
    <nav>
        <img src={logo} className="logo" alt="Insurezella logo" />
        <img src={hambIcon} className="hambIcon" alt="Hamburger Icon" />
        <span className='connect '>Want to connect with us?</span>
        <span className='contact'>
            <span className='mail'>
                <img src={mail} alt="Mail icon" /> 
                <div>Mail us: support@insurezella.com</div>
            </span>
            <span className='call'>
                <img src={phone} alt="Phone icon" /> 
                <div>Call us: (877) 227 0774</div>
            </span>
        </span>
    </nav>
  )
}

export default Header