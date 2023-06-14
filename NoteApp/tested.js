// window.onload = function(){
//     getNote = JSON.parse(localStorage.getItem('notes'))
//     display = document.querySelector('#noteLength')
//     if(getNote != null){
//         noteLength = getNote.length
//         display.innerHTML = `<p>you have ${noteLength} note</p>`
//         // 
//     }else{
//         display.innerHTML = `<p>you have 0 note</p>`
//     }
    
// }
function saveNote(title, content, author, msg){
    title = document.querySelector('.title').value.trim();
    content = document.querySelector('#content').value.trim()
    author = document.querySelector('.author').value.trim()
    let date = new Date()
    timestamp = date.getMilliseconds()
    //console.log(timestamp)
    msg = document.querySelector('#info')
    let warning = document.createElement('h3')
    // title.length==0 || content.length ==0  ? alert('no note'): alert('save note')
    let noteSave = JSON.parse(localStorage.getItem('notes'))
    if(title.length==0 || content.length ==0 || author.length==0){
        // display message for empty text field
        warning.textContent = 'fill all required field'
        msg.setAttribute('class', 'warning')
        msg.appendChild(warning)
    }else{
        let note_content = []
        if(noteSave != null || noteSave != undefined){
            // there is note
            // if(noteSave[0]['title'] != title){
            //     alert('note exist')
            // }
            if(noteSave.length >=1){
                noteSave.push({title, content, author, timestamp})
                //  console.log(noteSave)
                // note_content.push({title, content, author})
                localStorage.setItem('notes', JSON.stringify(noteSave))
                warning.textContent = 'new note saved successfuly'
                msg.setAttribute('class', 'success')
                msg.appendChild(warning)
                // location.reload()
            }
           
            // alert('proceed item found')
        }else{
            note_content.push({title, content, author, timestamp})
            localStorage.setItem('notes', JSON.stringify(note_content))
            warning.textContent = 'first note saved successfuly'
            msg.setAttribute('class', 'success')
            msg.appendChild(warning)
            // location.reload()
        }
        // logic for saving other note
        // alert('save the note')
    } 

    // return noteSave.length;
}
let viewButton = document.querySelector('#noteView')
viewButton.addEventListener('click', function(e){
    e.preventDefault()
    let wapper = document.querySelector('#wapper')
    // let html_template = document.createElement('div')
    wapper.innerHTML = `<div id='content'>
                                <h3>these is to display the note</h3>`
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
                                        <button onclick="Edit(${store[i]['timestamp']})">Edit</button>
                                        <button onclick="Delete(${store[i]['timestamp']})">Delete</button>
                                    </div>`
    }
    wapper.innerHTML += "</div>"
    //wapper.innerHTML = html_template
})