import '../styles/Card.css'


const Card = ({source, cover}) => {
    console.log(cover)
    return ( 
        <div className="card">
            
                <img className='front' src={source}/>
                <img className='back' src={cover}/>
            
        </div>
     );
}

 
export default Card;
