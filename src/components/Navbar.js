import '../styles/Navbar.css'

const Navbar = ({shuffle, turns, score}) => {
    return (
            <div className="nav">
                {/* <h1 className="title">Memory Game!</h1> */}

                <div className='links'>
                    <ul>
                        <li><a href="">Code</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Portfolio</a></li>
                    </ul>
                   

                </div>

                <div className='turns'>
                    <p>Turns: {turns}</p>
                </div>

                <div className='turns'>
                    <p>Score: {score}</p>
                </div>

                <button className="btn" onClick={shuffle}>New Game</button>

             </div>
      );
}
 
export default Navbar;