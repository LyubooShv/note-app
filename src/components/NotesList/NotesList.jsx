import React,{ useState, useContext } from "react"
import { NotesListContext } from "../../context/NotesList-context";
import NoteCard from "../NoteCard/NoteCard"
import "./NotesList-styles.css"

function NotesList() {
  const {notes} = useContext(NotesListContext)
  console.log(notes);
    return (
      <div className="notesListContainer">
        {notes?.length ? notes?.map((note, index)=>
          <NoteCard key={index} title={note?.title} text={note?.text} noteIndex={index}/>
          ) : "No Notes"}
      </div>
    );
  }
  
  export default NotesList;