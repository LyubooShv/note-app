import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotesListContext = createContext({
  notes: [],
  currentNoteInfo: [],
  createNote: () => {},
  deleteNote: () => {},
  deleteCurrentNote: () => {},
  takeCurrentNoteInfo: () => {},
  updateNote: () => {},
});

const NotesListProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [currentNoteInfo, setCurrentNoteInfo] = useState([]);
  const navigate = useNavigate()

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

  const deleteCurrentNote = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notesList"));
    const notesList = savedNotes.filter((note, index) => index !== currentNoteInfo?.noteIndex)
    setNotes(notesList);
    localStorage.setItem("notesList", JSON.stringify(notesList));
    navigate("/")
  };

  const takeCurrentNoteInfo = (title, text, noteIndex) => {
    setCurrentNoteInfo({title, text, noteIndex})
    localStorage.setItem("currentNote", JSON.stringify({title, text, noteIndex}));
  }

  const updateNote = (note) => {
    const savedNotes = JSON.parse(localStorage.getItem("notesList"));
    const notesList = [...savedNotes];
    notesList.splice(currentNoteInfo?.noteIndex,1,note);
    setNotes(notesList);
    localStorage.setItem("notesList", JSON.stringify(notesList));
    navigate("/")
  };

  return (
    <NotesListContext.Provider
      value={{
        notes,
        currentNoteInfo,
        createNote,
        deleteNote,
        deleteCurrentNote,
        takeCurrentNoteInfo,
        updateNote,
      }}
    >
      {children}
    </NotesListContext.Provider>
  );
};

export default NotesListProvider;