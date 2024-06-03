import NoteCard from "../NoteCard/NoteCard"
import "./NotesList-styles.css"

function NotesList() {
    return (
      <div className="notesListContainer">
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
        <NoteCard/>
      </div>
    );
  }
  
  export default NotesList;