import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteCard from './components/NoteCard';
import logo from './logo.svg';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(data => setNotes(data));
  }, []);
  return (
    <div className='app-container'>
      <h1>My Notes</h1>
      <div className='notes-grid'>
      {notes.map(note=> (
        <NoteCard key={note.id} note={note}/>

      ))}      
      </div>
      <button className='add-note-button'>+ New Note</button>
    </div>
  )
}

export default App;
