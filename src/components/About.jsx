import '../styles/About.css';
import committedHelp from '../assets/committed-help.png'
import threeDots from '../assets/three-dots-blue-20979.png'
import shortTerm from '../assets/short-term-icon.png';

function About() {

  return (
    <div className='About'>
        <div className='cardAndDots'>
            <div className='cardContainer'>
                <div className='card'>
                    <img src={shortTerm} />
                    <span>
                        Health<br/>Insurance
                    </span>
                </div>
                <div className='card'>
                    <img src={shortTerm} />
                    <span>
                        Medicare<br/>supplement
                    </span>
                </div>
                <div className='card desktop'>
                    <img src={shortTerm} />
                    <span>
                        Medicare<br/>Advantage
                    </span>
                </div>
                <div className='card desktop'>
                    <img src={shortTerm} />
                    <span>
                        Life<br/>Insurance
                    </span>
                </div>
                <div className='card desktop'>
                    <img src={shortTerm} />
                    <span>
                        ACA<br/>Obamacare
                    </span>
                </div>
            </div>
            <img src={threeDots} className='threeDots'/>
        </div>


        <div className='aboutImgContainer'>
            <img src={committedHelp} alt="Committed help image" />
        </div>

        <div className='aboutText'>
            <div className='aboutTitle'>Commited to help you find the right plan</div>
            <div className='desc'>Insurance is an important financial tool that can help you protect yourself and your loved ones from financial losses in the event of an unexpected event. It is important to consider your individual needs and circumstances when choosing the right insurance coverage for you and your family.</div>
            <button className='aboutBtn'>ABOUT INSURELLA</button>
            <div className='benefitSection'>
                <div className='benefitCard'>
                    <img src={shortTerm}/>
                    <div>
                        <div>
                            Save Money
                        </div>
                        <div>
                            Compare Plans
                        </div>
                    </div>
                </div>
                <div className='benefitCard'>
                    <img src={shortTerm} />
                    <div>
                        <div>Licensed</div>
                        <div>Agents</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About