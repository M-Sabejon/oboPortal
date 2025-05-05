const icons = {
  pdf: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
  docx: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
  xlsx: "https://cdn-icons-png.flaticon.com/512/888/888853.png",
  zip: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
  png: "https://cdn-icons-png.flaticon.com/512/337/337948.png",
  default: "https://cdn-icons-png.flaticon.com/512/455/455705.png"
};
  
fetch('files.json')
.then(response => response.json())
.then(data => {
  const fileGrid = document.getElementById('fileGrid');
  data.forEach(file => {
    const card = document.createElement('div');
    card.className = 'file-card';
    card.innerHTML = `
      <h4>${file.title}</h4>
      <p>${file.type.toUpperCase()}</p>
      <a href="https://drive.google.com/uc?export=download&id=${file.fileId}" target="_blank">
        <button>Download</button>
      </a>
    `;
    fileGrid.appendChild(card);
  });
})
.catch(error => {
  console.error('Error loading files:', error);
  document.getElementById('fileGrid').innerHTML = '<p>Error loading files.</p>';
});

  