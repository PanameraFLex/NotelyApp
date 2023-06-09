function saveNote(title, content, author, msg, timeStamp){
	title = document.querySelector('.title').value.trim();
	content = document.querySelector('#contentTextArea').value.trim();
	author = document.querySelector('.author').value.trim();
	msg = document.querySelector('#info');
	timeLabel = new Date();
	timeStamp = timeLabel.getMilliseconds();
	let warning = document.createElement('h3');
	let noteSave = JSON.parse(localStorage.getItem('notes'))
	if((title.length == 0) || (content.length == 0) || (author.length==0)) 
	{warning.textContent = 'fill all required field'
	msg.setAttribute('class', 'warning')
	msg.appendChild(warning)
	}else{
		let note_content = []
		if(noteSave != null || noteSave != undefined){
			console.log(noteSave[0]['title'])
			if(noteSave.length >=1){
				noteSave.push({title, content, author, timeStamp})
				localStorage.setItem('notes', JSON.stringify(noteSave))
				warning.textContent = 'new note saved successfuly'
				msg.setAttribute('class', 'success')
				msg.appendChild(warning)
			}
		}else{
			note_content.push({title, content, author, timeStamp})
			localStorage.setItem('notes', JSON.stringify(note_content))
			warning.textContent = 'first note saved successfuly'
			msg.setAttribute('class', 'success')
			msg.appendChild(warning)
		}		// logic for saving other note
} 
}


let viewButton = document.querySelector('#noteView')
viewButton.addEventListener('click', function(e){
    e.preventDefault()
    let wapper = document.querySelector('#wrapper')
    // let html_template = document.createElement('div')
    wapper.innerHTML = `<div id='content'>
                                <h3 class="noteHeader" >NOTES VIEWER</h3>`
    //get note in the store
    let store = JSON.parse(localStorage.getItem('notes'))
    wapper.innerHTML += `<h3 id="noteLength">you have ${store.length} notes in the store</h3>`
    for(let i=0; i<store.length; i++){
        console.log(store[i])
        wapper.innerHTML += `<div>
                                        <h3>${store[i]['title']}</h3>
                                        <p>${store[i]['content']}</p>
                                        <p>${store[i]['author']}</p>
                                    </div>
                                    <div id='controls'>
                                        <button onclick="Edit(${store[i]['timeStamp']})">Edit</button>
                                        <button onclick="Delete(${store[i]['timeStamp']})">Delete</button>
                                    </div>`
    }
    wapper.innerHTML += "</div>"
    //wapper.innerHTML = html_template
})


//  THIS POPULATES THE FOLLOWING HTML TO THE BOTTOM OF THE PAGE OF NOTES
// function updateNotes(notes){
// 	notePage = document.querySelector('#noteViewer')  // Variable holding the container where the note items would be displayed
// 	// console.log(notePage)
	
// 	notes = JSON.parse(localStorage.getItem('notes'))  // getting notes from the localstorage
// 	notePage.innerHTML =`<fieldset id="">
// 	<legend>Note Viewer</legend>
// 	<input type="text" placeholder="" class="" value ="${notes[1]['title']}">
// </fieldset>`
// 	console.log(notes)
// 	console.log(notes[2]['content'])
	
// }



// if note_save[0]['title'] == title{}    //  THis to iterate through the notes in local storage



// TO DELETE
// 1. pASS TIMESTAMP AS A PARAMETER TO THE DELETE FUNCTION 
// 2. LOOP THROUGH THE NOTES IN THE STORE
// 3. USE CONTROL STATE TO  PICK A PARTICULAR NOTE 
// 4. DELETE THE NOTE THAT HAS BEEN HIGHLIGHTE