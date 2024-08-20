//same structure as the about section, therefore i reused the css
import '../styles/About.css';
import '../styles/LearnMore.css';
import protecting from '../assets/protecting.png';

function LearnMore() {

  return (
    <div className='learnMore'>
        <div className='imgContainer'>
            <img src={protecting} />
        </div>

        <div className='aboutText'>
            <div className='aboutTitle'>Protecting people, one policy at a time.</div>
            <div className='desc'>We are commited to delivering the highest standards of protection, tailored to meet the uniqu eneeds of each individual and family. Our dedicated team of professionals works tirelessly to offer comprehensive insurance solutions that not only safeguard your assets but also offer you the support and assistance you need in times of uncertainty.</div>
            <button>LEARN MORE</button>
        </div>
    </div>
  )
}

export default LearnMore