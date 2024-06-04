import React,{ useState, useEffect, useContext } from "react"
import { NotesListContext } from "../../context/NotesList-context";
import NoteCard from "../NoteCard/NoteCard"
import "./NotesList-styles.css"

function NotesList() {
  const {notes} = useContext(NotesListContext)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(()=>{
    const notes = JSON.parse(localStorage.getItem("notesList"));
    setSavedNotes(notes);
  },[notes])

    return (
      <div className="notesListContainer">
        {savedNotes?.length ? savedNotes?.map((note, index)=>
          <NoteCard key={index} title={note?.title} text={note?.text} noteIndex={index}/>
          ) : "No Notes"}
      </div>
    );
  }
  
  export default NotesList;