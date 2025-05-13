import { useNavigate } from "react-router-dom";

function NoteCard({ note }) {
	const navigate = useNavigate();
	return (
		<div className="note-card"onClick={()=> navigate(`/notes/${note.id}`)}>
			<h3>{note.title}</h3>
			<p>{note.content.substring(0, 100)}</p>
		</div>
	);
}
export default NoteCard;