import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CreateNote.css'

function CreateNote(){
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetch('http://localhost:3000/notes',{
			method: 'POST',
			headers: { 'Content-Type':'application/json'},
			body: JSON.stringify({title, content})
		})
		navigate('/');
	};
	return(
		<div className="note-form-container">
		<form className="note-form" onSubmit={handleSubmit} style={{ padding:'2rem'}}>
			<input placeholder="Title" value={title} onChange={e=> setTitle(e.target.value)} required />
			<textarea placeholder="Content" value={content} onChange={e=> setContent(e.target.value)} required />
				<button type="submit">Save Note</button>
		</form>
		</div>
	)
}

export default CreateNote;