const saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", () => {
    const noteInput = document.getElementById("note-input");
    const note = noteInput.value;
    console.log(note)
    window.electronAPI.saveNote(note)
})

const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener('click', () => {
    const noteInput = document.getElementById("note-input");
    const note = noteInput.value;
    console.log(note);
    window.electronAPI.deleteNote(note)

})
