import React,{ useState, useContext } from "react"
import BasicModal from "../Modal";
import "./Header-styles.css"

function Header() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div className="headerContainer">
        <div className="addNoteBtn">
          <button 
          onClick={handleOpen}
          >Add Note</button>
        </div>
        <div className="addNoteTitle">
          <h1>My Notes</h1>
        </div>
        <BasicModal open={open} handleClose={handleClose}/>
      </div>
    );
  }
  
  export default Header;