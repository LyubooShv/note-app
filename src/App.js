import NotesList from "./components/NotesList/NotesList"
import Header from "./components/Header/Header"
import CurrentNote from "./pages/CurrentNote/CurrentNote";
import "./App.css"

function App() {
  return (
    <div className="mainContainer">
        <Header/>
        <div className="noteContainer">
          <NotesList/>
          <CurrentNote/>
        </div>
    </div>
  );
}

export default App;
