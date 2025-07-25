const addNoteBtn = document.getElementById("addNoteBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
    const noteItem = document.createElement("li");
    noteItem.classList.add("note-item");

    const span = document.createElement("span");
    span.textContent = `📝 ${noteText}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      noteItem.remove();
    });

    noteItem.appendChild(span);
    noteItem.appendChild(deleteBtn);
    notesList.appendChild(noteItem);

    noteInput.value = "";
  } else {
    alert("Please enter a note!");
  }
});
