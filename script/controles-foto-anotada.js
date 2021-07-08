let filtroQuery = document.querySelector('#filtro-da-foto');
let fotoQuery = document.querySelector('.foto-anotada > img');

function defineFiltro() {
	fotoQuery.style.filter = filtroQuery.value;
}

function readImage(event) {
  file = event.target.files[0];
  if (file.type && !file.type.startsWith('image/')) {
    alert('File is not an image.');
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    fotoQuery.src = event.target.result;
  });
  reader.readAsDataURL(file);
}

document.querySelector('#imagem').addEventListener('change', readImage);
filtroQuery.addEventListener('change', defineFiltro);