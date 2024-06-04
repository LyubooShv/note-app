import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesListContext } from "../../context/NotesList-context";
import "./CurrentNote-styles.css"

function CurrentNote() {
  const {updateNote, deleteCurrentNote} = useContext(NotesListContext)
  const currentNote = JSON.parse(localStorage.getItem("currentNote"));
  const [currentNoteValues, setCurrentNoteValues] = useState({title:currentNote?.title,text:currentNote?.text})
  const editTitle = (e) => setCurrentNoteValues({...currentNoteValues, title:e.target.value})
  const navigate = useNavigate()
  const editText = (e) => setCurrentNoteValues({...currentNoteValues, text:e.target.value})
    return (
      <div className="currentNoteContainer" >
        <div className="currentNoteTitle">
          <label>Title:</label>
          <input style={{margin:"10px 0"}} value={currentNoteValues?.title} onChange={editTitle}/>
        </div>
        <div className="currentNoteText">
          <label>Text:</label>
          <textarea style={{height:"100%"}} value={currentNoteValues?.text} onChange={editText}/>
        </div>
          <div className="currentNoteBtn">
            <button style={{width:"80px"}} onClick={()=>updateNote(currentNoteValues)}>
              Save
            </button>
            <button style={{width:"80px"}} onClick={deleteCurrentNote}>
              Remove
            </button>
            <button style={{width:"80px"}} onClick={() => navigate("/")}>
              Close
            </button>
          </div>
      </div>
    );
  }
  
  export default CurrentNote;