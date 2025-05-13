import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NoteDetail from './components/NoteDetail';
import NoteCard from './components/NoteCard';
import './App.css';
import CreateNote from './components/CreateNote';


function Home({notes}) {
  const navigate = useNavigate();
  return(
    <div className='app-container'>
    <h1>My Notes</h1>
    <div className='notes-grid'>
      {notes.map(note=> (
      <NoteCard key={note.id} note={note}/>

  ))}      
</div>
<button className='add-note-button'onClick={()=> navigate('/create')}>+ New Note</button>
</div>
  )
}
function App() {
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/notes')
    .then(res => res.json())
    .then(data => setNotes(data));
  }, []);
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home notes={notes} />}/>
          <Route path='/notes/:id' element={<NoteDetail />}/>
          <Route path='/create' element={<CreateNote />} />
    </Routes>
    </Router>
  )
}

export default App;
