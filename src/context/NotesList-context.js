import React, { createContext, useState, useEffect } from "react";

export const NotesListContext = createContext({
  notes: [],
  createNote: () => {},
  deleteNote: () => {},
  updateNote: () => {},
});

const NotesListProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const createNote = (title, text) => {
    const savedNotes = JSON.parse(localStorage.getItem("notesList"));
    const notesList = [...savedNotes];
    notesList.push({title, text});
    setNotes(notesList);
    localStorage.setItem("notesList", JSON.stringify(notesList));
  };

  const deleteNote = (currentNote) => {
    const savedNotes = JSON.parse(localStorage.getItem("notesList"));
    const notesList = savedNotes.filter((note, index) => index !== currentNote)
    setNotes(notesList);
    localStorage.setItem("notesList", JSON.stringify(notesList));
  };

  const updateNote = (e) => {

  };


  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <NotesListContext.Provider
      value={{
        notes,
        createNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NotesListContext.Provider>
  );
};

export default NotesListProvider;