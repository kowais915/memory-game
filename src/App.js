import {useState, useEffect } from 'react';

// importing styles
import './styles/Card.css'


// importing components
import Card from './components/Card';
import Navbar from './components/Navbar';

const images = [
  {"src": "/img/clock.jpg", match:false},
  {"src": "/img/dome.jpg", match:false},
  {"src": "/img/fcse.jpg", match:false},
  {"src": "/img/gate.jpg", match:false},
  {"src": "/img/lib.jpg", match:false},
  {"src": "/img/tuck.jpg", match:false},
]

function App() {
const [card, setCard ] = useState([])
const[turn, setTurn ] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo ] = useState(null)
const [score, setScore] = useState(0)




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

    // if the two cards match
    if(choiceOne.src === choiceTwo.src){

      setCard(oldCard =>{
        return(
          oldCard.map((card)=>{
            if (card.src === choiceOne.src){
              return {...card, match: true}
            }else{
              return card
            }
          })
        )
      })

      setScore((old)=>{
        return old + 1
      })


      

      // calling the reset function
      resetFunc()

      // else if (choiceOne.src !== choiceTwo.src)

    }else{
      console.log("not match")
      resetFunc()
    }
  }

}, [choiceOne, choiceTwo])

console.log(card)


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
     
      <Navbar 
        shuffle={shuffle} 
        turns = {turn}
        score = {score}
        
      />


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
                    flipped = {card.match || card === choiceOne || card === choiceTwo}
                  />
                  </div>
              
            )
        })}



      </div>
      

    </div>
  );
}

export default App;
