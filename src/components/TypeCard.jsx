import '../styles/Types.css';

function TypeCard({cardImg, cardTitle}) {

  return (
    <div className='typeCard'>
        <img src={cardImg} />
        <div className='cardInfo'>
            <div className='cardTitle'>{cardTitle}</div>
            <div className='cardDesc'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy</div>
        </div> 
    </div>
  )
}

export default TypeCard