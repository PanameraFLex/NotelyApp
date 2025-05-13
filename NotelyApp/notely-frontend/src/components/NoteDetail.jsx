import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../CreateNote.css'

function NoteDetail(){
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
			<h2>{note.title}</h2>
			<p>{note.content}</p>
		</div>
		</div>
	);
}

export default NoteDetail;