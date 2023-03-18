import {useState } from 'react';

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
  return (
    <div className="App">
      <div className="nav">
          <h1 className="title">Memory Game!</h1>
          <button className="btn" onClick={shuffle}>Reset Game</button>
      </div>
      

    </div>
  );
}

export default App;
