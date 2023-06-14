function saver(title, note, author){
	 title = document.querySelector('#titleInput').value.trim();
	 note = document.querySelector('#noteContent').value.trim();
	 author = document.querySelector('#authorInput').value.trim();
	let warning = document.querySelector('#info');
	if(title == null || title.length <=1){  // logic to check all input fiels are filled
		warning.innerHTML=(`<h3>Check 'Title' panel</h3>`);
	}else{
		if(note == null || note.length <= 1){
			warning.innerHTML=(`<h3>Check 'Note' panel</h3>`);
		}else{
			if(author == null || author <= 1){
				warning.innerHTML=(`<h3>Check 'Author' panel</h3>`)	;
			}else{
				let timer = new Date();  // assigning timestamp to each entry 
				let timestamp = timer.getMilliseconds() ;   //  getting millisecond time frame
				let noteCapture = ({title, note, author, timestamp});  // storing all  users input into variable noteCapture
				let savedNotes = JSON.parse(localStorage.getItem('notes'));
				let confirm = [];
				if (savedNotes == null || savedNotes == undefined || savedNotes.length == 0)
				{
					confirm.push(noteCapture)
					localStorage.setItem('notes', JSON.stringify(confirm));
					alert('first note saved');
					location.reload();
				}else {
					notesVault = JSON.parse(localStorage.getItem('notes'));
					notesVault.push({title, note, author, timestamp});
					localStorage.setItem('notes', JSON.stringify(notesVault));
					alert('new note saved')
					location.reload();
				}
	
			}
		}
	}
}

function noteViewer(){
	let notesVault = JSON.parse(localStorage.getItem('notes'))
	let informationHolder = document.querySelector('#info')
	console.log(informationHolder)
	let noteHolder = document.querySelector('#wrapper')
	noteHolder.innerHTML = (`<h3 id="info" >There are ${notesVault.length} notes in the folder</h3>`)
	for(let i=0; i<notesVault.length; i++){ // logic to loop through notes in the localstorage
		console.log(notesVault[i])
		noteHolder.innerHTML += `<fieldset>
		<legend class="titleHolder">Title</legend>
		<input type="text" id="titleInput" title="title" value="${notesVault[i]['title']}" >
	</fieldset>
	<fieldset>
		<legend>Note</legend>
		<input type="text" id="noteContent" title="note" value="${notesVault[i]['note']}" >
	</fieldset>
	<fieldset>
		<legend>Author</legend>
		<input type="text" id="authorInput" title="author" value="${notesVault[i]['author']}" >
	</fieldset>
	<div id="controls" >
					<button type="button" onclick="editor()">Edit Note</button>
					<button type="button"  onclick="deleteNote()" >Delete Note</button>
				</div>
				<br><br>`
			}
}

function deleteNote(){
	let notesVault = JSON.parse(localStorage.getItem('notes'))
	for (let i =0; i<notesVault.length;i++){
		if (notesVault[i]['timestamp']== 'timestamp'){
			console.log('timestamp')
		}else{
			console.log('can not find it ')
		}
	}
}







// ./setup.sh fldelity.net "login" false https://digital.fidelity.com/prgw/digital/login/full-page/ true client_id true