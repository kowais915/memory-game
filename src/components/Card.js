import '../styles/Card.css'


const Card = ({source, card, cover, handleChoice, flipped}) => {
    
    const handleClick = (  ) => {
        handleChoice(card)
    }

    return ( 
        <div className="card">
            
                <div className={flipped ? "flipped": ""}>
                    
                    <img className='front' src={source}/>
                    <img className='back' onClick={handleClick} src={cover}/>

                </div>
                    
              
        </div>
     );
}
 
export default Card;
 