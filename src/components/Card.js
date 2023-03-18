import '../styles/Card.css'


const Card = ({source}) => {
    return ( 
        <div className="card">
            <img src={source}/>
        </div>
     );
}

 
export default Card;
