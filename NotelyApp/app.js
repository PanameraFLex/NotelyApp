const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;
const dataPath = path.join(__dirname, 'notes.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

async function readNotes() {
	try {
		const data = await fs.readFile(dataPath, 'utf8');
		return JSON.parse(data);
	} catch (error) {
		if (error.code === 'ENOENT') return [];
		throw error;
	}
}

async function writeNotes(notes) {
	await fs.writeFile(dataPath, JSON.stringify(notes, null, 2));
}

// Routes
// Create a note
app.post('/notes', async (req, res)=>{
	try{
		const { title, content } = req.body;

		if(!title || !content) {
			return res.status(400).json({ error: 'title and content are required'});
		}
	
	const notes = await readNotes();
	const newNote = {
		id: uuidv4(),
		title,
		content,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	};
	
	notes.push(newNote);
	await writeNotes(notes);
	res.status(201).json(newNote);
}
	catch (error) {
		res.status(500).json({ error: 'Server error'});
	}
});

//Get all notes
app.get('/notes', async (req, res)=>{
	try {
		const notes = await readNotes();
		res.json(notes);
	} catch (error){
		res.status(500).json({error: 'Server error'});
	}
})

//Get single  note
app.get('/notes/:id', async (req, res)=>{
	try {
		const notes = await readNotes();
		const note = notes.find(n => n.id === req.params.id);
		
		if (!note) 
			return res.status(404).json({error:'Note not found'})
		else
			res.json(note);
	}
	catch (error) {
		res.status(500).json({error: 'Server error'})
	}
});

//Update note
app.put('/notes/:id', async (req, res)=>{
	try{
		const notes = await readNotes();
		const index = notes.findIndex(n => n.id === req.params.id);

		if(index === -1){
			return res.status(404).json({ error: 'Note not found'})}
		
		notes[index] = {
			...notes[index],
			...req.body,
			updatedAt: new Date().toISOString()
		}
		await writeNotes(notes);
		res.json(notes[index]);
	}
	catch (error){
		res.status(500).json({ error: 'Server error'})
	}
});

// Delete note
app.delete('/notes/:id', async (req, res)=>{
	try {
		let notes = await readNotes();
		const initialLength = notes.length;

		notes = notes.filter(n => n.id !== req.params.id);

		if (notes.length === initialLength){
			return res.status(404).json({ error: 'Note not found'})
		}
		await writeNotes(notes);
		res.status(204).send();
	}
	catch (error){
		res.status(500).json({ error: 'Server error'});
	}
})

//Start server
app.listen(port, ()=>{
	console.log(`Server running at http://localhost:${port}`);
})