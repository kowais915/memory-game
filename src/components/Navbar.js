const Navbar = ({shuffle}) => {
    return (
            <div className="nav">
        <h1 className="title">Memory Game!</h1>
        <button className="btn" onClick={shuffle}>New Game</button>
    </div>
      );
}
 
export default Navbar;