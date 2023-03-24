import {useState } from 'react';

// importing styles
import './styles/Card.css'


// importing components
import Card from './components/Card'

const images = [
  {"src": "/img/clock.jpg"},
  {"src": "/img/dome.jpg"},
  {"src": "/img/fcse.jpg"},
  {"src": "/img/gate.jpg"},
  {"src": "/img/lib.jpg"},
  {"src": "/img/tuck.jpg"},
]

function App() {
const [card, setCard ] = useState([])
const[turn, setTurn ] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo ] = useState(null)



  const shuffle = () =>{
    const shuffledCards = [...images, ...images]
      .sort(()=>{
        return (Math.random() - 0.5)
      })
      .map((card ) => ({...card, id: Math.random()}))

      setCard(shuffledCards)
      setTurn(0)
  }

  console.log(card, turn)


  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }



  return (
    <div className="App">
      {/* navbar */}
      <div className="nav">
          <h1 className="title">Memory Game!</h1>
          <button className="btn" onClick={shuffle}>Reset Game</button>
      </div>


      {/* card grid */}
      <div className="card-grid">

        {card.map((card)=>{

            return(
              
                  <Card
                    handleChoice = {handleChoice}
                    card={card}
                    key={card.id}
                    source = {card.src}
                    cover = {"../img/logo.png"}
                  />
              
            )
        })}



      </div>
      

    </div>
  );
}

export default App;
