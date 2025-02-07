document.addEventListener('DOMContentLoaded', () => {
  const notesTextarea = document.getElementById('notes');

  // Load saved notes from local storage
  notesTextarea.value = localStorage.getItem('userNotes') || '';

  // Save notes to local storage on input
  notesTextarea.addEventListener('input', () => {
    localStorage.setItem('userNotes', notesTextarea.value);
  });
});