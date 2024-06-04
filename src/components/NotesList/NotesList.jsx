import React,{ useState, useEffect, useContext } from "react"
import { NotesListContext } from "../../context/NotesList-context";
import NoteCard from "../NoteCard/NoteCard"
import Pagination from '@mui/material/Pagination';
import "./NotesList-styles.css"

function NotesList() {
  const {notes} = useContext(NotesListContext)
  const [savedNotes, setSavedNotes] = useState([])
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginationPageCount = Math.ceil(savedNotes?.length/10)
  const firstIndex = 10 * page - 10
  const lastIndex = firstIndex + 10

  useEffect(()=>{
    if(savedNotes?.length <= 10){
        setPage(1)
    }
  },[savedNotes?.length])

  useEffect(()=>{
    const notes = JSON.parse(localStorage.getItem("notesList"));
    setSavedNotes(notes);
  },[notes])

    return (
      <div className="notesListPageContainer">
        <div className="notesListContainer">
          {savedNotes?.length ? savedNotes?.slice(firstIndex,lastIndex)?.map((note, index)=>
          <NoteCard key={index} title={note?.title} text={note?.text} noteIndex={index}/>
          ) : "No Notes"}
        </div>
        <Pagination count={paginationPageCount} page={page} onChange={handleChange} color="primary" />
      </div>
    );
  }
  
  export default NotesList;