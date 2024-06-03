import "./Header-styles.css"

function Header() {
    return (
      <div className="headerContainer">
        <div className="addNoteBtn">
          <button>Add Note</button>
        </div>
        <div className="addNoteTitle">
          <h1>My Notes</h1>
        </div>
      </div>
    );
  }
  
  export default Header;