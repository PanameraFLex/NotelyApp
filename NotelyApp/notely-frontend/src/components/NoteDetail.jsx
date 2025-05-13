import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../CreateNote.css'
import '../App.css'

function NoteDetail(onEdit, onDelete){
	const {id} = useParams();
	const [note, setNote] =useState(null);
	
	useEffect(()=>{
		fetch(`http://localhost:3000/notes/${id}`)
		.then(res => res.json())
		.then(data => setNote(data));
	}, [id]);

	if (!note) return <p>Loading...</p>;

	return(
		<div className="note-form-container">
		<div className="note-form" style={{padding: '2rem'}}>
		<div className="note-actions" >
				<button onClick={()=> onEdit(note.id)}>Edit</button>
				<button onClick={()=> onDelete(note.id)}>Delete</button>
			</div>
			<h2>{note.title}</h2>
			<p>{note.content}</p>
		</div>
		</div>
	);
}

export default NoteDetail;