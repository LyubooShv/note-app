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
    const notesList = [...notes];
    notesList.push({title, text});
    setNotes(notesList);
  };

  const deleteNote = (currentNote) => {
    setNotes(notes.filter((note, index) => index !== currentNote));
  };

  const updateNote = (e) => {

  };


  useEffect(() => {
    // console.log(notes);
  }, []);

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