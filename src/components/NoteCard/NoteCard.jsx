import React, {useContext} from 'react';
import { NotesListContext } from "../../context/NotesList-context";
import {Box, Typography, Button, Card, CardActions, CardContent} from '@mui/material';
import {styles} from "./NoteCard-styles"

export default function NoteCard({title, text, noteIndex}) {
  const {deleteNote} = useContext(NotesListContext)
  return (
    <Box>
      <Card variant="elevation" style={styles.cardContainer}>
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {title || "Untitled"}
            </Typography>
            <textarea rows="50" cols="50" style={styles.cardTextArea} placeholder={text || ""} disabled></textarea>
          </CardContent>
          <CardActions style={styles.cardActions}>
            <Button size="small" style={{color:"red"}} onClick={()=>deleteNote(noteIndex)}>Remove</Button>
            <Button size="small">Open</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}