let bik = [];
let commonObject = {"title": 'busy one', 
"class": 'c type'};
let savedNotes = JSON.parse(localStorage.getItem('notes'));
bik.push(savedNotes)

console.log(bik)
bik.push(commonObject)
console.log(bik)
console.log(savedNotes)