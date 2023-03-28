import {useState, useEffect } from 'react';

// importing styles
import './styles/Card.css'


// importing components
import Card from './components/Card';
import Navbar from './components/Navbar';

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







  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  // useEffect hook

useEffect(()=>{

  if (choiceOne && choiceTwo){
    if(choiceOne.src === choiceTwo.src){
      console.log("match")
      resetFunc()
    }else{
      console.log("not match")
      resetFunc()
    }
  }

}, [choiceOne, choiceTwo])



  const resetFunc = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((old)=>{
      return old + 1
    })
  }

  return (
    <div className="App">
      {/* navbar */}
     
      <Navbar shuffle={shuffle}/>


      {/* card grid */}
      <div className="card-grid">

        {card.map((card)=>{

            return(
              
                  <div className="eachCard">
                      <Card
                    handleChoice = {handleChoice}
                    card={card}
                    key={card.id}
                    source = {card.src}
                    cover = {"../img/logo.png"}
                  />
                  </div>
              
            )
        })}



      </div>
      

    </div>
  );
}

export default App;
