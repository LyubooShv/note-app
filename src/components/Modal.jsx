import  React, {useState, useContext} from 'react';
import { NotesListContext } from "../context/NotesList-context";
import {Box, Typography, Modal} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:400,
  display:"flex",
  flexDirection:"column",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, handleClose}) {
    const {createNote} = useContext(NotesListContext)
    const [noteInfo, setNoteInfo] = useState({title:"",text:""})
    const addTitle = (e) => setNoteInfo({...noteInfo, title:e.target.value})
    const addText = (e) => setNoteInfo({...noteInfo, text:e.target.value})
    const addNote = () => {
        createNote(noteInfo?.title,noteInfo?.text);
        setNoteInfo({title:"",text:""});
        handleClose();
    }
    const closeModal = () => {
        setNoteInfo({title:"",text:""});
        handleClose();
    }
  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <label>Title:</label>
            <input style={{margin:"10px 0"}} onChange={(e)=>addTitle(e)}/>
            <label>Text:</label>
            <textarea style={{height:"100%"}} onChange={(e)=>addText(e)}/>
            <div>
                <button style={{width:"50px", margin:" 5px"}} onClick={addNote}>
                    Save
                </button>
                <button style={{width:"50px", margin:" 5px 0"}} onClick={closeModal}>
                    Close
                </button>
            </div>
        </Box>
      </Modal>
    </Box>
  );
}