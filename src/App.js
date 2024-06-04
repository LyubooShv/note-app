import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NotesListProvider from "./context/NotesList-context"
import NotesList from "./components/NotesList/NotesList"
import Header from "./components/Header/Header"
import CurrentNote from "./pages/CurrentNote/CurrentNote";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <NotesListProvider>
        <div className="mainContainer">
          <Header/>
          <div className="noteContainer">
            <Routes>
              <Route path="/" element={<NotesList/>}/>
              <Route path="/edit-note" element={<CurrentNote/>}/>
            </Routes>
          </div>
       </div> 
      </NotesListProvider>
    </BrowserRouter>
  );
}

export default App;
