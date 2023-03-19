import '../styles/Card.css'


const Card = ({source, card, cover, handleChoice}) => {
    
    const handleClick = ( card ) => {
        handleChoice(card)
    }

    return ( 
        <div className="card">
            
                <img className='front' src={source}/>
                <img className='back' onClick={handleClick} src={cover}/>
            
        </div>
     );
}

 
export default Card;
 