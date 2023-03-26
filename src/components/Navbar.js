import '../styles/Navbar.css'

const Navbar = ({shuffle}) => {
    return (
            <div className="nav">
                <h1 className="title">Memory Game!</h1>
                <div className='links'>
                <ul>
                    <li><a href="">Code</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Portfolio</a></li>
                </ul>
                <button className="btn" onClick={shuffle}>New Game</button>

                </div>
             </div>
      );
}
 
export default Navbar;