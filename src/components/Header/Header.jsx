import React,{ useState, useContext } from "react"
import { useLocation } from "react-router-dom";
import BasicModal from "../Modal";
import "./Header-styles.css"

function Header() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const location = useLocation()

    return (
      <div className="headerContainer">
        {location?.pathname === "/" && <div className="addNoteBtn">
          <button 
          onClick={handleOpen}
          >Add Note</button>
        </div>}
        <div className="addNoteTitle">
          <h1>My Notes</h1>
        </div>
        <BasicModal open={open} handleClose={handleClose}/>
      </div>
    );
  }
  
  export default Header;